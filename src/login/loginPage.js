import React, {Component, useEffect} from 'react';
import {
  ScrollView,
  ActivityIndicator,
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
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Auth} from 'aws-amplify';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      animating: false,
    };
    this.signIn = this.signIn.bind(this);
  }

  // useEffect(() => {
  //   if (route.params?.post) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params?.post]);

  static navigationOptions = {
    title: 'Login',
  };

  async signIn() {
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
    await Auth.signIn(this.state.username, this.state.password)
      .then(userDict => this.props.userSignIn(userDict))
      .then(() =>
        console.log(this.props.navigation.navigate('bottomNavigator')),
      )
      .catch(error => {
        console.log('error signing in', error);
        Alert.alert(error.message);
        this.setState({password: ''});
      })
      .finally(() => {
        this.setState({animating: false});
      });
  }

  render() {
    console.log(`loginPage${JSON.stringify(this.props)}`);
    const {navigate} = this.props.navigation;
    // const {username} = this.props.route.params;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <ScrollView scrollEnabled={true}>
          <SafeAreaView>
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
                <Text style={styles.sectionTitle}>Login</Text>
                <View style={styles.thirdContainer}>
                  <Text style={styles.thirdTitle}>Username</Text>
                  <TextInput
                    style={styles.textInputStyle}
                    onChangeText={text => this.setState({username: text})}
                    value={this.state.username}
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
                    onChangeText={text => this.setState({password: text})}
                    value={this.state.password}
                    placeholder={' please enter password'}
                  />
                </View>
                <ActivityIndicator
                  size={'large'}
                  animating={this.state.animating}
                />
                <ImageBackground
                  accessibilityRole={'image'}
                  source={require('../static/images/001.jpg')}
                  style={styles.imageBackgroundButton}
                  imageStyle={styles.buttonBackground}>
                  <TouchableOpacity
                    accessibilityRole={'button'}
                    onPress={() => {
                      this.setState({animating: true});
                      this.signIn();
                    }}>
                    <Text style={styles.buttonText}>
                      <FontAwesome
                        name={'arrow-circle-o-right'}
                        size={33}
                        color="white"
                      />
                    </Text>
                  </TouchableOpacity>
                </ImageBackground>
                <View style={styles.buttonContainer}>
                  <Button
                    onPress={() => navigate('Register')}
                    title="Register account"
                    color="#841584"
                    style={styles.button}
                  />
                </View>
              </View>
            </View>
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
  sectionDescription: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: '400',
    color: Colors.dark,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
    marginHorizontal: 20,
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
    marginBottom: -30,
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
