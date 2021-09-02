export let getUsersList = (state) => {
	return state.usersPage.users;
};

export let getPageSize = (state) => {
	return state.usersPage.pageSize;
};

export let getUsers = (state) => {
	return state.usersPage.users;
};

export let getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount;
};

export let getCurrentPage = (state) => {
	return state.usersPage.currentPage;
};

export let getIsFetching = (state) => {
	return state.usersPage.isFetching;
};

export let getFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
};


