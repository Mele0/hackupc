import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
	FaTachometerAlt,
	FaGem,
	FaList,
	FaGithub,
	FaRegLaughWink,
	FaHeart,
} from "react-icons/fa";

const Sidebar = () => {
	return (
		<ProSidebar>
			<p>h</p>
			<Menu iconShape="square">
				<MenuItem>Dashboard</MenuItem>
				<SubMenu
					suffix={<span className="badge yellow">3</span>}
					title="components"
					icon={<FaRegLaughWink />}
				>
					<MenuItem>1</MenuItem>
					<MenuItem>2</MenuItem>
					<MenuItem>3</MenuItem>
				</SubMenu>
				<SubMenu title="Components">
					<MenuItem>Component 1</MenuItem>
					<MenuItem>Component 2</MenuItem>
				</SubMenu>
			</Menu>
		</ProSidebar>
	);
};

export default Sidebar;
