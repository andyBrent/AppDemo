import React, {Component} from 'react';
import {DeviceEventEmitter, TextInput} from 'react-native';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      tag: this.props.tag,
      message: '',
    };
  }

  render() {
    console.log(`Todo States${JSON.stringify(this.state)}`);
    const {
      id,
      completed,
      toggle,
      delete_id,
      keepTodoItemChanges,
      keepTodoCategroyChanges,
    } = this.props;
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
            onSubmitEditing={() => keepTodoItemChanges(id, this.state.item)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            delete_id(id);
            DeviceEventEmitter.emit('deleteItem', '删除了todoItem');
          }}>
          <FontAwesome name={'trash-o'} size={21} style={styles.trash} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.state.tag === 'work'
              ? this.setState({tag: 'life'}, () =>
                  keepTodoCategroyChanges(id, this.state.tag),
                )
              : this.state.tag === 'life'
              ? this.setState({tag: 'other'}, () =>
                  keepTodoCategroyChanges(id, this.state.tag),
                )
              : this.setState({tag: 'work'}, () =>
                  keepTodoCategroyChanges(id, this.state.tag),
                );
          }}>
          <Text style={styles.categroy_edit}>
            {this.state.tag === 'life' ? (
              <FontAwesome name={'coffee'} size={21} color={'#e91e63'} />
            ) : this.state.tag === 'work' ? (
              <FontAwesome name={'briefcase'} size={21} color={'#e91e63'} />
            ) : (
              <FontAwesome name={'tasks'} size={21} color={'#e91e63'} />
            )}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text_edit: {
    fontSize: 17,
    marginVertical: 2,
    paddingBottom: 5,
    width: 280,
  },
  categroy_edit: {
    marginVertical: 5,
    marginLeft: 5,
  },
  trash: {
    marginVertical: 4,
    marginHorizontal: 5,
  },
  textInputStyle: {
    marginBottom: 16,
    height: 30,
    borderColor: '#E8E8E8',
    borderWidth: 2,
  },
});
