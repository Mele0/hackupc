//import useState hook to create menu collapse state
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
//import react pro sidebar components
import {
	ProSidebar,
	Menu,
	MenuItem,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from "react-pro-sidebar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventIcon from "@material-ui/icons/Event";
import ExploreIcon from "@material-ui/icons/Explore";
import PaidIcon from "@mui/icons-material/Paid";
import TimerIcon from "@mui/icons-material/Timer";

//import icons from react icons
import { FiHome, FiLogOut } from "react-icons/fi";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./upc.png";
import "react-pro-sidebar/dist/css/styles.css";
import "./header.css";

const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: "white",
		color: theme.palette.text.primary,
		[theme.breakpoints.up("sm")]: {
			zIndex: theme.zIndex.drawer + 1,
		},
	},
	rightIcons: {
		marginLeft: theme.spacing(0.5),
	},
	spacer: {
		flexGrow: 1,
	},
}));
const imgStyle = {
	align: "center",
	marginLeft: 10,
};

//import sidebar css from react-pro-sidebar module and our custom css

const Header = () => {
	const classes = useStyles();

	//create initial menuCollapse state using useState hook
	const [menuCollapse, setMenuCollapse] = useState(false);

	//create a custom function that will change menucollapse state from false to true and true to false
	const menuIconClick = () => {
		//condition checking to change state from true to false and vice versa
		menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
	};

	return (
		<>
			<AppBar position="fixed" className={classes.appbar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={menuIconClick}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h5" style={{ fontWeight: "bold" }} noWrap>
						UPCHub
					</Typography>
					<img src={logo} height="50" width="50" style={imgStyle} />
					<div className={classes.spacer} />
					<Typography variant="h6" noWrap>
						Ricard Guixaró
					</Typography>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						className={classes.rightIcons}
					>
						<AccountCircleIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<div id="header">
				{/* collapsed props to change menu size using menucollapse state */}
				<ProSidebar collapsed={menuCollapse}>
					<SidebarContent>
						<Menu className="margin" iconShape="square">
							<MenuItem icon={<DashboardIcon />}>
								<Link to="/" />
								Dashboard
							</MenuItem>
							<MenuItem icon={<TimerIcon />}>
								<Link to="time" />
								Time
							</MenuItem>
							<MenuItem icon={<PaidIcon />}>
								<Link to="money" />
								Money
							</MenuItem>
							<MenuItem icon={<ExploreIcon />}>Discover</MenuItem>
						</Menu>
					</SidebarContent>
					<SidebarFooter>
						<Menu iconShape="square">
							<MenuItem icon={<FiLogOut size={25} />}>Logout</MenuItem>
						</Menu>
					</SidebarFooter>
				</ProSidebar>
			</div>
		</>
	);
};

export default Header;
