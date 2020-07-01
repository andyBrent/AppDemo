import React, {Component} from 'react';
import {
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

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class RegisterPage extends Component {
  static navigationOptions = {
    title: 'Register',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <StatusBar barStyle="dark-content" />
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
              <Text style={styles.sectionTitle}>Register</Text>
              <View style={styles.thirdContainer}>
                <Text style={styles.thirdTitle}>Username</Text>
                <TextInput style={styles.textInputStyle} />
              </View>
              <View style={styles.thirdContainer}>
                <Text style={styles.thirdTitle}>Password</Text>
                <TextInput
                  style={styles.textInputStyle}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.thirdContainer}>
                <Text style={styles.thirdTitle}>Re-enter</Text>
                <TextInput
                  style={styles.textInputStyle}
                  secureTextEntry={true}
                />
              </View>
              <ImageBackground
                accessibilityRole={'image'}
                source={require('../static/images/001.jpg')}
                style={styles.imageBackgroundButton}
                imageStyle={styles.buttonBackground}>
                <TouchableOpacity accessibilityRole={'button'}>
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
    paddingTop: 200,
    paddingHorizontal: 0,
  },
  imageBackgroundButton: {
    marginTop: 30,
    paddingTop: 10,
    marginHorizontal: 120,
    // flex:1,
  },
  buttonBackground: {
    justifyContent: 'center',
  },
  background: {
    opacity: 0.4,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -100,
  },
  logo: {
    width: 160,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 30,
    marginBottom: 190,
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
