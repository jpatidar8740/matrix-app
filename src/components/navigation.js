import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
//import WebLogin from './src/weblogin'
import AddEvent from './addEvent'
import Events from './events'
import SignUp from './signup';
import Home from './home';
import TimeTable from './timeTable';
import DeleteEvent from './deletePopup';
import AboutUs from './about_us';
import Profile from './profile';
import Search from './search';
import EditProfile from './editProfile';


const HomeNavigator = createStackNavigator(
    {
      Home: {
        screen: Home,
        title: 'Events'
      },
      SignUp: {
        screen: SignUp,
        title: 'Sign Up'
      }
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontFamily: 'Lato-Regular'
        }
      }
    }
  )
  
  const EventNavigator = createStackNavigator(
    {
      Events: {
        screen: Events,
        title: 'Events'
      },
      AddEvent: {
        screen: AddEvent,
        title: 'Post Event'
      },
      DeleteEvent: {
        screen: DeleteEvent,
        title: 'Delete Event'
      }
    },
    {
      initialRouteName: 'Events',
      defaultNavigationOptions: {
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontFamily: 'Lato-Bold'
        }
      }
    }
  );

  const AboutUsNav = createStackNavigator(
    {
      AboutUs: AboutUs
    },
    {
      initialRouteName: 'AboutUs'
    }
  )

  const TimeTableNav = createStackNavigator(
    {
      TimeTable: TimeTable
    },
    {
      initialRouteName: 'TimeTable'
    }
  );

  const ProfileNav = createStackNavigator(
    {
      Profile: Profile,
      Search: Search,
      EditProfile: EditProfile
    },
    {
      initialRouteName: 'Profile'
    }
  )
  
  const TabNav = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Events: EventNavigator,
    TimeTable: TimeTableNav,
    AboutUs: AboutUsNav,
    Profile: ProfileNav,

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'md-home';
        } else if (routeName === 'Events') {
          iconName = 'md-calendar';
        }
        else if (routeName==='TimeTable') {
          iconName = 'md-cog'
        }
        else if (routeName==='AboutUs') {
          iconName = 'md-book'
        }
        else if (routeName === 'Profile') {
          iconName = 'md-person'
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color='#000000' />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#ffffff',
      fontFamily: 'Rb'
    },
  }
  )

  export default TabNav;
  