import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 6,
  },
});
