import ReactGridLayout from "./ReactLayout";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
}));

function App() {
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const [darkMode, setDarkMode] = useState(true);
	//const [data, setData] = useState(null);

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const theme = createMuiTheme({
		palette: {
			type: darkMode ? "dark" : "light",
			//type: "light",
		},
	});

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};


	useEffect(() =>{
		// this.callBackendAPI()
		//   .then(res => this.setState({ data: res.express }))
		//   .catch(err => console.log(err));
		console.log("h");

		axios.get("/money?user=49271168Q").then((response) => {
				console.log(response);
			}).catch(function(err){
				console.log(err);
			});
	});

	// const callBackendAPI = async () => {
	// 	const response = await fetch('/money?user=49271168Q');
	// 	const body = await response.json();
	// 	if (response.status !== 200) {
	// 	  throw Error(body.message) 
	// 	}
	// 	console.log(body)
	// 	return body;
	// };

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<CssBaseline />
				<Header
					handleDrawerToggle={handleDrawerToggle}
					toggleDarkMode={toggleDarkMode}
					darkMode={darkMode}
				/>
				<Sidebar handleDrawerClose={handleDrawerClose} open={open} />
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					<ReactGridLayout />
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;
