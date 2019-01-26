
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
      //borderRadius: 5,
      padding: 8,
      elevation: 5,
      marginBottom: '20%',
      borderWidth: 1,
      borderColor: '#000000',
    },
    card1_input: {
      margin: 5,
      marginVertical: 10,
      backgroundColor: '#FFFFFF',
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
      //borderRadius: 15,
      backgroundColor: '#000000'
    },
    card_2_2_button: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      width: '25%',
      //borderRadius: 15,
      backgroundColor: '#000000'
    }
  })

export default class Card2 extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        hostel: 'Barak',
        contact: null,
        room_no: null,
        translateY: 0
      }
      this.animatedValue = new Animated.Value(0)
    }
  
    BackHandler = () => {
      this.animate()
    }
  
    FinishHandler = () => {
      var data = {
        hostel: this.state.hostel,
        contact: this.state.contact,
        room_no: this.state.room_no
      }
      this.props.submit(data)
    }
  
    animate = () => {
      this.animatedValue.setValue(0)
      Animated.timing(this.animatedValue, {
        toValue: 5,
        duration: 600,
        easing: Easing.linear
      }).start(() => {
        this.props.callback()
      })
    }
  
    render () {
      const transX = this.animatedValue.interpolate({
        inputRange: [0, 1, 3, 5],
        outputRange: [0, 100, 300, 600]
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
                Contact Info.
              </Text>
  
              <TextInput
                style={styles.card1_input}
                placeholder='Contact no'
                keyboardType='numeric'
                fontFamily='Rbl'
                
                onChangeText={text => this.setState({ contact: text })}
              />
  
              <TextInput
                style={styles.card1_input}
                placeholder='Hostel'
                fontFamily='Rbl'
                autoCapitalize='words'
                
                onChangeText={text => this.setState({ hostel: text })}
              />
  
              <TextInput
                style={styles.card1_input}
                placeholder='Room No.'
                fontFamily='Rbl'
                
                onChangeText={text => this.setState({ room_no: text })}
              />
  
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-between'
                }}
              >
                <TouchableWithoutFeedback onPress={this.BackHandler}>
                  <View style={styles.card_2_1_button}>
                    <Text style={{ color: '#FDFEFE', fontFamily: 'Rbl' }}>
                      Back
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
  
                <TouchableWithoutFeedback onPress={this.FinishHandler}>
                  <View style={styles.card_2_2_button}>
                    <Text style={{ color: '#FDFEFE', fontFamily: 'Rbl' }}>
                      Finish
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </Animated.View>
          </KeyboardAvoidingView>
        </Animated.View>
      )
    }
  }
  