import {connect} from 'react-redux';
import ListPage from './listPage';
import {toggleTodo} from './action';

function mapStateToProps(state) {
  console.log(`222welcomeLoading mapStateToProps: ${JSON.stringify(state)}`);
  const {todoItem} = state || {};
  return {
    todoItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo(id) {
      console.log('ahhhhhh')
      dispatch(toggleTodo(id));
    },
  };
}

export default (ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPage));
