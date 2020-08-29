import React, {Component} from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Auth} from 'aws-amplify';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      re_password: '',
      email: '',
      animating: false,
      sending_code: false,
      verification_code: '',
    };
    this.confirmSignUp = this.confirmSignUp.bind(this);
  }
  static navigationOptions = {
    title: 'Register',
  };

  async confirmSignUp() {
    await Auth.confirmSignUp(this.state.username, this.state.verification_code)
      .then(() => {
        this.setState({sending_code: true});
        this.props.navigation.navigate('Login', {
          username: this.state.username,
        });
      })
      .catch(error => {
        console.log('error confirming sign up', error);
        Alert.alert(error.message);
      })
      .finally(() => {
        this.setState({animating: false});
      });
  }

  async signUp() {
    if (this.state.username === '') {
      this.setState({animating: false});
      Alert.alert('Username Can Not Be Null!');
      return;
    }
    if (this.state.password === '') {
      this.setState({animating: false});
      Alert.alert('Please Enter Password!');
      return;
    }
    if (this.state.password !== this.state.re_password) {
      this.setState({animating: false});
      Alert.alert('The Passwords Are Inconsistent ');
      return;
    }
    if (this.state.email === '') {
      this.setState({animating: false});
      Alert.alert('Email Can Not Be Null!');
      return;
    }
    let signUp_username = this.state.username;
    let signUp_password = this.state.password;
    let signUp_email = this.state.email;
    await Auth.signUp({
      username: signUp_username,
      password: signUp_password,
      attributes: {
        email: signUp_email, // optional
        // phone_number, // optional - E.164 number convention
        // other custom attributes
      },
    })
      .then(() => this.setState({sending_code: true}))
      .catch(error => {
        console.log('error signing in', error);
        Alert.alert(error.message);
        this.setState({password: '', re_password: ''});
      })
      .finally(() => {
        this.setState({animating: false});
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <ScrollView scrollEnabled={true}>
          <SafeAreaView>
            <KeyboardAvoidingView
              behavior={'position'}
              // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              // style={styles.container}
            >
              <ImageBackground
                accessibilityRole={'image'}
                source={require('../static/images/colorful_bg.jpg')}
                style={styles.imageBackground}
                imageStyle={styles.background}
              />
              <View style={styles.container}>
                <Image
                  source={require('../static/images/logo_name.png')}
                  style={styles.logo}
                />
              </View>
              {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )}
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Register</Text>
                  <View style={styles.thirdContainer}>
                    <Text style={styles.thirdTitle}>Username</Text>
                    <TextInput
                      style={styles.textInputStyle}
                      value={this.state.username}
                      onChangeText={text => this.setState({username: text})}
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      placeholder={' please enter username'}
                    />
                  </View>
                  <View style={styles.thirdContainer}>
                    <Text style={styles.thirdTitle}>Password</Text>
                    <TextInput
                      style={styles.textInputStyle}
                      secureTextEntry={true}
                      value={this.state.password}
                      onChangeText={text => this.setState({password: text})}
                      placeholder={' please enter password'}
                    />
                  </View>
                  <View style={styles.thirdContainer}>
                    <Text style={styles.thirdTitle}>Re-enter</Text>
                    <TextInput
                      style={styles.textInputStyle}
                      secureTextEntry={true}
                      value={this.state.re_password}
                      onChangeText={text => this.setState({re_password: text})}
                      placeholder={' please re-enter password'}
                    />
                  </View>
                  <View style={styles.thirdContainer}>
                    <Text style={styles.thirdTitle}>Email</Text>
                    <TextInput
                      style={styles.textInputStyle}
                      value={this.state.email}
                      onChangeText={text => this.setState({email: text})}
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      placeholder={' please enter email'}
                    />
                  </View>
                  {this.state.sending_code && (
                    <View style={styles.thirdContainer}>
                      <Text style={styles.thirdTitle}>Verification Code</Text>
                      <TextInput
                        style={styles.textInputStyleShort}
                        value={this.state.verification_code}
                        onChangeText={text =>
                          this.setState({verification_code: text})
                        }
                        autoCapitalize={'none'}
                        autoCorrect={false}
                      />
                    </View>
                  )}
                  <ActivityIndicator
                    size={'large'}
                    animating={this.state.animating}
                  />
                  <ImageBackground
                    accessibilityRole={'image'}
                    source={require('../static/images/001.jpg')}
                    style={styles.imageBackgroundButton}
                    imageStyle={styles.buttonBackground}>
                    {!this.state.sending_code && (
                      <TouchableOpacity
                        accessibilityRole={'button'}
                        onPress={() => {
                          this.setState({animating: true});
                          this.signUp();
                        }}>
                        <Text style={styles.buttonText}>
                          <FontAwesome
                            name={'arrow-circle-o-right'}
                            size={33}
                            color="white"
                          />
                        </Text>
                      </TouchableOpacity>
                    )}
                    {this.state.sending_code && (
                      <TouchableOpacity
                        accessibilityRole={'button'}
                        onPress={() => {
                          this.setState({animating: true});
                          this.confirmSignUp();
                        }}>
                        <Text style={styles.buttonText}>
                          <FontAwesome
                            name={'long-arrow-right'}
                            size={33}
                            color="white"
                          />
                        </Text>
                      </TouchableOpacity>
                    )}
                  </ImageBackground>
                  <View style={styles.buttonContainer}>
                    <Button
                      onPress={() => navigate('bottomNavigator')}
                      title="Skip for now"
                      color="#841584"
                      style={styles.button}
                    />
                    <Button
                      onPress={() => navigate('Login')}
                      title="Already have account?"
                      color="#841584"
                      style={styles.button}
                    />
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </ScrollView>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  thirdContainer: {
    marginTop: 30,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  thirdTitle: {
    paddingTop: 5,
    fontSize: 22,
    fontWeight: '300',
    color: Colors.black,
  },
  textInputStyle: {
    width: 220,
    height: 35,
    borderColor: '#E8E8E8',
    borderWidth: 2,
  },
  textInputStyleShort: {
    width: 150,
    height: 35,
    borderColor: '#E8E8E8',
    borderWidth: 2,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: '400',
    color: Colors.dark,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  imageBackground: {
    paddingTop: 40,
    paddingHorizontal: 0,
  },
  imageBackgroundButton: {
    marginTop: 10,
    paddingTop: 10,
    marginHorizontal: 10,
    // flex:1,
  },
  buttonBackground: {
    justifyContent: 'center',
  },
  background: {
    opacity: 0.4,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -180,
    marginBottom: 30,
  },
  logo: {
    width: 160,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 36,
    fontWeight: '500',
    textAlign: 'center',
    // color: Colors.black,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
});
