import {connect} from 'react-redux';
import LoginPage from './loginPage';
import {signIn, signOut} from './action';

function mapStateToProps(state) {
  const {user} = state || null;
  return {
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userSignIn(userDict, username) {
      console.log(userDict, username);
      dispatch(signIn(userDict, username));
    },
    userSignOut() {
      dispatch(signOut());
    },
  };
}

export default (LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage));
