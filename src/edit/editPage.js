import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  Alert,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      message: '',
    };
  }
  createTwoButtonAlert = () =>
    Alert.alert(
      'New successfully!',
      `"${this.state.text}" has been added`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  componentDidMount() {
    this.listener = DeviceEventEmitter.addListener('deleteItem', message => {
      this.setState({message});
    });
  }
  componentWillUnmount() {
    if (this.listener) {
      this.listener.remove();
    }
  }
  render() {
    console.log(`editPage${JSON.stringify(this.props)}`);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ImageBackground
            accessibilityRole={'image'}
            source={require('../static/images/colorful_bg.jpg')}
            style={styles.iamgeBackground}
            imageStyle={styles.logo}>
            <Text style={styles.text}>New Item</Text>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>New a todo item.</Text>
                <Text style={styles.sectionDescription}>
                  Add a new todo item in the following box.
                </Text>
                <View style={styles.newItem}>
                  <Text style={styles.thirdTitle}>Todo item</Text>
                  <Text style={styles.sectionDescription}>
                    total number of item: {this.props.todoItem.length}
                  </Text>
                  <TextInput
                    style={styles.textInputStyle}
                    value={this.state.text}
                    onChangeText={new_text => this.setState({text: new_text})}
                  />
                </View>
                <View style={styles.submitItem}>
                  <ImageBackground
                    accessibilityRole={'image'}
                    source={require('../static/images/001.jpg')}
                    style={styles.imageBackgroundButton}>
                    <TouchableOpacity
                      accessibilityRole={'button'}
                      onPress={() => {
                        if (this.state.text === '') {
                          Alert.alert('Do not new an empty item.');
                          return;
                        }
                        this.props.newTodo(this.state.text);
                        this.setState({text: ''});
                        this.createTwoButtonAlert();
                        DeviceEventEmitter.emit('newItem', '新增了todoItem');
                      }}>
                      <Text style={styles.buttonText}>New</Text>
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
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    marginTop: 30,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 18,
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
  sectionTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
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
    marginVertical: 30,
    // paddingHorizontal: 24,
  },
  submitItem: {
    marginBottom: 30,
  },
  thirdTitle: {
    paddingTop: 5,
    fontSize: 22,
    fontWeight: '300',
    color: Colors.black,
  },
  textInputStyle: {
    marginTop: 12,
    height: 42,
    borderColor: '#E8E8E8',
    borderWidth: 2,
  },
});
