import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import LoginContainer from './components/Login/LoginContainer'
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import React from 'react';
import { initializeApp } from './Redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized)
      <Preloader />

    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="wrapper__content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,

  }
}

export default compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);
