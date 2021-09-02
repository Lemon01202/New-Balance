import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
	posts: [
		{ name: 'Goat', post: "Hello", likesCount: '15', dislikesCount: '1', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
		{ name: 'Dog', post: "World", likesCount: '25', dislikesCount: '3', avatar: 'data:image/jpeg;base64,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' },
		{ name: 'God', post: "I'm GOD", likesCount: '666', dislikesCount: '999', avatar: 'https://pinkocean.pl/wp-content/uploads/2020/10/Cima_da_Conegliano2C_God_the_Father.jpg' },
	],
	user: [
		{ name: 'Daniel', surname: 'Radcliffe' }
	],
	userProfile: null,
	userStatus: null,
	newPostText: 'Hello there',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 10,
				name: 'hz',
				post: state.newPostText,
				likesCount: 0,
				dislikesCount: 0,
				avatar: 'https://pinkocean.pl/wp-content/uploads/2020/10/Cima_da_Conegliano2C_God_the_Father.jpg'
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',

			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newPost
			}
		case SET_USER_PROFILE:
			return {
				...state,
				userProfile: action.profile,
			}
		case SET_USER_STATUS:
			return {
				...state,
				userStatus: action.status,
			}
		default:
			return state;
	}
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPost: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserProfile = (userId) => async (dispatch) => {
	let data = await profileAPI.getProfileData(userId);
	dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
	let data = await profileAPI.getStatus(userId);
	dispatch(setUserStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
	let data = await profileAPI.updateStatus(status);
	if (data.resultCode === 0) {
		dispatch(setUserStatus(status))
	}
}

export default profileReducer;