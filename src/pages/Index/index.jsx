import { Link } from "react-router-dom"
import { Tag, Divider } from "antd"

export const Index = () => {
	return (
		<div className="main">
			<h1>Understand React Better</h1>
			<Divider orientation="left">React Tips</Divider>
			<Tag>
				<Link to="react-ref">React useRef</Link>
			</Tag>
			<Tag>
				<Link to="react-state">React useState</Link>
			</Tag>
			<Tag>
				<Link to="react-use-effect">React useEffect</Link>
			</Tag>
			<Tag>
				<Link to="custom-hooks">React Custom Hooks</Link>
			</Tag>
		</div>
	)
}
