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
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ImageBackground
            accessibilityRole={'image'}
            source={require('../static/images/colorful_bg.jpg')}
            style={styles.iamgeBackground}
            imageStyle={styles.logo}>
            <Text style={styles.text}>Welcome to Remo</Text>
          </ImageBackground>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>What is Remo?</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Remo</Text> is the abbreviation
                for Remember memory.
              </Text>
              <Text style={styles.sectionDescription}>
                Remo provides you with accurate calcualtion of time-gap bewteen
                now and your memorable day.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Usage of Remo</Text>
              <Text style={styles.sectionDescription}>
                <FontAwesome name={'check'} size={15} /> Inform memorial days
              </Text>
              <Text style={styles.sectionDescription}>
                <FontAwesome name={'check'} size={15} /> Desing your Remo Card
              </Text>
              <Text style={styles.sectionDescription}>
                <FontAwesome name={'check'} size={15} /> Count down the gap
                bewteen now and certain date
              </Text>
              <Text style={styles.sectionDescription}>
                <FontAwesome name={'check'} size={15} /> Make friends and
                appreciate their remo cards
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Ready？</Text>
              <ImageBackground
                accessibilityRole={'image'}
                source={require('../static/images/001.jpg')}
                style={styles.imageBackgroundButton}
                imageStyle={styles.buttonBackground}>
                <TouchableOpacity
                  accessibilityRole={'button'}
                  onPress={() => navigate('Login')}>
                  <Text style={styles.buttonText}>Next Step...</Text>
                </TouchableOpacity>
              </ImageBackground>
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
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
});
