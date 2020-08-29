import {connect} from 'react-redux';
import LoginPage from './loginPage';
import {signIn} from './action';

function mapStateToProps(state) {
  const {user} = state || null;
  return {
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userSignIn(userDict) {
      console.log(userDict);
      dispatch(signIn(userDict));
    },
  };
}

export default (LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage));
