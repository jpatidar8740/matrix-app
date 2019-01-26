import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AppState
} from 'react-native';

const Card = (props) => {
    return(
        <View style={style.container}>
            <Text style={style.text_head}>{props.lecture}</Text>
            <Text style={style.text_norm}>{'Time: '+props.time}</Text>
            <Text style={style.text_norm}>{'Venue: '+props.venue}</Text>
        </View>
    );
} 

const style = StyleSheet.create({
    container: {
        margin: 15,
        marginHorizontal: '10%',
        elevation: 5,
        backgroundColor:  '#e5e7e9',
        padding: 15,
    },
    text_head: {
        color: '#17202a',
        fontFamily: 'Reb',
        fontSize: 25,
        margin: 5,
    },
    text_norm: {
        color: '#17202a',
        fontFamily: 'Rm',
        fontSize: 20,
        margin: 3
    },

})

export default Card;