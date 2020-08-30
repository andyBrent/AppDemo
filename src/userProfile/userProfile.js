import React, {Component} from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class UserProfile extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    const {user} = this.props;
    console.log(`user:${JSON.stringify(user)}`);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ImageBackground
            accessibilityRole={'image'}
            source={require('../static/images/colorful_bg.jpg')}
            style={styles.iamgeBackground}
            imageStyle={styles.logo}>
            <Text style={styles.text}>User Profile</Text>
          </ImageBackground>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.highlight}>
                userName:
                <Text style={styles.sectionDescription}>
                  {user.userName || 'Null'}
                </Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.highlight}>
                email:
                <Text style={styles.sectionDescription}>
                  {user.attributes ? user.attributes.email || 'Null' : 'Null'}
                </Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.highlight}>
                email_verified:
                <Text style={styles.sectionDescription}>
                  {user.attributes
                    ? user.attributes.email_verified
                      ? 'True'
                      : 'False'
                    : 'Null'}
                </Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.highlight}>
                phone_number:
                <Text style={styles.sectionDescription}>
                  {user.attributes
                    ? user.attributes.phone_number || 'Null'
                    : 'Null'}
                </Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.highlight}>
                email_verified:
                <Text style={styles.sectionDescription}>
                  {user.attributes
                    ? user.attributes.phone_number_verified
                      ? 'True'
                      : 'False'
                    : 'Null'}{' '}
                </Text>
              </Text>
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
  body: {
    backgroundColor: Colors.white,
    padding: 15,
  },
  sectionContainer: {
    // marginVertical: 1,
    paddingHorizontal: 10,
  },
  imageBackgroundButton: {
    marginTop: 30,
    paddingTop: 10,
    marginHorizontal: 120,
    marginBottom: 50,
  },
  buttonBackground: {
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
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
    paddingBottom: -10,
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
    marginBottom: 20,
    // color: Colors.black,
  },
});
