import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  Animated,
  Easing,
  TouchableHighlight,
  Linking,
  TouchableWithoutFeedback,
  Picker
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Card1 from './su_card1'
import Card2 from './su_card2'

const Header = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Reb',
          fontSize: 25,
          padding: 5,
          alignSelf: 'center',
          color: '#000000'
        }}
      >
        Edit Profile
      </Text>
    </View>
  )
}

class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity_post: 1,
            opacity_time: 1,
            degree: 'btech',
            year: 1
        }
    }

    Save = () => {
        console.log(this.state);
    }

  render () {
    return (
      <ScrollView style={{ height: '100%' }} ref={ref => (this.ticker = ref)}>
        <TextInput
          style={style.input_general}
          placeholder='Name'
          editable={false}
          value={this.props.data.name}
          onChangeText={value => {
            this.setState({name: name})
          }}
        />

        <TextInput
          style={style.input_general}
          //placeholder='Roll no'
          placeholderTextColor="#000000"
          value={this.props.data.roll_no.toString()}
          editable={false}
          onChangeText={value => {

            this.setState({roll_no: value})
          }}
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

        <TextInput
         
          style={style.input_general}
          placeholder='Contact'
          value={this.props.data.contact}
          onChangeText={value => {
            this.setState({contact: value})
          }}
        />


        <TextInput
          style={style.input_general}
          placeholder='Hostel'
          value={this.props.data.hostel}
          
          onChangeText={value => {
            this.setState({ hostel: value })
          }}
        />

        <TextInput
          style={style.input_general}
          placeholder='Room no'
          value={this.props.data.room_no}
          
          onChangeText={value => {
            this.setState({ room_no: value  })
          }}
        />

        <TouchableWithoutFeedback
          onPress={this.Save}
          onPressIn={() => this.setState({ opacity_post: 0.5 })}
          onPressOut={() => this.setState({ opacity_post: 1 })}
        >
          <View
            style={[style.button_submit, { opacity: this.state.opacity_post }]}
          >
            <Text style={style.button_text}>Save</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    )
  }
}

class EditProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        name: 'Vidhi Popat',
        roll_no: 170123022
      }
    }
  }

  static navigationOptions = {
    headerTitle: <Header />
    /* No more header config here! */
  }

  render () {
    return (
        <View>
            <Screen data={this.state.data}  />
        </View>
    )
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
  

export default EditProfile
