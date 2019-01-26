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
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


class SearchButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icon: 'search',
            searchText: null,
        }
    }


    render() {


        return(
            <View style={styles.container}>
                <TextInput
                    onFocus={()=> {
                        this.setState({icon: 'arrow-right'})
                    }}
                    onBlur={()=> {
                        this.setState({icon: 'search'})
                    }}
                    onChangeText={ (text) => {
                        this.setState({searchText: text});
                        console.log(this.state);
                    }}
                style={styles.input} placeholder="search by hostel" />
                <Icon name={this.state.icon} size={20} color='#000000' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        marginTop: 25,
        alignSelf: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 5,
        elevation: 2,
        width: '70%',
        justifyContent: 'space-between',
        //paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        
        //borderWidth: 1
    }
})

export default SearchButton;