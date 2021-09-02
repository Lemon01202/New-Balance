import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { postLogin } from '../../Redux/auth-reducer';
import s from './Login.module.css'

class LoginContainer extends React.Component {
	render() {
		return <Login {...this.props} />
	}
};


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		errorMessage: state.auth.errorMessage,
		isError: state.auth.isError,
	}
}

export default connect(mapStateToProps, { postLogin })(LoginContainer);