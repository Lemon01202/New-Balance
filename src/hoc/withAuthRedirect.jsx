import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToPropsRedirect = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}
export const withAuthRedirect = (Component) => {
	class authRedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to={'/login'} />
			return <Component {...this.props} />
		}
	}
	let connectAuthRedirectComponent = connect(mapStateToPropsRedirect)(authRedirectComponent);
	return connectAuthRedirectComponent;
}
