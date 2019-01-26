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
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileCard from './profile_card';

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
        Profile
      </Text>
    </View>
  )
}


class Profile extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
    /* No more header config here! */
  }

  render () {
    return (
      <View>
        <ProfileCard />

        <View
            style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '10%'}}
        >
          {/* Edit Profile */}
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('EditProfile');
            }}
          >
            <View style={Styles.edit_profile_button}>
              <Text style={Styles.button_text}>Edit Profile</Text>
            </View>
          </TouchableHighlight>

          {/* Search */}
          <TouchableHighlight
            onPress={() => {
                this.props.navigation.navigate('Search');
            }}
          >
            <View style={Styles.search_profile_button}>
              <Icon
                style={{ margin: 3, alignSelf: 'center' }}
                name='search'
                size={15}
                color='#000000'
              />
              <Text style={Styles.search_text}>Search by hostel</Text>
            </View>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
            style={Styles.feedback_button}
            onPress={() => {
                Linking.openURL('mailto:matrix.iitguwahti@gmail.com?subject=App Feedback');
            }}
        >
            <View style={{flexDirection: 'row'}}>
                <Text style={Styles.feedback_text}>Leave us feedback</Text>
                <Icon
                    style={{ margin: 5, alignSelf: 'center' }}
                    name='paper-plane'
                    size={15}
                    color='#ffffff'
                />
            </View>
        </TouchableHighlight>

        <TouchableHighlight
            style={Styles.feedback_button}
            onPress={() => {
                Linking.openURL('mailto:matrix.iitguwahti@gmail.com?subject=App Feedback');
            }}
        >
            <View style={{flexDirection: 'row'}}>
                <Text style={Styles.feedback_text}>Log Out</Text>
                <Icon
                    style={{ margin: 5, alignSelf: 'center' }}
                    name='sign-out'
                    size={15}
                    color='#ffffff'
                />
            </View>
        </TouchableHighlight>

      </View>
    )
  }
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
  },
  edit_profile_button: {
    //width: '30%',
    flexDirection: 'row',
    height: 30,
    alignSelf: 'center',
    backgroundColor: '#f4f6f7',
    marginTop: 10,
    elevation: 5,
    padding: 4
    //justifyContent: 'center'
  },
  button_text: {
    color: '#000000',
    alignSelf: 'center',
    fontFamily: 'Rb',
    alignSelf: 'center',
    alignItems: 'center',
  },
  search_profile_button: {
    flexDirection: 'row',
   // width: '80%',
    height: 30,
    alignSelf: 'center',
    backgroundColor: '#f4f6f7',
    marginTop: 10,
    elevation: 5,
    padding: 4
    //marginRight: '10%' 
    // justifyContent: 'space-around',
  },
  search_text: {
    color: '#000000',
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Rb'
  },
  feedback_button: {
      flexDirection: 'row',
      marginTop: 50,
      height: 30,
      //marginHorizontal: '15%',
      alignSelf: 'center',
      width: '70%',
      backgroundColor: '#000000',
      justifyContent: 'center',
      elevation: 5,
  },
  feedback_text: {
      color: '#ffffff',
      fontFamily: 'Rb',
      alignSelf: 'center',
      
  } 
})

export default Profile
