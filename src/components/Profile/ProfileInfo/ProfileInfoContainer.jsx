import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { updateNewPostText, addPost, updateStatus } from '../../../Redux/profile-reducer';
import ProfileInfo from './ProfileInfo';

class ProfileInfoContainer extends React.Component {
	render() {
		return <ProfileInfo {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return {
		state: state,
		newPostText: state.profilePage.newPostText,
		userName: state.profilePage.user[0].name,
		userSurname: state.profilePage.user[0].surname,
	}
}

export default compose(connect(mapStateToProps, { addPost, updateNewPostText, updateStatus }))(ProfileInfoContainer);