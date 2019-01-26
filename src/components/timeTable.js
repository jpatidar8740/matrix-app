import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AppState,
  ScrollView,
  Modal,
  TouchableHighlight,
  Animated,
  Easing
} from 'react-native'
import Card from './timeTableCard'
import Selector from './daySelector'

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
        Time Table
      </Text>
    </View>
  )
}

class TimeTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
    this.animatedVal = new Animated.Value(0)
  }

  static navigationOptions = {
    headerTitle: <Header />
    /* No more header config here! */
  }

  animate = () => {
    this.animatedVal.setValue(0)
    Animated.timing(this.animatedVal, {
      toValue: 3,
      duration: 600,
      easing: Easing.linear
    }).start()
  }

  render () {
    const intplt = this.animatedVal.interpolate({
      inputRange: [1, 2, 3],
      outputRange: [30, 60, 90]
    })

    return (
      <ScrollView>
        <Selector />
        <ScrollView style={style.sclv}>
          <Card lecture='MA222' venue='1104' time='09:00-9:55' />
          <Card lecture='MA222' venue='1104' time='09:00-9:55' />
          <Card lecture='MA222' venue='1104' time='09:00-9:55' />
          <Card lecture='MA222' venue='1104' time='09:00-9:55' />
          <Card lecture='MA222' venue='1104' time='09:00-9:55' />
        </ScrollView>
      </ScrollView>
    )
  }
}

const style= StyleSheet.create({
    sclv: {
        marginTop: 20
    }
})

export default TimeTable
