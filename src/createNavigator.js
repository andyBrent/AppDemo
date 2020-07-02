/*
  实现页面跳转
 */
import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import LoginPage from './login/loginPage';
import RegisterPage from './login/registerPage';
import WelcomePage from './login/welcomePage';
import editPage from './edit/containerEdit';
import listPage from './edit/containerList';
import userPage from './main/userPage';

const AppBottomNavigator = createBottomTabNavigator(
  {
    list: {
      screen: listPage,
      navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: ({focused, tintColor}) => {
          <FontAwesome
            name={focused ? 'check' : 'check'}
            size={20}
            style={{color: tintColor}}
          />;
        },
      },
    },
    edit: {
      screen: editPage,
      navigationOptions: {
        tabBarLabel: 'Edit',
        tabBarIcon: ({focused, tintColor}) => {
          <FontAwesome
            name={focused ? 'check' : 'check'}
            size={20}
            style={{color: tintColor}}
          />;
        },
      },
    },
    user: {
      screen: userPage,
      navigationOptions: {
        tabBarLabel: 'User',
        tabBarIcon: ({focused, tintColor}) => {
          <FontAwesome
            name={focused ? 'check' : 'check'}
            size={20}
            style={{color: tintColor}}
          />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      showIcon: true,
      labelStyle: {
        fontSize: 16,
      },
      style: {height: 70},
    },
  },
);

const RootStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomePage,
    },
    Login: {
      screen: LoginPage,
    },
    Register: {
      screen: RegisterPage,
    },
    // list: {
    //   screen: listPage,
    // },
    // edit: {
    //   screen: editPage,
    // },
    // user: {
    //   screen: userPage,
    // },
    bottomNavigator: {
      screen: AppBottomNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'bottomNavigator',
  },
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;
