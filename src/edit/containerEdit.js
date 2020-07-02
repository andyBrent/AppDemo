import {connect} from 'react-redux';
import EditPage from './editPage';
import {addTodo} from './action';

function mapStateToProps(state) {
  console.log(`welcomeLoading mapStateToProps: ${JSON.stringify(state)}`);
  const {todoItem} = state || {};
  return {
    todoItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newTodo(text) {
      dispatch(addTodo(text));
    },
  };
}

export default (EditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPage));
