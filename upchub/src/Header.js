import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: theme.palette.background.default,
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

export default function Headerr({
	handleDrawerToggle,
	toggleDarkMode,
	darkMode,
}) {
	const classes = useStyles();
	return (
		<AppBar position="fixed" className={classes.appbar}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerToggle}
					edge="start"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h5" style={{ fontWeight: "bold" }} noWrap>
					UPCHub
				</Typography>
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
	);
}
