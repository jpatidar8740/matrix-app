import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  ScrollView,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Button
} from 'react-native'
const firebase = require('firebase');
import EventCard from './eventCard'
import Icon from 'react-native-vector-icons/Ionicons';
import DeleteEvent from './deletePopup';
import {GetMatrixEventData, GetBatchEventData} from '../firebase/getEvents';

class ShowEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      event: null,
      venue: null,
      time: null,

      // cardArray because this info will be shown on card so..
      cardArrayMatrix: [],
      cardArrayBatch: [],

      userData: this.props.userData,
      // can be change to no data if no events.
      loadingStatement: 'Loading...',
      noData: true
    }
  }

  //callback to get data from firebase function to component (only matrix events)
  MatrixEventDataHandler = (data) => {
    var cardArray = [];
    data.forEach(element => {
      cardArray.push(element);
    });

    this.setState({cardArrayMatrix: cardArray}, () => {
      this.setState({noData: false});
    }) // pushing new data into array and setting noData to false after complete operation

    console.log(data);
  }

  BatchEventDataHandler = (data) => {
    var cardArray = [];
    data.forEach(element => {
      cardArray.push(element);
    });

    this.setState({cardArrayBatch: cardArray}, () => {
      this.setState({noData: false});
    }) // pushing new data into array and setting noData to false after complete operation

    console.log(data);
  }

  componentDidMount () {
    
    GetMatrixEventData(this.MatrixEventDataHandler); // passing a callback to get data.
    GetBatchEventData('batchEvents/btech/second',this.BatchEventDataHandler);
    
  }

  
  //deleteEventData (id, type) {
  //  const that = this
  //  let path = ''
  //  if (type === 'BR') {
  //    path = 'matrixEvents/' + id // need to change to personal events added by BR.
  //    firebase
  //      .database()
  //      .ref(path)
  //      .remove()
  //    Alert.alert('Deleted Succesfully!')
  //  } else {
  //    path = 'matrixEvents/' + id
  //    firebase
  //      .database()
  //      .ref(path)
  //      .remove()
  //    Alert.alert('Deleted Succesfully!')
  //  }
  //  console.log(id)
  //}

  render () {
    let p = null
    if (!this.state.noData) {
      if (this.state.cardArrayMatrix.length || this.state.cardArrayBatch.length) {
        p = (
          <ScrollView>
            {this.state.cardArrayMatrix.map((event, index) => {
              return (
                <EventCard
                  key={event.id}
                  event={event.name}
                  venue={event.venue}
                  date={event.date}
                  detail={event.detail}
                  id={event.id}
                  is_imp={false}
                  event_type='Matrix'
                  ondelete={this.deleteEventData}
                  navigate={this.props.navigate}
                />
              )
            })}

            {/* Batch Events */}

            {this.state.cardArrayBatch.map((event, index) => {
              return (
                <EventCard
                  key={event.id}
                  event={event.name}
                  venue={event.venue}
                  date={event.date}
                  detail={event.detail}
                  id={event.id}
                  is_imp={false}
                  event_type='Matrix'
                  ondelete={this.deleteEventData}
                  navigate={this.props.navigate}
                />
              )
            })}

          </ScrollView>
        )
      } else {
        p = (
          <Text style={{ alignSelf: 'center', fontFamily: 'Lato-Regular' }}>
            No Events
          </Text>
        )
      }
    } else {
      p = (
        <Text style={{ alignSelf: 'center', fontFamily: 'Lato-Regular' }}>
          Loading...
        </Text>
      )
    }

    return <ScrollView style={{marginBottom: 60}}>{p}</ScrollView>
  }
}

const Header = props => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text
        style={{
          fontFamily: 'Reb',
          fontSize: 25,
          padding: 5,
          alignSelf: 'center',
          color: '#000000'
        }}
      >
        Events
      </Text>
    </View>
  )
}

export default class Event extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hostel: ''
    }
  }

  addEventNav = () => {
    this.props.navigation.navigate('AddEvent')
  }

  static navigationOptions = {
    headerTitle: <Header />
    /* No more header config here! */
  }

  render () {
    return (
      <View>
        <ScrollView>
          <ShowEvent navigate={this.props.navigation.navigate}/>
        </ScrollView>
        <TouchableWithoutFeedback
          onPress={this.addEventNav}
        >
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                right: 20,
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#f0f0f0',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
                borderWidth: 1,
                borderColor: '#000000',
              }}
            >
              <Icon name='md-add' size={25} color='#000000' />
            </View>
          </TouchableWithoutFeedback>
         
      </View>
    )
  }
}
