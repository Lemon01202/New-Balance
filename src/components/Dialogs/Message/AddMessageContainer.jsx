import { connect } from 'react-redux';
import { updateNewDialogActionCreator, sendMessageCreator } from '../../../Redux/dialogs-reducer';
import AddMessage from './AddMessage';

let mapStateToProps = (state) =>{
	return{
		newPostText: state.dialogsPage.newPostText
	}
}
let mapDispatchToProps = (dispatch) =>{
	return{
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
		updateNewMessage: (text) =>{
			dispatch(updateNewDialogActionCreator(text));
		}
	}
}
let addMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default addMessageContainer;