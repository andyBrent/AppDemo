import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Todo = ({id, completed, text, toggle}) => (
  <TouchableOpacity
    onPress={() => {
      toggle(id);
    }}>
    <Text
      style={
        ({textDecorationLine: completed ? 'line-through' : 'none'}, styles.text)
      }>
      {completed ? (
        <FontAwesome name={'check-square-o'} size={20} />
      ) : (
        <FontAwesome name={'square-o'} size={20} />
      )}{' '}
      {text}
    </Text>
  </TouchableOpacity>
);

export default Todo;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 6,
  },
});
