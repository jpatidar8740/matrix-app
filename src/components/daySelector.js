import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AppState,
  ScrollView,
  Modal,
  TouchableHighlight,
  Animated,
  Easing,
  Alert,
  Picker
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Selector extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false,
      day_selected: null
    }
    this.anmt = new Animated.Value(0)
  }

  anmtd = () => {
    this.anmt.setValue(0)
    Animated.timing(this.anmt, {
      toValue: 3,
      duration: 300,
      easing: Easing.linear
    }).start()
  }

  callback_modal = day => {
    // Updating Day take much time that's why callback is used for further processes.
    this.setState({ day_selected: day }, () => {
      this.setState({ isVisible: false })
      Alert.alert(this.state.day_selected)
    })
  }

  render () {
    const iplt = this.anmt.interpolate({
      inputRange: [0, 2, 3],
      outputRange: [0, 20, 30]
    })

    console.log(iplt)
    return (
      <View style={Style.container}>
        <TouchableHighlight onPress={() => this.setState({ isVisible: true })}>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1
            }}
          >
            <Text style={Style.day_text}>
              {this.state.day_selected != null
                ? this.state.day_selected
                : 'Select Day'}
            </Text>
          </View>
        </TouchableHighlight>

        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            console.log('Closed!')
          }}
        >
          <View style={{ backgroundColor: '#ffffff', padding: 15, margin: 15 }}>
            <Text
              style={[Style.day_text, { fontSize: 25, alignSelf: 'center' }]}
            >
              Select Day
            </Text>

            <TouchableHighlight onPress={() => this.callback_modal('Monday')}>
              <Text style={Style.day_text}>Monday</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.callback_modal('Tuesday')}>
              <Text style={Style.day_text}>Tuesday</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.callback_modal('Wednesday')}
            >
              <Text style={Style.day_text}>Wednesday</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.callback_modal('Thursday')}>
              <Text style={Style.day_text}>Thursday</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.callback_modal('Friday')}>
              <Text style={Style.day_text}>Friday</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    )
  }
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  day_text: {
    color: '#000000',
    fontFamily: 'Rb',
    fontSize: 18,
    margin: 20,
    textDecorationLine: 'underline'
  }
})

export default Selector
