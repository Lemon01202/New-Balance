import { usersAPI } from '../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const UPDATE_PAGE = 'UPDATE-PAGE';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS';

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId)
						return { ...u, followed: true }
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId)
						return { ...u, followed: false }
					return u;
				})
			}
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case UPDATE_PAGE:
			return {
				...state,
				currentPage: action.newPage
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count
			}
		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFollowing
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId),
			}
		default:
			return state;
	}
}

export const followSucces = (userId) => ({ type: UNFOLLOW, userId })
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const updatePage = (newPage) => ({ type: UPDATE_PAGE, newPage })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })
export const toggleFollowingProgress = (isFollowing, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFollowing, userId })


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleFetching(true));
	let data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(toggleFetching(false));
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
}

const FollowUnfollowFlow = async (idUser, dispatch, APIMethod, ActionCreator) => {
	dispatch(toggleFollowingProgress(true, idUser));
	let data = await APIMethod;
	if (data.resultCode === 0)
		dispatch(ActionCreator(idUser));
	dispatch(toggleFollowingProgress(false, idUser));
}

export const follow = (idUser) => async (dispatch) => {
	let APIMethod = usersAPI.postFollow(idUser);
	let ActionCreator = followSucces;
	FollowUnfollowFlow(idUser, dispatch, APIMethod, ActionCreator);

}

export const unfollow = (idUser) => async (dispatch) => {
	let APIMethod = usersAPI.deleteFollow(idUser);
	let ActionCreator = unfollowSucces;
	FollowUnfollowFlow(idUser, dispatch, APIMethod, ActionCreator);
}


export default usersReducer;