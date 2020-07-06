import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {DatePicker} from 'react-native-common-date-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class DayEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thing: this.props.thing,
      time: this.props.time,
      tag: this.props.tag,
      message: '',
      editTime: false,
    };
  }

  render() {
    console.log(`Todo States${JSON.stringify(this.state)}`);
    const {
      id,
      delete_id,
      keepDayCategroyChanges,
      keepDayThingOrTimeChanges,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.editLine}>
          <Text style={styles.text_edit}>No.{id + 1} :</Text>
          <TouchableOpacity
            onPress={() => {
              delete_id(id);
              DeviceEventEmitter.emit('deleteDay', '删除了memorial day');
            }}>
            <FontAwesome name={'trash-o'} size={21} style={styles.trash} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.state.tag === 'work'
                ? this.setState({tag: 'life'}, () =>
                    keepDayCategroyChanges(id, this.state.tag),
                  )
                : this.state.tag === 'life'
                ? this.setState({tag: 'other'}, () =>
                    keepDayCategroyChanges(id, this.state.tag),
                  )
                : this.setState({tag: 'work'}, () =>
                    keepDayCategroyChanges(id, this.state.tag),
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
        <View style={styles.editLine}>
          <Text style={styles.text_suggest}>Time</Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({editTime: true});
            }}>
            <Text style={styles.text_suggest}>{this.state.time}</Text>
          </TouchableOpacity>
        </View>
        {this.state.editTime && (
          <DatePicker
            confirm={date => {
              this.setState({time: date, editTime: false}, () =>
                keepDayThingOrTimeChanges(
                  id,
                  this.state.thing,
                  this.state.time,
                ),
              );
            }}
            cancel={() => this.setState({editTime: false})}
            maxDate="2099-12-31"
            defaultDate={this.state.time}
          />
        )}
        <View style={styles.editLine}>
          <Text style={styles.text_suggest}>Thing</Text>
          <TextInput
            style={styles.textInputStyle}
            value={this.state.thing}
            onChangeText={new_text => this.setState({thing: new_text})}
            onSubmitEditing={() =>
              keepDayThingOrTimeChanges(id, this.state.thing, this.state.time)
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // padding: -,
  },
  text_edit: {
    fontSize: 17,
    marginVertical: 2,
    paddingBottom: 5,
  },
  text_suggest: {
    fontSize: 19,
    marginVertical: 2,
    paddingHorizontal: 3,
    paddingBottom: 5,
    fontWeight: '300',
  },
  textInputStyle: {
    marginBottom: 16,
    marginHorizontal: 10,
    height: 30,
    borderColor: '#E8E8E8',
    borderWidth: 2,
    width: 230,
  },
  editLine: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 4,
    justifyContent: 'space-between',
  },
  categroy_edit: {
    marginVertical: 5,
    marginLeft: 5,
  },
  trash: {
    marginVertical: 4,
    marginHorizontal: 5,
  },
});
