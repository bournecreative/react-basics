import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HomeOutlined } from "@ant-design/icons"
import { Index } from './pages/Index/index'
import { ReactRef } from './pages/React-ref/index'
import { ReactState } from './pages/React-state/index'
import 'antd/dist/antd.min.css'

export const App = () => {
	return (
		<div style={{ padding: '20px' }}>
			<BrowserRouter>
				<div>
					<Link to={"/"}>
						<HomeOutlined />
						&nbsp;Home
					</Link>
				</div>
				<Routes>
					<Route path="/" element={<Index />}></Route>
					<Route path="react-ref" element={<ReactRef />}></Route>
					<Route path="react-state" element={<ReactState />}></Route>
				</Routes>
			</BrowserRouter >
		</div>
	)
}
