import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView} from 'react-native';
import {ReactNativeAD, ADLoginView} from 'react-native-azure-ad'

const CLIENT_ID = '912f6f2f-9674-4d6f-b34a-4f454afdf16c';

export default class WebLogin extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {

    return(
     
        <WebView 
          source={require('./login.html')} 
          style={{ flex: 1}} />
      
    );
  }
}

//Secret phelPGWM3](xubYDE7335*(