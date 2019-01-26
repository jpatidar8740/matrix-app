import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Animated,
  Easing,
  TouchableHighlight,
  Linking
} from 'react-native'

const ProfileCard = props => {
  return (
    <View style={Styles.profile_container}>
      <Text style={Styles.profile_name}>Jayant Patidar</Text>
      {/* line start */}

      <View
        style={{
          backgroundColor: '#000000',
          width: '80%',
          alignSelf: 'center',
          height: 2,
          margin: 5
        }}
      />

      {/* line end */}

      <Text style={Styles.profile_text}>{'Roll no.- ' + '170123022'}</Text>
      <Text style={Styles.profile_text}>{'Hostel- ' + 'Lohit A-316'}</Text>
      <Text style={Styles.profile_text}>{'Contact no.- ' + '8839156532'}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  profile_container: {
    marginTop: 50,
    marginHorizontal: '10%',
    padding: 15,
    elevation: 5,
    backgroundColor: '#f4f6f7'
  },
  profile_name: {
    color: '#000000',
    fontFamily: 'Rbl',
    fontSize: 25,
    alignSelf: 'center'
  },
  profile_text: {
    color: '#000000',
    fontFamily: 'Rbl',
    fontSize: 15,
    marginVertical: 3
  }
})

export default ProfileCard
