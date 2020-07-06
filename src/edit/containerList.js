import {connect} from 'react-redux';
import ListPage from './listPage';
import {toggleTodo, deleteTodo, updateTodo} from './action';
import {updateDay, deleteDay} from '../day/action';

function mapStateToProps(state) {
  const {todoItem, memorialDay} = state || {};
  return {
    todoItem,
    memorialDay,
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
    updateDay(changeList) {
      dispatch(updateDay(changeList));
    },
    deleteDay(id) {
      dispatch(deleteDay(id));
    },
  };
}

export default (ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPage));
