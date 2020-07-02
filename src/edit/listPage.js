import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Todo, TodoEdit} from './Todo';

export default class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      editing: false,
      changes: [],
    };
    this.keepChanges = this.keepChanges.bind(this);
  }
  componentDidMount() {
    this.listener = DeviceEventEmitter.addListener('newItem', message => {
      this.setState({message});
    });
  }
  componentWillUnmount() {
    if (this.listener) {
      this.listener.remove();
    }
  }
  keepChanges(id, newItem) {
    let dic = {};
    dic.id = id;
    dic.newItem = newItem;
    // let new_change = this.state.text;
    // new_change.push(dic);
    this.setState({changes: [...this.state.changes, dic]});
  }

  render() {
    console.log(`listPage Props${JSON.stringify(this.props)}`);
    console.log(`listPage States${JSON.stringify(this.state)}`);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ImageBackground
            accessibilityRole={'image'}
            source={require('../static/images/colorful_bg.jpg')}
            style={styles.iamgeBackground}
            imageStyle={styles.logo}>
            <Text style={styles.text}>Your Todo List</Text>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View style={styles.newItem}>
                  {this.props.todoItem.length === 0 && (
                    <Text style={styles.sectionDescription}>
                      No todos yet...
                    </Text>
                  )}
                  {this.props.todoItem.length !== 0 &&
                    !this.state.editing &&
                    this.props.todoItem.map(todos => (
                      <Todo
                        key={todos.id}
                        id={todos.id}
                        completed={todos.completed}
                        text={todos.item}
                        toggle={this.props.toggleTodo}
                      />
                    ))}
                  {this.props.todoItem.length !== 0 &&
                    this.state.editing &&
                    this.props.todoItem.map(todos => (
                      <TodoEdit
                        key={todos.id}
                        id={todos.id}
                        completed={todos.completed}
                        text={todos.item}
                        toggle={this.props.toggleTodo}
                        delete_id={this.props.deleteTodo}
                        keepChanges={this.keepChanges}
                      />
                    ))}
                </View>
                {this.props.todoItem.length !== 0 && (
                  <View style={styles.submitItem}>
                    <ImageBackground
                      accessibilityRole={'image'}
                      source={require('../static/images/001.jpg')}
                      style={styles.imageBackgroundButton}>
                      {!this.state.editing && (
                        <TouchableOpacity
                          accessibilityRole={'button'}
                          onPress={() => {
                            this.setState({editing: true});
                          }}>
                          <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                      )}
                      {this.state.editing && (
                        <TouchableOpacity
                          accessibilityRole={'button'}
                          onPress={() => {
                            this.setState({editing: false});
                            this.props.updateTodo(this.state.changes);
                          }}>
                          <Text style={styles.buttonText}>Finish</Text>
                        </TouchableOpacity>
                      )}
                    </ImageBackground>
                  </View>
                )}
              </View>
            </View>
          </ImageBackground>
        </SafeAreaView>
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
    marginTop: 30,
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
    marginBottom: 30,
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
