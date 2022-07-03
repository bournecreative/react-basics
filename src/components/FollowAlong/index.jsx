import ReactDOM from "react-dom"
import { useEffect, useState } from "react"
import { Alert, Button } from "antd"

export const FollowAlong = (props) => {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	const trackCursor = (e) => {
		console.log(e.clientX, e.clientY)
		setPosition({ x: e.clientX, y: e.clientY })
	}

	useEffect(() => {
		props.setMsg(
			"Follow Along Component mounted. We can add event listeners"
		)
		window.addEventListener("mousemove", trackCursor)

		return () => {
			props.setMsg(
				"Follow Along Component un-mounted!! We can remove event listeners"
			)
			window.removeEventListener("mousemove", trackCursor)
		}
	}, [])

	return (
		<div>
			<Alert
				style={{ display: "inline-block" }}
				message="See the cursor follow along dot."
				type="success"
			/>
			<div
				className="follow-along"
				style={{
					position: "absolute",
					borderRadius: "50%",
					background: "red",
					width: "10px",
					height: "10px",
					top: position.y + 20 + "px",
					left: position.x + 20 + "px",
				}}
			></div>
		</div>
	)
}
