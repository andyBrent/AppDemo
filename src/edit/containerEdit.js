import {connect} from 'react-redux';
import EditPage from './editPage';
import {addTodo} from './action';

function mapStateToProps(state) {
  const {todoItem} = state || {};
  return {
    todoItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newTodo(text, tag) {
      dispatch(addTodo(text, tag));
    },
  };
}

export default (EditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPage));
