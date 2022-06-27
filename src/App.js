import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HomeOutlined } from "@ant-design/icons"
import { Index } from './pages/Index/index'
import { ReactRef } from './pages/React-ref/index'
import { ReactState } from './pages/React-state/index'
import { ReactUseEffect } from './pages/React-useEffect'
import 'antd/dist/antd.min.css'

export const App = () => {
	const home = "react-basics"
	return (
		<div style={{ padding: '20px' }}>
			<BrowserRouter>
				<div>
					<Link to={"/react-basics"}>
						<HomeOutlined />
						&nbsp;Home
					</Link>
				</div>
				<Routes>
					<Route exact path={home} element={<Index />}></Route>
					<Route path={`${home}/react-ref`} element={<ReactRef />}></Route>
					<Route path={`${home}/react-state`} element={<ReactState />}></Route>
					<Route path={`${home}/react-use-effect`} element={<ReactUseEffect />}></Route>
				</Routes>
			</BrowserRouter >
		</div>
	)
}
