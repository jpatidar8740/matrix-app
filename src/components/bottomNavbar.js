import React, {Component} from 'react';
import {Text, View, Animated, Easing, StyleSheet, Dimensions, Alert} from 'react-native';
var {width, height} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/Ionicons';



class BottomNav extends React.Component {


    constructor(props) {
        super(props);
        
    }

    

    render() {

       return(
            <View style={styles.container}>
                <Icon style={styles.logo} name='md-calendar' size={35} color="#000000"/>
                <Icon style={styles.logo} name='md-calendar' size={35} color="#000000"/>
                <Icon style={styles.logo} name='md-calendar' size={35} color="#000000"/>
                <Icon style={styles.logo} name='md-calendar' size={35} color="#000000"/>
            </View>
       );
    }
}

var styles = StyleSheet.create({
    container: {
        position: 'absolute',

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#ffffff',
        left: 0,
        bottom: 0,
        elevation: 10,
        //bottom: height
    },
    logo: {
        paddingHorizontal: 10
    }
})


export default BottomNav;


