import { loginData } from "./auth-reducer";

const SET_INITIALAIZED = 'SET-INITIALAIZED';
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE';

let initialState = {
	initialaized: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALAIZED:
			return {
				...state,
				initialaized: true,
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

export const setInitialaized = () => ({ type: SET_INITIALAIZED });


export const initializeApp = () => {
	return (dispatch) => {
		let promise = dispatch(loginData());

		Promise.all([promise]).then(() => {
			dispatch(setInitialaized());
		})
	}
}


export default appReducer;