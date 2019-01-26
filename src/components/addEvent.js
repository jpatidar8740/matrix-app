import React from 'react'
import {
  TouchableWithoutFeedback,
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');

import DateTimePicker from 'react-native-modal-datetime-picker'

import * as firebase from 'firebase'

export default class AddEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDateTimePickerVisible: false,
      event: {
        name: null,
        venue: null,
        date: null,
        detail: null
      },
      key: null,
      event_type: this.props.event_type, // Branch Event or Matrix Event
      userData: this.props.userData
    }
  }

  render () {
    return (
      <ScrollView
        style={{height: '100%',}}
        ref={ref => (this.ticker = ref)}
      >
        <TextInput
          style={style.input_general}
          placeholder='Event //one or two words'
          maxLength={20}
          onChangeText={value => {
            var event = this.state.event
            event.name = value
            this.setState({ event: event })
          }}
        />

        <TextInput
          style={style.input_general}
          placeholder='Venue'
          onChangeText={value => {
            var event = this.state.event
            event.venue = value
            this.setState({ event: event })
          }}
        />

        <TextInput
          multiline
          style={style.input_general}
          placeholder='Detail about event'
          onChangeText={value => {
            var event = this.state.event
            event.detail = value
            this.setState({ event: event })
          }}
        />

        <TouchableWithoutFeedback 
          onPress={this._showDateTimePicker}
          onPressIn={()=>this.setState({opacity_time: 0.5})}
          onPressOut={()=>this.setState({opacity_time: 1})}>
          <View style={[style.button_time_picker, {opacity: this.state.opacity_time}]}>
            <Text style={style.button_text}>Set Time and Date</Text>
          </View>
        </TouchableWithoutFeedback>

        <DateTimePicker
          mode='datetime'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDateTimePicked}
          onCancel={this._hideDateTimePicker}
          is24Hour={false}
          backgroundColor='#000000'
        />

        <Text
          style={{color: '#000000', fontFamily: 'Rb', alignSelf: 'center', margin: 3, }}
        >
          {this.state.event.date}
        </Text>

        <TextInput
          style={style.input_general}
          placeholder='Key'
          secureTextEntry
          onChangeText={value => {
            this.setState({ key: value });
          }}
        />

        <TouchableWithoutFeedback 
          onPress={this.addEvent}
          onPressIn={() => this.setState({opacity_post: 0.5})}
          onPressOut={()=>this.setState({opacity_post: 1})}>
          <View style={[style.button_submit, {opacity: this.state.opacity_post}]}>
            <Text style={style.button_text}>Post</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    )
  }

   _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
    
  }

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDateTimePicked = datetime => {
    let date = datetime.toString()
    date = date.slice(4, 21)
    var event = this.state.event
    event.date = date
    this.setState({ event: event })
    this._hideDateTimePicker()
  }

  addEvent = () => {
    
    if (this.props.event_type === 'BR') {
      if (this.VerifyKey('BR', this.state.key)) {
        // path is path where event will be saved in database, depend on user.
        let path = 'batchEvents/'
        var userData = this.state.userData
        if (userData.programme === 'btech') path = path + 'btech/'
        else if (userData.programme === 'msc') path = path + 'msc/'
        if (userData.current_year == '1') path = path + 'first/'
        else if (userData.current_year == '2') path = path + 'second/'
        else if (userData.current_year == '3') path = path + 'third/'
        else if (userData.current_year == '4') path = path + 'fourth/'
        this.PostData(path)
        console.log('Will Post data To Users Profile')
      } else {
        Alert.alert('Incorrect Key')
      }
    } else {
      if (this.VerifyKey('Matrix Member', this.state.matrixKey)) {
        this.PostData('matrixEvents/')
      } else {
        Alert.alert('Incorrect Key')
      }
    }
  }

  VerifyKey (keytype, key) {
    if (keytype === 'BR') {
      if (key === 'matrix') return 1
      // key verification
      else return 0
    } else {
      if (key === 'dimension') return 1
      else return 0
    }
  }

  PostData (path) {
    var event = this.state.event
    let data = {
      name: event.name,
      detail: event.detail,
      venue: event.venue,
      time: event.date,
      detail: event.detail,
      ticker: null, // reference to scrollview.
      opacity_post: 1,
      opacity_time: 1
    }
    const that = this

    firebase
      .database()
      .ref(path)
      .push(data)
      .then(result => {
        // success callback
        console.log('result: ', result)
        that.setState({ event: '', venue: '', time: '' })
      })
      .catch(error => {
        // error callback
        console.log('error: ', error)
      })
  }

}

const style = StyleSheet.create({
  input_general: {
    margin: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    fontFamily: 'Rbl'
  },
  button_submit: {
    marginTop: 10,
    marginHorizontal: '10%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  button_time_picker: {
    marginTop: 10,
    marginHorizontal: '2%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  button_text: {
    color: '#FFFFFF',
    fontFamily: 'Rb'
  }
})
