import {connect} from 'react-redux';
import UserProfile from './userProfile';

function mapStateToProps(state) {
  const {user} = state || null;
  return {
    user,
  };
}

export default (UserProfileContainer = connect(
  mapStateToProps,
  null,
)(UserProfile));
