
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
} from 'react-native';

const styles = StyleSheet.create({
    card1_container: {
      marginTop: 10,
      marginLeft: '5%',
      width: '90%',
      backgroundColor: '#FDFEFE',
      //borderRadius: 2,
      padding: 8,
      elevation: 10,
      marginBottom: '20%',
      borderWidth: 1,
      borderColor: '#000000',
    },
    card1_input: {
      margin: 5,
      marginVertical: 10,
      backgroundColor: '#F7F9F9',
      height: 40,
      //borderRadius: 5,
      borderWidth: 1,
      borderColor: '#000000',
      elevation: 5,
      padding: 10,
      fontFamily: 'Rbl',
      color: '#000000',
      fontSize: 15
    },
    card_1_button: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      width: '25%',
      //borderRadius: 15,
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
  })

export default class Card1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      degree: 'btech',
      year: 1,
      name: null,
      roll_no: null,
      translateY: 0
    }
    this.animatedValue = new Animated.Value(0) //animation instantiation
  }

  NextHandler = () => {
    if (  // all value are required
      this.state.name != null &&
      this.state.roll_no != null &&
      this.state.degree != null &&
      this.state.year != null
    ) 
    {
      this.animate()
    } else {
      Alert.alert('All fields required.')
    }
  }

  // animation function //sliding effects and all.
  animate = () => {
    var data = {
      name: this.state.name,
      roll_no: this.state.roll_no,
      degree: this.state.degree,
      year: this.state.year
    }

    this.animatedValue.setValue(0)
    Animated.timing(this.animatedValue, {
      toValue: 5,
      duration: 600,
      easing: Easing.linear
    }).start(() => this.props.callback(data)) //callback push this data to server for more check signup.js
  }

  render () {
    //interpolate variable
    const transX = this.animatedValue.interpolate({
      inputRange: [0, 1, 3, 5],
      outputRange: [0, -100, -300, -500]
    })

    return (
      <Animated.View style={{ transform: [{ translateX: transX }] }}>
        <KeyboardAvoidingView>
          <Animated.View
            style={[
              styles.card1_container,
              { transform: [{ translateY: this.state.translateY }] }
            ]}
          >
            <Text
              style={{
                color: '#1b2631',
                fontFamily: 'Rbl',
                fontSize: 30,
                alignSelf: 'center'
              }}
            >
              About You
            </Text>

            <TextInput
              style={styles.card1_input}
              placeholder='Full Name'
              fontFamily='Rbl'
              
              onChangeText={text => this.setState({ name: text })}
              onSubmitEditing={Keyboard.dismiss}
              
            />

            <TextInput
              style={styles.card1_input}
             
              placeholder='Roll no'
              keyboardType='numeric'
              fontFamily='Rbl'
              
              onChangeText={text => this.setState({ roll_no: text })}
            />

            <View style={{ flexDirection: 'row' }}>
              <Picker
                prompt='Degree'
                mode='dropdown'
                selectedValue={this.state.degree}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ degree: itemValue })
                }
              >
                <Picker.Item label='B. Tech' value='btech' />
                <Picker.Item label='M. Sc' value='msc' />
              </Picker>

              <Picker
                prompt='Year'
                mode='dropdown'
                selectedValue={this.state.year}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ year: itemValue })
                }
              >
                <Picker.Item label='First Year' value='1' />
                <Picker.Item label='Second Year' value='2' />
                <Picker.Item label='Third Year' value='3' />
                <Picker.Item label='Fourth Year' value='4' />
              </Picker>
            </View>

            <TouchableWithoutFeedback onPress={this.NextHandler}>
              <View style={styles.card_1_button}>
                <Text style={{ color: '#FDFEFE', fontFamily: 'Rbl' }}>
                  Next
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </KeyboardAvoidingView>
      </Animated.View>
    )
  }
}
