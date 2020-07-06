import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Todo} from './Todo';
import {TodoEdit} from './TodoEdit';
import {Day} from '../day/Day';
import {DayEdit} from '../day/DayEdit';

export default class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      editingTodo: false,
      editingDay: false,
      changesTodo: [],
      changesDay: [],
    };
    this.keepTodoItemChanges = this.keepTodoItemChanges.bind(this);
    this.keepTodoCategroyChanges = this.keepTodoCategroyChanges.bind(this);
    this.keepDayCategroyChanges = this.keepDayCategroyChanges.bind(this);
    this.keepDayThingOrTimeChanges = this.keepDayThingOrTimeChanges.bind(this);
  }
  componentDidMount() {
    this.listener = DeviceEventEmitter.addListener('newItem', message => {
      this.setState({message, editingTodo: false});
    });
    this.listener = DeviceEventEmitter.addListener('deleteItem', message => {
      this.setState({message});
    });
    this.listener = DeviceEventEmitter.addListener('newDay', message => {
      this.setState({message, editingDay: false});
    });
    this.listener = DeviceEventEmitter.addListener('deleteDay', message => {
      this.setState({message});
    });
  }
  componentWillUnmount() {
    if (this.listener) {
      this.listener.remove();
      this.listener.remove();
      this.listener.remove();
    }
  }
  keepTodoItemChanges(id, newItem) {
    let dic = {};
    dic.id = id;
    dic.newItem = newItem;
    this.setState({changesTodo: [...this.state.changesTodo, dic]});
  }
  keepTodoCategroyChanges(id, newCategroy) {
    let dic = {};
    dic.id = id;
    dic.newCategroy = newCategroy;
    this.setState({changesTodo: [...this.state.changesTodo, dic]});
  }

  keepDayThingOrTimeChanges(id, newThing, newTime) {
    let dic = {};
    dic.id = id;
    dic.newThing = newThing;
    dic.newTime = newTime;
    this.setState({changesDay: [...this.state.changesDay, dic]});
  }
  keepDayCategroyChanges(id, newCategroy) {
    let dic = {};
    dic.id = id;
    dic.newCategroy = newCategroy;
    this.setState({changesDay: [...this.state.changesDay, dic]});
  }

  render() {
    console.log(`listPage Props${JSON.stringify(this.props)}`);
    console.log(`listPage States${JSON.stringify(this.state)}`);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <SafeAreaView>
            <ImageBackground
              accessibilityRole={'image'}
              source={require('../static/images/colorful_bg.jpg')}
              style={styles.iamgeBackground}
              imageStyle={styles.logo}>
              <Text style={styles.text}>Your Todo List</Text>
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <View style={styles.newItem}>
                    {this.props.todoItem.length === 0 && (
                      <Text style={styles.sectionDescription}>
                        No todos yet...
                      </Text>
                    )}
                    {this.props.todoItem.length !== 0 &&
                      !this.state.editingTodo &&
                      this.props.todoItem.map(todos => (
                        <Todo
                          key={todos.id}
                          id={todos.id}
                          completed={todos.completed}
                          text={todos.item}
                          tag={todos.tag}
                          toggle={this.props.toggleTodo}
                        />
                      ))}
                    {this.props.todoItem.length !== 0 &&
                      this.state.editingTodo &&
                      this.props.todoItem.map(todos => (
                        <TodoEdit
                          key={todos.id}
                          id={todos.id}
                          completed={todos.completed}
                          item={todos.item}
                          tag={todos.tag}
                          toggle={this.props.toggleTodo}
                          delete_id={this.props.deleteTodo}
                          keepTodoItemChanges={this.keepTodoItemChanges}
                          keepTodoCategroyChanges={this.keepTodoCategroyChanges}
                        />
                      ))}
                  </View>
                  {this.props.todoItem.length !== 0 && (
                    <View style={styles.submitContainer}>
                      <View style={styles.submitItem}>
                        <ImageBackground
                          accessibilityRole={'image'}
                          source={require('../static/images/001.jpg')}
                          style={styles.imageBackgroundButton}>
                          {!this.state.editingTodo && (
                            <TouchableOpacity
                              accessibilityRole={'button'}
                              onPress={() => {
                                this.setState({editingTodo: true});
                              }}>
                              <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                          )}
                          {this.state.editingTodo && (
                            <TouchableOpacity
                              accessibilityRole={'button'}
                              onPress={() => {
                                this.props.updateTodo(this.state.changesTodo);
                                this.setState({
                                  editingTodo: false,
                                  changesTodo: [],
                                });
                              }}>
                              <Text style={styles.buttonText}>Finish</Text>
                            </TouchableOpacity>
                          )}
                        </ImageBackground>
                      </View>
                      {this.state.editingTodo && (
                        <View style={styles.submitItem}>
                          <ImageBackground
                            accessibilityRole={'image'}
                            source={require('../static/images/001.jpg')}
                            style={styles.imageBackgroundButton}>
                            <TouchableOpacity
                              accessibilityRole={'button'}
                              onPress={() => {
                                this.setState({
                                  editingTodo: false,
                                  changesTodo: [],
                                });
                              }}>
                              <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                          </ImageBackground>
                        </View>
                      )}
                    </View>
                  )}
                </View>
              </View>
              <Text style={styles.text}>Your Days</Text>
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <View style={styles.newItem}>
                    {this.props.memorialDay.length === 0 && (
                      <Text style={styles.sectionDescription}>
                        No memorial days yet...
                      </Text>
                    )}
                    {this.props.memorialDay.length !== 0 &&
                      !this.state.editingDay &&
                      this.props.memorialDay.map(day => (
                        <Day
                          key={day.id}
                          id={day.id}
                          thing={day.thing}
                          time={day.time}
                          tag={day.tag}
                        />
                      ))}
                    {this.props.memorialDay.length !== 0 &&
                      this.state.editingDay &&
                      this.props.memorialDay.map(day => (
                        <DayEdit
                          key={day.id}
                          id={day.id}
                          thing={day.thing}
                          time={day.time}
                          tag={day.tag}
                          delete_id={this.props.deleteDay}
                          keepDayCategroyChanges={this.keepDayCategroyChanges}
                          keepDayThingOrTimeChanges={
                            this.keepDayThingOrTimeChanges
                          }
                        />
                      ))}
                  </View>
                  {this.props.memorialDay.length !== 0 && (
                    <View style={styles.submitContainer}>
                      <View style={styles.submitItem}>
                        <ImageBackground
                          accessibilityRole={'image'}
                          source={require('../static/images/001.jpg')}
                          style={styles.imageBackgroundButton}>
                          {!this.state.editingDay && (
                            <TouchableOpacity
                              accessibilityRole={'button'}
                              onPress={() => {
                                this.setState({editingDay: true});
                              }}>
                              <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                          )}
                          {this.state.editingDay && (
                            <TouchableOpacity
                              accessibilityRole={'button'}
                              onPress={() => {
                                this.props.updateDay(this.state.changesDay);
                                this.setState({
                                  editingDay: false,
                                  changesDay: [],
                                });
                              }}>
                              <Text style={styles.buttonText}>Finish</Text>
                            </TouchableOpacity>
                          )}
                        </ImageBackground>
                      </View>
                      {this.state.editingDay && (
                        <View style={styles.submitItem}>
                          <ImageBackground
                            accessibilityRole={'image'}
                            source={require('../static/images/001.jpg')}
                            style={styles.imageBackgroundButton}>
                            <TouchableOpacity
                              accessibilityRole={'button'}
                              onPress={() => {
                                this.setState({
                                  editingDay: false,
                                  changesDay: [],
                                });
                              }}>
                              <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                          </ImageBackground>
                        </View>
                      )}
                    </View>
                  )}
                </View>
              </View>
            </ImageBackground>
          </SafeAreaView>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    marginVertical: 30,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    paddingHorizontal: 10,
  },
  sectionDescription: {
    marginVertical: 8,
    fontSize: 20,
    fontWeight: '300',
    color: Colors.dark,
    textAlign: 'center',
  },
  imageBackgroundButton: {
    paddingTop: 10,
    marginHorizontal: 90,
  },
  buttonText: {
    fontSize: 22,
    color: '#F0F8FF',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    color: Colors.dark,
    fontSize: 15,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  iamgeBackground: {
    paddingBottom: 70,
    paddingTop: 100,
    paddingHorizontal: 32,
    // backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.3,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 36,
    fontWeight: '500',
    textAlign: 'center',
    // color: Colors.black,
  },
  newItem: {
    marginVertical: 10,
    // paddingHorizontal: 24,
  },
  submitItem: {
    marginBottom: 10,
  },
  submitContainer: {
    marginBottom: 20,
  },
  thirdTitle: {
    paddingVertical: 10,
    fontSize: 22,
    fontWeight: '300',
    color: Colors.black,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  tableText: {
    margin: 10,
    textAlign: 'center',
  },
});
