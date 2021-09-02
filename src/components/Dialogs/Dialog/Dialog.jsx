import s from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div className={s.dialog}> <img className={s.dialogs_img} src={props.avatar} /> <NavLink to={path} >{props.name}</NavLink></div>
	);
};

export default Dialog;