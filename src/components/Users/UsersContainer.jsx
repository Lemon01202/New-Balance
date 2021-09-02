import React from 'react';
import {
	followSucces, unfollowSucces, updatePage,
	getUsers, follow, unfollow
} from "../../Redux/users-reducer"
import { connect } from "react-redux";
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getIsFetching, getUsersList } from '../../Redux/users-selectors';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChange = (page) => {
		this.props.updatePage(page);
		this.props.getUsers(page, this.props.pageSize);
	}
	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} users={this.props.users}
				currentPage={this.props.currentPage} onPageChange={this.onPageChange} follow={this.props.follow} unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress} followSucces={this.props.followSucces} unfollowSucces={this.props.unfollowSucces}
			/>}
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsersList(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	};
};

export default compose(connect(mapStateToProps, {
	followSucces, unfollowSucces, updatePage,
	getUsers, follow, unfollow,
}), withAuthRedirect)(UsersContainer);