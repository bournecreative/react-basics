import { useEffect, useState } from "react"
import { Button, Tag } from "antd"
import { SyncOutlined } from "@ant-design/icons"

export const ReactUseEffect = () => {
	const [trivia, setTrivia] = useState({ info: "", loading: true })
	const [triviaCount, setTriviaCount] = useState(0)

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
						useEffects allow us to do some clean up via their return
						function that runs before component is unmounted.
					</li>
					<li>useEffect is a good place to fetch APIs</li>
					<li>
						useEffect can be run only on load, every render or only
						when specific values are updated
					</li>
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
		</div>
	)
}
