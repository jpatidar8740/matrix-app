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
  Linking
} from 'react-native'
import SearchButton from './search_button';

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
        Search
      </Text>
    </View>
  )
}

class Search extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />
    /* No more header config here! */
  }

  _search = () => {
        Alert.alert('Execute search for');
  }

  render () {
    return(
        <View>
            <SearchButton search={this._search} />
            

            
        </View>
    );
  }
}

export default Search
