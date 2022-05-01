//import useState hook to create menu collapse state
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { FaRegCopyright } from "react-icons/fa";
import { TiWeatherShower } from "react-icons/ti";


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
import foto from "./foto1.png";
import "react-pro-sidebar/dist/css/styles.css";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiDashboardFill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { RiTimerFill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";

import "./header.css";




const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: "#8ED1FC",
		borderRadius: "0px 0px 20px 0px",
		shadowColor: "#8ED1FC",
		shadowOpacity: 0,
		elevation: 0,
		borderBottomWidth: 0,
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
	const menuItem1 = {
		marginTop : 180,
		marginLeft: 8
	}
	const menuItem = {
		marginTop : 50,
		marginLeft: 8
	}
	const menuItem3 = {
		marginTop : 15,
		marginLeft: 8
	}
	const styleToolbar = {
		height : 70,
	}
	const imagenTio = {
		marginLeft: 5,
	}
	const estilo_upcoins = {
		marginRight: 5,
	}
	const upcoins = {
		fontFamily: 'Arial',
		fontWeight: 'bold',
		fontSize: 25,
	}
	return (
		<>
			<AppBar position="fixed" className={classes.appbar}>
				<Toolbar style={styleToolbar}>
					
					<Typography variant="h5" style={{ fontWeight: "bold" }} noWrap>
						UPCHub
					</Typography>
					<img src={logo} height="70" width="70" style={imgStyle} />
					<div className={classes.spacer} />
					
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						className={classes.rightIcons}
					>
					
					<a style={upcoins}>62,5 </a>
					<FaRegCopyright style={estilo_upcoins}></FaRegCopyright>
					
					<img src={foto} height="50" width="50" style={imagenTio}></img>
					</IconButton>
				</Toolbar>
			</AppBar>
			<div id="header">
				{/* collapsed props to change menu size using menucollapse state */}
				<ProSidebar collapsed={menuCollapse}>
					<SidebarContent onMouseEnter={menuIconClick}>
						<Menu className="margin" iconShape="square">
							<MenuItem icon={<RiDashboardFill  size={30}/>} style={menuItem1}>
								<Link to="/" />
								Dashboard
							</MenuItem>
							<MenuItem icon={<RiTimerFill size={30}/>} style={menuItem}>
								<Link to="time" />
								Time
							</MenuItem>
							<MenuItem icon={<RiMoneyDollarCircleFill size={35}/>} style={menuItem}>
								<Link to="money" />
								Money
							</MenuItem>
							<MenuItem icon={<MdExplore size={30}/>} style={menuItem}>Discover</MenuItem>
						</Menu>
					</SidebarContent>
					<SidebarFooter>
						<Menu iconShape="square">
							<MenuItem icon={<FiLogOut size={25} />} style={menuItem3}>Logout</MenuItem>
						</Menu>
					</SidebarFooter>
				</ProSidebar>
			</div>
		</>
	);
};

export default Header;