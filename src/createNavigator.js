/*
  实现页面跳转
 */
import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from 'react-navigation-drawer';

import LoginPage from './login/containerLogin';
import RegisterPage from './login/registerPage';
import WelcomePage from './login/welcomePage';
import editPage from './edit/containerEdit';
import listPage from './edit/containerList';
import dayPage from './day/containerDay';

import UserProfile from './userProfile/userProfile';

const AppBottomNavigator = createBottomTabNavigator(
  {
    list: {
      screen: createStackNavigator({
        list: {
          screen: listPage,
        },
      }),
      navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: ({tintColor, focused}) => (
          <FontAwesome
            name={focused ? 'calendar-check-o' : 'calendar-o'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    edit: {
      screen: createStackNavigator({
        edit: {
          screen: editPage,
        },
      }),
      navigationOptions: {
        tabBarLabel: 'Edit',
        tabBarIcon: ({tintColor, focused}) => (
          <FontAwesome
            name={focused ? 'tag' : 'plus-circle'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    day: {
      screen: createStackNavigator({
        day: {
          screen: dayPage,
        },
      }),
      navigationOptions: {
        tabBarLabel: 'Day',
        tabBarIcon: ({tintColor, focused}) => (
          <FontAwesome
            name={focused ? 'calendar-check-o' : 'calendar-plus-o'}
            size={26}
            style={{color: tintColor}}
          />
        ),
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

const AppStack = createStackNavigator(
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
    bottomNavigator: {
      screen: AppBottomNavigator,
      navigationOptions: {
        // title: 'Remo',
        headerTitle: 'Remo',
        // headerShown: false,
        headerTitleStyle: {fontSize: 22},
        headerStyle: {height: 100},
      },
    },
  },
  {
    initialRouteName: 'bottomNavigator',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Homepage: {
      screen: AppStack,
    },
    UserProfile: {
      screen: UserProfile,
    },
  },
  {
    initialRouteName: 'Homepage',
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: Menu, // Menu是自定义侧滑栏
  },
);

const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;
