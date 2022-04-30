import ReactGridLayout from "./ReactLayout";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Header from "./Header";

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

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const theme = createMuiTheme({
		palette: {
			type: darkMode ? "dark" : "light",
		},
	});

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
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
