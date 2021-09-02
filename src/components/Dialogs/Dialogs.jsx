import s from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import AddMessageContainer from "./Message/AddMessageContainer";
import { Redirect } from "react-router-dom";



const Dialogs = (props) => {
	let dialogsElements = props.dialogs
		.map(d => (<Dialog name={d.name} id={d.id} key={d.id} avatar={d.avatar} />));

	let messagesElements = props.messages
		.map(m => (<Message message={m.message} key={m.id} />));
	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_items}>
				{dialogsElements}
			</div>
			<div className={s.dialogs_messages}>
				{messagesElements}
				<AddMessageContainer newPostText={props.newPostText} />
			</div>
		</div>
	);
};

export default Dialogs;
