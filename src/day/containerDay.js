import {connect} from 'react-redux';
import dayPage from './dayPage';
import {addDay} from './action';

function mapStateToProps(state) {
  console.log(`welcomeLoading mapStateToProps: ${JSON.stringify(state)}`);
  const {memorialDay} = state || {};
  return {
    memorialDay,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newDay(thing, time, tag) {
      dispatch(addDay(thing, time, tag));
    },
  };
}

export default (DayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(dayPage));
