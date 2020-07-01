import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  Alert,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Todo from './Todo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
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

  render() {
    console.log(`listPage${JSON.stringify(this.props)}`);
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
                    <Text>No todos yet...</Text>
                  )}
                  {this.props.todoItem.length !== 0 &&
                    this.props.todoItem.map(todos => (
                      <Todo
                        key={todos.id}
                        id={todos.id}
                        completed={todos.completed}
                        text={todos.item}
                        toggle={this.props.toggleTodo}
                      />
                    ))}
                </View>
                <View style={styles.submitItem}>
                  <ImageBackground
                    accessibilityRole={'image'}
                    source={require('../static/images/001.jpg')}
                    style={styles.imageBackgroundButton}>
                    <TouchableOpacity
                      accessibilityRole={'button'}
                      // onPress={() => {
                      //   this.props.toggleTodo(2);
                      // }}
                    >
                      <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
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
