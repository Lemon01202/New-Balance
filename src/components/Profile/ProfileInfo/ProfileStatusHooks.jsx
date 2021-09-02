import React, { useEffect, useState } from 'react';
import s from './ProfileStatus.module.css'

const ProfileStatusHooks = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}
	const onKeyDownDeactivateEditMode = (event) => {
		if (event.keyCode === 13) {
			setEditMode(false);
			props.updateStatus(status);

		}
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
		<div className={s.profileStatus}>
			{!editMode
				? <div><span onClick={activateEditMode}>{props.status}</span></div>
				: <div><input onChange={onStatusChange} onClick={deactivateEditMode} onBlur={deactivateEditMode} onKeyDown={onKeyDownDeactivateEditMode} autoFocus={true} value={status} /></div>}
		</div>

	)
}

export default ProfileStatusHooks;