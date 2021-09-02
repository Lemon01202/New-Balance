import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newPostText: state.dialogsPage.newPostText,
	}
}



export default compose(withAuthRedirect,connect(mapStateToProps))(Dialogs);
