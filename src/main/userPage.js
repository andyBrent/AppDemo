import React, {Component} from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class WelcomePage extends Component {
  static navigationOptions = {
    tabBarLabel: 'User',
    tabBarIcon: ({focused, tintColor}) => {
      <FontAwesome name={'user-circle'} size={26} style={{color: tintColor}} />;
    },
    //tab点击回调事件; 参数是一个对象，包含：navigation：屏幕导航道具  defaultHandler：tab按下的默认处理程序
    tabBarOnPress: event => {
      //调用组建内默认的实现方法
      event.defaultHandler();
    },
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
            <Text style={styles.text}>Page3</Text>
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
