import { useRef } from "react"
import { useMeasure } from "../../hooks/useMeasure"
import { Alert } from "antd"

export const CustomHooks = () => {
	const alertRef = useRef()
	const rect = useMeasure(alertRef).width

	const centered = {
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
		width: "100%",
	}

	const styledElement = {
		background: "#e2f715",
		height: "200px",
	}

	return (
		<div>
			<h1>Building your own hooks</h1>
			<p>
				This is where the power of hooks really shines. Custom hooks
				allow you to build reusable utilties you can share throughout
				applications
			</p>
			<Alert
				message="Custom Hook"
				description="useMeasure will return the width of this element"
				type="info"
				showIcon
			/>
			<div style={{ ...styledElement, ...centered }} ref={alertRef}>
				Width: {JSON.stringify(rect)}
			</div>
			<pre style={{ ...centered }}>
				{JSON.stringify(useMeasure(alertRef))}
			</pre>
		</div>
	)
}
