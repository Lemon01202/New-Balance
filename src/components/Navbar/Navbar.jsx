import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.nav__item}><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></div>
			<div className={classes.nav__item}><NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink></div>
			<div className={classes.nav__item}><NavLink to='/users' activeClassName={classes.active}>Users</NavLink></div>
			<div className={classes.nav__item}><a>News</a></div>
			<div className={classes.nav__item}><a>Music</a></div>
			<br />
			<div className={classes.nav__item}><a>Settings</a></div>
		</nav>
	)
}

export default Navbar;