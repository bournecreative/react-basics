import { useState, useRef, useEffect } from "react"
import { Input, Tag } from "antd"
export const ReactRef = () => {
	const inputEle = useRef()
	const [count, setCounter] = useState(0)

	const id = useRef(null)

	useEffect(() => {
		inputEle.current.focus()
		id.current = setInterval(() => {
			setCounter((c) => c + 1)
		}, 1000)
		return () => clearInterval(id.current)
	}, [])

	useEffect(() => {
		console.log(count)
		if (count >= 5) clearInterval(id.current)
	}, [count])
	return (
		<div style={{ padding: "0 12px" }}>
			<div>
				<h1>What does useRef actually do?</h1>
				<p>
					When a component renders any variables that are declared in
					the body they are re-declared upon re-render. How then might
					we maintain a reference to a variable throughout multiple
					renders? We could use useState but doing so would cause
					rerenders. How might we reference a variable to a setInteral
					to clear it after a set amount of time? This is where useRef
					comes into play. It's state persists across renders and does
					NOT trigger a re-render. UseRef can be used to reference the
					setInterval so we can clear it at a later time.
				</p>
				<p>
					In this example a useRef is used to maintain the variable
					that references the setInterval. After the page renders 5
					times, we clear the interval.
				</p>
			</div>
			<div>
				<Tag color="#2db7f5">{count}</Tag>
				<span>Counter will stop at 5</span>
			</div>
			<div style={{ padding: "10px 0" }}>
				<p>useRef focuses input on page load. </p>
				<Input style={{ width: "200px" }} type="text" ref={inputEle} />
			</div>
		</div>
	)
}
