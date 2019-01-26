import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AppState
} from 'react-native'
const firebase = require('firebase');

export const GetMatrixEventData = (callback) => {

    var data = [];
    firebase.database().ref('matrixEvents').on('value', function (dataSnapshot) {

        if(dataSnapshot===null)
        {
            console.log('No Data');
            return data;
        }

        dataSnapshot.forEach((child) => {
            data.push({
                id: child.key,
                name: child.val().name,
                venue: child.val().venue,
                time: child.val().time
            });
        });
        callback(data);
        data= [];
        //return data;
        
    });
};

export const GetBatchEventData = (path, callback) => {

    var data= [];
    firebase.database().ref(path).on('value', function (dataSnapshot) {

        if(dataSnapshot===null)
        {
            console.log('No Data');
            return data;
        }

        dataSnapshot.forEach((child) => {
            data.push({
                id: child.key,
                name: child.val().name,
                venue: child.val().venue,
                time: child.val().time
            });
        });
        callback(data);
        data= [];
        //return data;
        
    });
}