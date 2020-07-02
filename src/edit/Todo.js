import React, {Component} from 'react';
import {DeviceEventEmitter, TextInput} from 'react-native';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const startEmit = () => {
  const message = '删除了todoItem';
  DeviceEventEmitter.emit('newItem', message);
};

export const Todo = ({id, completed, text, toggle}) => (
  <TouchableOpacity
    onPress={() => {
      toggle(id);
    }}>
    <Text style={styles.text}>
      {completed ? (
        <FontAwesome name={'check-square-o'} size={20} />
      ) : (
        <FontAwesome name={'square-o'} size={20} />
      )}{' '}
      {text}
    </Text>
  </TouchableOpacity>
);

export class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.text,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const {text} = nextProps;
    if (text !== prevState.text) {
      return {
        text,
      };
    }
    return null;
  }
  render() {
    const {id, completed, toggle, delete_id, keepChanges} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            toggle(id);
          }}>
          <Text style={styles.text_edit}>
            {completed ? (
              <FontAwesome name={'check-square-o'} size={20} />
            ) : (
              <FontAwesome name={'square-o'} size={20} />
            )}{' '}
            No.{id + 1} :
          </Text>
          <TextInput
            style={styles.textInputStyle}
            value={this.state.item}
            onChangeText={new_text => this.setState({item: new_text})}
            onBlur={() => keepChanges(id, this.state.item)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            delete_id(id);
            startEmit();
          }}>
          <FontAwesome name={'trash-o'} size={20} style={styles.trash} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    padding: 6,
  },
  text_edit: {
    fontSize: 17,
    marginVertical: 2,
    paddingBottom: 5,
    width: 310,
  },
  trash: {
    marginVertical: 4,
  },
  textInputStyle: {
    marginBottom: 16,
    height: 30,
    borderColor: '#E8E8E8',
    borderWidth: 2,
  },
});
