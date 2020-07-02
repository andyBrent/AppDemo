import {connect} from 'react-redux';
import ListPage from './listPage';
import {toggleTodo, deleteTodo, updateTodo} from './action';

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
      dispatch(toggleTodo(id));
    },
    deleteTodo(id) {
      dispatch(deleteTodo(id));
    },
    updateTodo(changeList) {
      dispatch(updateTodo(changeList));
    },
  };
}

export default (ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPage));
