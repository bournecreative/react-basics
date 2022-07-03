import { useEffect } from "react"
import { Button } from "antd"

export const TextWriter = (props) => {
	useEffect(() => {
		props.setMsg("TextWriter Component mounted. We can add event listeners")

		return () =>
			props.setMsg(
				"TextWriter Component un-mounted!! We can remove event listeners"
			)
	}, [])

	return (
		<>
			<Button type="primary">Write Msg</Button>
		</>
	)
}
