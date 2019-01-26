import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class PushController extends React.Component {


    componentDidMount() {
        PushNotification.configure({
            onNotification: function(notification) {
                console.warn('Notification' + notification);
            },
            popInitialNotification: true,
        })
    }

    render() {
        return null;
    }
}