import { authAPI, headerAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	loginData: [],
	errorMessage: [],
	isError: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isError: false
			}
		case SET_ERROR_MESSAGE:
			return {
				...state,
				errorMessage: action.message,
				isError: true,
			}

		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })
export const errorMessage = (message) => ({ type: SET_ERROR_MESSAGE, message })

export const loginData = () => async (dispatch) => {
	let data = await headerAPI.getLoginData();

	if (data.resultCode === 0) {
		let { id, email, login } = data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}

}

export const postLogin = (email, password, rememberMe) => async (dispatch) => {
	let data = await authAPI.postLogin(email, password, rememberMe);
	if (data.resultCode === 0) {
		dispatch(loginData());
	} else {
		dispatch(errorMessage(data.messages));
		console.log(data.messages);
	}

}

export const deleteLogin = () => async (dispatch) => {
		let data = await authAPI.deleteLogin();
			if (data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false));
			}
		
	}



export default authReducer;