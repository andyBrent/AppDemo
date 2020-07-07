import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const TimeLap = ({now, then}) => {
  if (moment(now).isBefore(then)) {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.timeLap}>
          {now} -- {then}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.timeLap}>
          {then} -- {now}
        </Text>
      </View>
    );
  }
};
export class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
  }

  render() {
    const {id, thing, time, tag} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({showing: !this.state.showing});
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
          {thing}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.timeText}>
            {moment(time, 'YYYY-MM-DD').fromNow()}{' '}
          </Text>
        </View>
        {this.state.showing && (
          <TimeLap now={moment(new Date()).format('YYYY-MM-DD')} then={time} />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 6,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  timeText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'right',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  timeLap: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'right',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
