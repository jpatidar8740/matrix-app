import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Animated, Easing, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DeleteEvent extends React.Component {
    
    render() {

        const Id = this.props.navigation.getParam('id');
        Alert.alert(Id);

        return(
            <View
                style={style.container}
            >

                <Text
                    style={{color: '#000000', fontFamily: 'Rb', fontSize: 30, alignSelf: 'center', margin: 5}}
                >Delete</Text>

                <TextInput
                    style={style.input_text}
                    placeholder='Enter key'
                    secureTextEntry={true}

                />

                <Text
                    style={{color: 'red', fontFamily: 'Rm', fontSize: 12, alignSelf: 'center'}}
                >Note: Only Br and Matrix member can delete events.</Text>

                <View
                    style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}
                >

                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigation.navigate('Events');
                        }}
                    >
                        <View
                            style={[style.button]}
                        >
                            <Text
                                style={style.button_text}
                            >Cancel</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <View
                            style={[style.button]}
                        >
                            <Text
                                style={style.button_text}
                            >Delete</Text>
                        </View>
                    </TouchableHighlight>

                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        
        backgroundColor: '#ffffff',
        height: '100%',
    },
    input_text: {
        margin: 10,
        alignSelf: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#000000',
        //padding: 5,
        width: '80%'
    },
    button: {
        padding: 10,
        //width: '25%',
        backgroundColor: '#000000',
        margin: 10,
    },
    button_text: {
        color: '#ffffff',
        fontFamily: 'Rb',
        fontSize: 15
    }
})

export default DeleteEvent;