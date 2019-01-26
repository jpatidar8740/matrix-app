import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Picker,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
var logo = require('../../assets/matrixLogo.png');
import Card1 from './su_card1';
import Card2 from './su_card2';

const LogoApp = () => {
  return (
    <View style={styles.logo_container}>
      <Image style={styles.logo} source={logo} />
    </View>
  )
}

const Header = () => {
  return(
    <View>
      <Text 
      style={{
        fontFamily: 'Rb', fontSize: 25,
        padding: 5, alignSelf: 'center', color:"#000000"}}>
      Sign Up
      </Text>
    </View>
  )
}


export default class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flip: true
    }
  }

  static navigationOptions = {
    headerTitle: <Header />
  };

  Card1DataHandler = data => {
    data = JSON.stringify(data)
    //Alert.alert(data)
    this.setState({ flip: !this.state.flip })
  }

  Card2BackHandler = () => {
    this.setState({ flip: !this.state.flip })
  }

  Card2Submit = data => {
    data = JSON.stringify(data)
    //Alert.alert(data)
    // Send Data to firebase.
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <LogoApp />
        {this.state.flip ? (
          <Card1 callback={this.Card1DataHandler} />
        ) : (
          <Card2 callback={this.Card2BackHandler} submit={this.Card2Submit} />
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    paddingBottom: '30%'
  },
  logo_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    margin: 5,
    height: 50,
    width: 50
  },
  card1_container: {
    marginTop: 10,
    marginLeft: '5%',
    width: '90%',
    backgroundColor: '#FDFEFE',
    borderRadius: 5,
    padding: 8,
    elevation: 5,
    marginBottom: '20%'
  },
  card1_input: {
    margin: 5,
    marginVertical: 10,
    backgroundColor: '#F7F9F9',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
    elevation: 5,
    padding: 10,
    fontFamily: 'Lato-Bold',
    color: '#000000',
    fontSize: 20
  },
  card_1_button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: '25%',
    borderRadius: 15,
    backgroundColor: '#000000'
  },
  card_2_1_button: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: '25%',
    borderRadius: 15,
    backgroundColor: '#000000'
  },
  card_2_2_button: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: '25%',
    borderRadius: 15,
    backgroundColor: '#000000'
  }
});