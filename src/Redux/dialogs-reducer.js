const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let initialState =
 	{
	dialogs:[
			{ id: 1, name: 'Pavel', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
			{ id: 2, name: 'Jack', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
			{ id: 3, name: 'Andrew', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
			{ id: 4, name: 'Anna', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
			{ id: 5, name: 'Fill', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
			{ id: 6, name: 'Tom', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
			{ id: 7, name: 'NoName', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' }
		],
		messages:[
			{ id: 1, message: '1' },
			{ id: 2, message: '2' },
			{ id: 3, message: '3' },
			{ id: 4, message: '4' },
			{ id: 5, message: '5' },
			{ id: 6, message: '6' },
			{ id: 7, message: '7' }
		],
		newPostText: 'Hello',
	}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = state.newPostText;
			let newMessage = {id: 10,message: body};
			return {
				...state,
				messages: [...state.messages, newMessage],
				newPostText: '',
			}
		case UPDATE_NEW_DIALOG_TEXT:
			return {
				...state,
				newPostText: action.newPost,
			}
			default:
			return state;	
	}
}

export const updateNewDialogActionCreator = (text) => {
	return{
		type: UPDATE_NEW_DIALOG_TEXT,
		newPost: text
	}
}

export const sendMessageCreator = () => {
	return{
		type: SEND_MESSAGE
	}
}

export default dialogsReducer;