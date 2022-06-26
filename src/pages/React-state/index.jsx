import { useState } from "react"
import { Tag, Button } from "antd"

// this will only be run once
function expensiveComputation() {
	console.log("did i run")
	return 100
}

export const ReactState = () => {
	const [expensiveCount, setExpensiveCount] = useState(() =>
		expensiveComputation()
	)
	const [count, setCount] = useState(0)

	return (
		<div style={{ padding: "0 20px" }}>
			<h1>useState</h1>
			<h2>Expensive 1 time initialization</h2>

			<p>
				I was unaware that we can pass a function to useState's state
				property to initializate an expensive computation 1 time. This
				expensive computation will only be rendered once.
				<br />
				<br />
				Render the page a number a times using the button to increment
				count. Notice from the console log that are simulated expensive
				computation is only exectured once on initalization!
			</p>
			<p>
				Setting count with an updater function is another option to set
				state. This is helpful to avoid multiple updates from happening
				at the same time.{" "}
			</p>
			<div style={{ padding: "10px 0" }}>
				<Tag color="blue">
					Simulated expensive calculation - check console log
					{expensiveCount}
				</Tag>
			</div>
			<div style={{ padding: "10px 0" }}>
				<Tag color="red">Times rendered {count}</Tag>
			</div>
			<Button onClick={() => setCount(count + 1)}>Render</Button>
			{/* same as above but using an updater function */}
			{/* <Button onClick={() => setCount((currentCount => currentCount + 1))}>Render</Button> */}
		</div>
	)
}
