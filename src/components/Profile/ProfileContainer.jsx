import Profile from './Profile';
import { connect } from "react-redux";
import React from "react";
import { getUserProfile, getUserStatus, updateStatus } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { authAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId && this.props.isAuth) {
      userId = this.props.myId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {

    return (
      <Profile {...this.props} userStatus={this.props.userStatus} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    status: state.profilePage.userStatus,
    myId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}


let urlData = compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }), withRouter, withAuthRedirect)(ProfileContainer);

export default urlData;