import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationController from './pushNotification'
import PushNotification from 'react-native-push-notification';
import { ReactNativeAD, ADLoginView } from 'react-native-azure-ad';


const Header = () => {
    return(
      <View>
        <Text 
        style={{
          fontFamily: 'Reb', fontSize: 25,
          padding: 5, alignSelf: 'center', color:"#000000"}}>
        Home
        </Text>
      </View>
    )
}

export default class Home extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        UserData: {
          name: 'Jayant Patidar',
          programme: 'btech',
          current_year: 2
        }
      }
      this.handleAppStateChange = this.handleAppStateChange.bind(this)
      this.sendNotification = this.sendNotification.bind(this)
    }
  
    static navigationOptions = {
      headerTitle: <Header />,
      /* No more header config here! */
    };
  
    componentDidMount () {
      // AppState.addEventListener('change', this.handleAppStateChange);
    }
  
    componentWillMount () {
      // AppState.removeEventListener('change', this.handleAppStateChange);
    }
  
    handleAppStateChange = appstate => {
      if (appstate === 'background') {
        PushNotification.localNotificationSchedule({
          message: 'This is Scheduled Notification',
          date: new Date(Date.now() + 3 * 1000)
        })
      }
    }
  
    sendNotification = () => {
      PushNotification.localNotification({
        message: 'This is local notification'
      })
    }
  
    render () {
      return (
        <View style={{ flex: 1, padding: 10 }}>
          <Button
            title='Go to Add Event'
            onPress={() => this.props.navigation.navigate('AddEvent')}
          />
          <Button
            title='Go to Events'
            onPress={() => this.props.navigation.navigate('Events')}
          />
          <Button
            title='Go to Sign Up'
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      )
    }
  }
  