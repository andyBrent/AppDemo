import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Todo = ({id, completed, text, tag, toggle}) => (
  <TouchableOpacity
    onPress={() => {
      toggle(id);
    }}>
    <Text style={styles.text}>
      {tag === 'life' ? (
        <FontAwesome name={'coffee'} size={20} color={'#e91e63'} />
      ) : tag === 'work' ? (
        <FontAwesome name={'briefcase'} size={20} color={'#e91e63'} />
      ) : (
        <FontAwesome name={'tasks'} size={20} color={'#e91e63'} />
        // eslint-disable-next-line prettier/prettier
      )}{'   '}
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
