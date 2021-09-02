import React from 'react';
import s from './AddMessage.module.css';
const AddMessage = (props) => {
	let newPostRef = React.createRef();
	let addMessage = () => {
		if (newPostRef.current.value)
			props.sendMessage();
	};
	let onMessageChange = (e) => {
		let text = e.target.value;
		props.updateNewMessage(text);
	}
	return (
		<div className={s.addPost}>
			<textarea ref={newPostRef} className={s.addPostItem} onChange={onMessageChange} placeholder='Input text...' cols="35" value={props.newPostText} rows="1" />
			<div className={s.addPostItem}><button className={s.postMessageBtn} onClick={addMessage}>SEND</button></div>
		</div>

	);
};

export default AddMessage;