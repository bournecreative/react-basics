import { memo, useState } from "react"
import { useCountRenders } from "../../hooks/useCountRenders"
import { Button } from "antd"
export const Counter = memo(({ increment }) => {
	useCountRenders()
	const [incrementBy, setIncrementBy] = useState(1)
	const paraStyles = {
		margin: "0",
	}

	const buttonStyles = {
		margin: "12px 10px 12px 0",
	}

	return (
		<div>
			<div>
				<p style={{ ...paraStyles }}>Increment by:</p>
				<Button
					style={{ ...buttonStyles }}
					type="primary"
					onClick={() => setIncrementBy(1)}
				>
					1
				</Button>
				<Button
					style={{ ...buttonStyles }}
					type="primary"
					onClick={() => setIncrementBy(7)}
				>
					7
				</Button>
				<Button
					style={{ ...buttonStyles }}
					type="primary"
					onClick={() => setIncrementBy(5)}
				>
					5
				</Button>
			</div>
			<button
				style={{ ...buttonStyles }}
				onClick={() => increment(incrementBy)}
			>
				Add stuff
			</button>
		</div>
	)
})
