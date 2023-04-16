import { Layout } from "antd";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "@components/Header/Header";

import "antd/dist/reset.css";
import "@styles/global.scss";

const Hello = React.lazy(() => import("@pages/Hello"));

const App = () => {
	return (
		<Layout className="layout">
			<Header />
			<Layout.Content className="width-wrapper">
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<Navigate to="/hello" replace={true} />} />
						<Route path="/hello" element={<Hello />} />
						<Route path="/admin" element={<div>Admin</div>} />
						<Route path="*" element={<p>There's nothing here!</p>} />
					</Routes>
				</Suspense>
			</Layout.Content>
		</Layout>
	);
};

export default App;
