import { Layout } from "antd";
import { NavLink } from "react-router-dom";

import "./header.style.scss";

const navigations = [
	{ name: "Hello", href: "/hello", key: "hello" },
	{ name: "Admin", href: "/admin", key: "admin" },
];

const Header: React.FC = () => {
	return (
		<Layout.Header className="header">
			<div className="width-wrapper" style={{ display: "flex", alignItems: "center" }}>
				{navigations.map((item) => (
					<NavLink
						to={{ pathname: item.href }}
						key={item.key}
						className={({ isActive }) => (isActive ? "selected" : undefined)}
					>
						{item.name}
					</NavLink>
				))}
			</div>
		</Layout.Header>
	);
};

export default Header;
