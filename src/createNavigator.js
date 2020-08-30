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
import UserProfile from './userProfile/containerUserProfile';
import {Text, TouchableOpacity} from 'react-native';

const UserImage = () => (
  <TouchableOpacity
    style={{marginRight: 10}}
    onPress={() => console.log(this.props)}>
    {/* onPress={() => this.props.navigation.toggleDrawer()}> */}

    <FontAwesome name={'user-circle-o'} size={26} />
  </TouchableOpacity>
);

const AppBottomNavigator = createBottomTabNavigator(
  {
    list: {
      screen: listPage,
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
      screen: editPage,
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
      screen: dayPage,
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

// const AppStack = createStackNavigator(
//   {
//     Welcome: {
//       screen: WelcomePage,
//     },
//     Login: {
//       screen: LoginPage,
//     },
//     Register: {
//       screen: RegisterPage,
//     },
//     bottomNavigator: {
//       screen: AppBottomNavigator,
//       navigationOptions: {
//         headerBackTitle: null,
//         // headerRight: <UserImage />,
//         // title: 'Remo',
//         headerTitle: 'Remo',
//         // headerShown: false,
//         headerTitleStyle: {fontSize: 22},
//         headerStyle: {height: 100},
//       },
//     },
//   },
//   {
//     initialRouteName: 'bottomNavigator',
//   },
// );

const DrawerNavigator = createDrawerNavigator(
  {
    Welcome: {
      screen: WelcomePage,
      navigationOptions: {
        title: 'Welcome',
        headerTitleStyle: {fontSize: 22},
        headerStyle: {height: 100},
      },
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: 'Login',
        headerTitleStyle: {fontSize: 22},
        headerStyle: {height: 100},
      },
    },
    Register: {
      screen: RegisterPage,
      navigationOptions: {
        title: 'Register',
        headerTitleStyle: {fontSize: 22},
        headerStyle: {height: 100},
      },
    },
    bottomNavigator: {
      screen: AppBottomNavigator,
      navigationOptions: {
        title: 'Remo',
        headerTitleStyle: {fontSize: 22},
        headerStyle: {height: 100},
      },
    },
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        title: 'Home',
        headerTitleStyle: {fontSize: 22},
        headerStyle: {height: 100},
      },
    },
  },
  {
    // order: ['Welcome', 'UserProfile', 'bottomNavigator', 'Register', 'Login'],
    initialRouteName: 'bottomNavigator',
    drawerPosition: 'right', // 抽屉在左边还是右边
    // contentComponent: Menu, // Menu是自定义侧滑栏
    drawerLockMode: 'locked-open',
    drawerWidth: 150,
  },
);

const navigationOptionsStack = ({navigation}) => {
  const {params} = navigation.state;
  return {
    headerTitle: 'Remo',
    tabBarVisible: true,
    headerRight: (
      <TouchableOpacity
        style={{marginRight: 10}}
        // onPress={() => console.log(this.props)}>
        onPress={() => navigation.toggleDrawer()}>
        <FontAwesome name={'user-circle-o'} size={26} />
      </TouchableOpacity>
    ),
  };
};

const AppStack = createStackNavigator({
  HomePage: {
    screen: DrawerNavigator,
    navigationOptions: navigationOptionsStack,
  },
});

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
