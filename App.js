import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AppState
} from 'react-native';

// symbol polyfills
global.Symbol = require('core-js/es6/symbol')
require('core-js/fn/symbol/iterator')

// collection fn polyfills
require('core-js/fn/map')
require('core-js/fn/set')
require('core-js/fn/array/find')

//firebase initiliazation
const firebase = require('firebase');
var config = {
  apiKey: "#########################",
  authDomain: "######################",
  databaseURL: "###################",
  projectId: "#",
  storageBucket: "###",
  messagingSenderId: "#####################################"
};

firebase.initializeApp(config);

import {
  
  createAppContainer,
  
} from 'react-navigation'
import TabNav from './src/components/navigation';
import PushController from './src/components/pushNotification';



//const CLIENT_ID = '#########################################';

const AppContainer = createAppContainer(TabNav)

export default class App extends React.Component {

  componentDidMount() {
    //GetEventData();
  }

  render () {
    return <AppContainer />
  }
}

// Secret phelPGWM3](xubYDE7335*(
