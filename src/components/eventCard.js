import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class EventCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }

        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.animate();
    }

    animate = () => {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 3,
                duration: 800,
                easing: Easing.bounce
            }
        ).start()
    }

    deleteEvent = () => {
        // firebase function to delete an event.
        this.props.navigate('DeleteEvent', {
            id: this.props.id,
            nav: this.props.navigate
        });
    }

    render() {

        const interpolateVar = this.animatedValue.interpolate({
            inputRange: [0, 1, 3],
            outputRange: [0, 0.5, 1]
        })

        const animatStyle = {
            transform: [
                {
                    scale: interpolateVar
                }
            ]
        }

        var post_by = this.props.event_type==='Matrix' ? 'Matrix':'Branch Representative';

        var color_dot = this.props.is_imp ?  '#CD6155': '#48C9B0';

        return(
            
            <Animated.View style={[Styles.card_container, animatStyle]}>
                
                <View style={Styles.card_header}>

                    <View style={{height: 10, width: 10, borderRadius: 5, backgroundColor: color_dot, margin: 6}}>

                    </View>

                    <Text style={[Styles.text_normal, { fontSize: 25, alignSelf: 'center'}]}>
                        {this.props.event}
                    </Text>

                    <Icon
                        onPress={this.deleteEvent} 
                        name="trash-o"
                        size={20}
                        color='#CD6155'
                        style={{margin: 3}}
                    />
                </View>

                <View 
                    style={{backgroundColor: '#979A9A', height: 1, width: '80%', marginLeft: '10%'}}>
                </View>
                
                <View style={Styles.time_venue}>
                    <Text style={[Styles.text_normal, {fontSize: 12}]}>{this.props.date}</Text>
                    <Text style={[Styles.text_normal, {fontSize: 12}]}>{this.props.venue}</Text>
                </View>

                <Text style={Styles.text_small}>{'Details: '+this.props.detail}</Text>

                <View style={Styles.post_by}>
                    <Text style={[Styles.text_small, {color: '#76D7C4'}]}>{'- '+ post_by}</Text>
                </View>
                
            </Animated.View>
            
        );
    }
}

const Styles = StyleSheet.create({
    card_container: {
        position: 'relative',
        marginHorizontal: '5%',
        marginVertical: 10,
        backgroundColor: '#000000',
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FDFEFE',
        //elevation: 10,
    },
    time_venue: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    text_normal: {
        color: '#ecf0f1',
        fontFamily: 'Rbl',
        margin: 2
    },
    text_small: {
        color: '#ecf0f1',
        fontFamily: 'Rm',
        fontSize: 12,
        margin: 2 
    },
    post_by:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 5
    },
    card_header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})

// 15 - 17 Basically a line