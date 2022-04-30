import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventIcon from "@material-ui/icons/Event";
import ExploreIcon from "@material-ui/icons/Explore";
import PaidIcon from "@mui/icons-material/Paid";
import TimerIcon from "@mui/icons-material/Timer";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Time from "./screens/Time";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
}));

export default function ({ open, handleDrawerClose }) {
	const classes = useStyles();

	return (
		<Router>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<div className="">
					<List>
						<ListItem button>
							<ListItemIcon>
								<DashboardIcon />
							</ListItemIcon>
							<Link to="/">
								<ListItemText primary="Dashboard" font-family="Sunny" />
							</Link>
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<TimerIcon />
							</ListItemIcon>
							<Link to="/time">
								<ListItemText primary="Time" font-family="Sunny" />
							</Link>
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<EventIcon />
							</ListItemIcon>
							<ListItemText primary="Events" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<PaidIcon />
							</ListItemIcon>
							<ListItemText primary="Money" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<ExploreIcon />
							</ListItemIcon>
							<ListItemText primary="Explore" />
						</ListItem>
					</List>
					<Divider />

					<List>
						<ListItem button>
							<ListItemIcon>
								<CancelRoundedIcon style={{ transform: "rotate(45deg)" }} />
							</ListItemIcon>
							<ListItemText primary="a" />
						</ListItem>
					</List>
				</div>
			</Drawer>
			<Routes>
				<Route exact path="/time" element={<Time />}></Route>
			</Routes>
		</Router>
	);
}
