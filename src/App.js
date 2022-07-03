import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HomeOutlined } from "@ant-design/icons"
import { useEffect, useState } from 'react'
import { Index } from './pages/Index/index'
import { ReactRef } from './pages/React-ref/index'
import { ReactState } from './pages/React-state/index'
import { ReactUseEffect } from './pages/React-useEffect'
import { CustomHooks } from './hooks/Custom-hooks/index'
import 'antd/dist/antd.min.css'

export const App = () => {
	const [home, setHome] = useState("/")

	useEffect(() => {
		const isDevServer = window.location.hostname
		console.log(isDevServer)
		if (isDevServer !== 'localhost') {
			setHome("react-basics/")
			return
		}
	}, [])

	return (
		<div style={{ padding: '20px' }}>
			<BrowserRouter>
				<div>
					<Link to={home}>
						<HomeOutlined />
						&nbsp;Home
					</Link>
				</div>
				<Routes>
					<Route path={home} element={<Index />}></Route>
					<Route path={`${home}react-ref`} element={<ReactRef />}></Route>
					<Route path={`${home}react-state`} element={<ReactState />}></Route>
					<Route path={`${home}react-use-effect`} element={<ReactUseEffect />}></Route>
					<Route path={`${home}custom-hooks`} element={<CustomHooks />}></Route>
				</Routes>
			</BrowserRouter >
		</div>
	)
}
