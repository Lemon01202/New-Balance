import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader'
import userAvatar from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus';
import ProfileStatusHooks from './ProfileStatusHooks';
const ProfileInfo = (props) => {
	let newPostRef = React.createRef();
	let onAddPost = () => {
		if (newPostRef.current.value)
			props.addPost();
	};
	let onPostChange = () => {
		let text = newPostRef.current.value;
		props.updateNewPostText(text);
	}
	if (!props.userProfile) {
		return <Preloader />
	}
	return (
		<div className={s.profileInfo}>
			<div className={s.profileHeader}>
				<div className={s.profileHeaderImg}><img className={s.profile__img1} src="https://www.groovypost.com/wp-content/uploads/2019/07/sunset-beach-phone-photos-featured.jpg" /></div>
				<div className={s.profileHeaderAvatar}><img className={s.profileAvatar} src={props.userProfile.photos.large ? props.userProfile.photos.large : userAvatar} alt="" /></div>
			</div>
			<ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
			<div className={s.usersInfo}>
				<div className={s.profileName}>Profile of {props.userProfile.fullName}</div>
				<div className={s.about}>About me: {props.userProfile.aboutMe}</div>
				<div className={s.inst}>Inst: {props.userProfile.contacts.instagram ? props.userProfile.contacts.instagram : 'No Data'}</div>
			</div>
			<div className={s.profileContent}>
				<div className={s.profilePosts}>
					<div><textarea ref={newPostRef} onChange={onPostChange} value={props.newPostText} placeholder='Input text...' cols="40" rows="5" /></div>
					<br />
					<div><button className={s.postMessageBtn} onClick={onAddPost}>Add Post</button></div>
				</div>
			</div>
		</div>


	);
};

export default ProfileInfo;