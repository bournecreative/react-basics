import { useEffect, useState } from "react"
import { Button, Tag } from "antd"
import { SyncOutlined } from "@ant-design/icons"
import { FollowAlong } from "../../components/FollowAlong/index"

export const ReactUseEffect = () => {
	const [trivia, setTrivia] = useState({ info: "", loading: true })
	const [triviaCount, setTriviaCount] = useState(0)
	const [toggle, setToggle] = useState(true)
	const [mountMsg, setMountMsg] = useState("")

	useEffect(() => {
		setTrivia((currentState) => ({
			...currentState,
			loading: true,
		}))

		const randomNumber = Math.floor(Math.random() * 100)
		// fetch(`http://numbersapi.com/${randomNumber}/trivia`)
		fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
			.then((response) => response.json())
			.then((data) => {
				setTrivia({ info: data.slip["advice"], loading: false })
			})
	}, [triviaCount])

	return (
		<div style={{ padding: "0 20px" }}>
			<div>
				<h1>UseEffect tidbits</h1>
				<ul>
					<li>
						Multiple useEffets can be used. They will fire in the
						order declared.
					</li>
					<li>
						useEffect will run every render if no dependency is
						passed.
					</li>
					<li>
						useEffect will run only on page load if [] is passed as
						as a dependency.
					</li>
					<li>
						useEffect will run when a specific value is updated if
						that value is passed as a dependency.
					</li>
					<li>
						You can pass more then 1 argument as a dependency.
						Example [url, loading]
					</li>
					<li>
						Care should be taken when setting up dependencies to
						prevent infinite loops from occuring.
					</li>
					<li>useEffect is a good place to fetch APIs</li>
				</ul>
				<Button
					style={{ marginBottom: "12px" }}
					primary
					onClick={() => setTriviaCount(triviaCount + 1)}
				>
					Get Advice
				</Button>
				<div>
					<Tag
						icon={trivia.loading ? <SyncOutlined spin /> : ""}
						color="processing"
					>
						{trivia.info}
					</Tag>
				</div>
			</div>
			<div style={{ marginTop: "20px" }}>
				<h2>useEffect's clean up function</h2>
				<p>
					Manage EventListeners with useEffect. Make note of the red
					dot following the cursor. There is a mousemove event
					attached when the "Follow Along" component mounts. We can
					also remove EventListeners using the useEffects return
					function which runs right before the component is unmounted.
					You can verify the mechanics of the event listeners being
					added and removed by viewing the output console logs and
					toggling the component on/off.
				</p>
				<Button onClick={() => setToggle(!toggle)}>Toggle</Button>
				{toggle && <FollowAlong setMsg={setMountMsg} />}
				<p>{mountMsg}</p>
			</div>
		</div>
	)
}
