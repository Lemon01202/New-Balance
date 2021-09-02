import h from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
	return (
		<header className={h.header}>
			<span className={h.logo}><NavLink to={'/'} className={h.logoTitle}>New balance</NavLink></span>
			{props.isAuth ? <div className={h.logined}>{props.login} <button onClick={props.deleteLogin}>Log Out</button></div>
				: <div className={h.loginBlock}><NavLink to={'/login'} path={'/login'}>Sign in</NavLink></div>}

		</header>
	)
}

export default Header;