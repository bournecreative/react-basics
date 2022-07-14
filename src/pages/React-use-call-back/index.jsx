import { useState, useCallback } from "react"
import { Counter } from "../../components/Counter/index"
import { Tag } from "antd"

export const ReactUseCallBack = () => {
	const [count, setCount] = useState(0)

	const increment = useCallback(
		(n) => {
			setCount((c) => c + n) //
		},
		[setCount]
	)

	return (
		<div>
			<h1>React useCallBack</h1>
			<p>
				In the initial example of this function we passed a function as
				a prop to its child prop. There is nothing wrong with this
				unless we would like to wrap the child component in a React memo
				function to prevent it from rendering if its props don't change.
				<br></br>
				<br></br>
				Although the function is not changing each time this parent
				component is rendered the function being passed to our child
				component is recreated, thus the child component will re-render
				even though the child component's prop has not technically
				changed.
				<br></br>
				<br></br>
				To prevent this behavior we can use useCallback. Rather then
				pass an arrow function as the increment props value, we write an
				expression where useCallBack is the value. UseCallBack returns a
				function where we call setCount using an updater function, that
				way setCount is the only dependency for our useCallBack. Look at
				the code - its much simplier then this sounds.
			</p>
			<Tag>{count}</Tag>
			<Counter increment={increment} />
		</div>
	)
}
