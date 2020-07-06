import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Day = ({id, thing, time, tag}) => (
  <TouchableOpacity
  // onPress={() => {
  //   toggle(id);
  // }
  >
    <Text style={styles.text}>
      {tag === 'life' ? (
        <FontAwesome name={'coffee'} size={20} color={'#e91e63'} />
      ) : tag === 'work' ? (
        <FontAwesome name={'briefcase'} size={20} color={'#e91e63'} />
      ) : (
        <FontAwesome name={'tasks'} size={20} color={'#e91e63'} />
        // eslint-disable-next-line prettier/prettier
      )}{'   '}
      {time}:{thing}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 6,
  },
});
