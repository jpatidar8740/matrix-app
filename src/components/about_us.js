
import React from 'react';
import { View, Text, Image, ScrollView, TouchableNativeFeedback, Animated, Linking } from 'react-native';
import { Card, Icon, Avatar, ListItem, leftAvatar } from 'react-native-elements';


const Title = props => {
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
          About Matrix
        </Text>
      </View>
    )
  }

const Header = () => {
    return (
        <View style={{ marginTop: 20, paddingLeft: 10, }}>
            <Text style={{ fontFamily: 'Rb', alignSelf: 'center', fontSize: 30, color: '#000000' }}>MATRIX</Text>
            <Text style={{ fontFamily: 'Rb', fontSize: 15, marginLeft: 10, color: '#000000' }}>The student body of Department of Mathematics, IIT Guwahati</Text>
        </View>
    );
}

class WhatIsMatrix extends React.Component {



    render() {
        return (
            <View style={{ marginTop: 30, paddingLeft: 10, }}>
                <Text style={{ alignSelf: 'center', fontFamily: 'Rb', fontSize: 20, color: '#000000' }}>WHAT IS MATRIX, EXACTLY?</Text>
                <Text style={{ fontFamily: 'Rm', fontSize: 15, color: '#000000' }}>Matrix exists to provide a channel of
                    interaction between students and the outside
                    world, which includes professors, alumni and
                     other institutions.</Text>
                <Text style={{ marginTop: 20, alignSelf: 'center', fontFamily: 'Rb', fontSize: 35, color: '#000000' }}>OUR DOMAINS</Text>
            </View>
        );
    }
}

const Mathematics = () => {
    return (
        <Card
            containerStyle={{ borderColor: '#000000', borderWidth: 1, borderRadius: 5, elevation: 5 }} containerStyle={{ borderColor: '#1B2631', borderWidth: 1, borderRadius: 5 }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'Rb', paddingLeft: 15, fontSize: 20, color: '#000000'  }}>MATHEMATICS</Text>
            </View>
            <Text style={{ fontFamily: 'Rm', color: '#000000' }}>
                Matrix is responsible for various events and lecture series related to Mathematics.
                This ensures full development of students as they learn about the real life applications
                of their theoretical knowledge which they have gained during their curriculum. Lecture
                series by some of the greatest minds in the world, allow our students to interact and
                intrigue with such immensely knowledgeable people and strive to achieve research breakthroughs.
                Various Events such as LaTeX workshops and other relevant resourceful workshops help our research
                community to present a fruitful publication of their research projects. Matrix is continuously planning
                to conduct more and more such workshops and lectures on off-syllabi topics such as Cryptography etc.
            </Text>
        </Card>
    );
}

const ComputerScience = () => {
    return (
        <Card
            containerStyle={{ borderColor: '#000000', borderWidth: 1, borderRadius: 5 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'Rb', paddingLeft: 15, fontSize: 20, color: '#000000'  }}>COMPUTER SCIENCE</Text>
            </View>
            <Text style={{ fontFamily: 'Rm', color: '#000000' }}>
                Coding skills are now essential part of professional and research domains.
                Matrix tries to conduct events such as Coding Competitions and Hackathons
                to encourage students to hone their coding skills. For the same purpose,
                we try to have various workshops on web development, network management,
                understanding our operating system etc. too.
            </Text>
        </Card>
    );
}

const Finance = () => {
    return (
        <Card
            containerStyle={{ borderColor: '#000000', borderWidth: 1, borderRadius: 5, marginBottom: 10 }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'Rb', paddingLeft: 15, fontSize: 20, color: '#000000' }}>FINANCE</Text>
            </View>
            <Text style={{ fontFamily: 'Rm', color: '#000000' }}>
                Matrix tries to conduct events such as Virtual Stock Market (VSM), which is a
                very innovative idea for understanding the stock exchange. Matrix has plans
                for conducting various workshops such as Portfolio Management to help the community
                by giving an exposure of the outside exchange techniques.
            </Text>
        </Card>
    );
}

export default class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedback: false
        }
    }

    static navigationOptions = {
        headerTitle: <Title />
        /* No more header config here! */
      }


    render() {

        let screen = (<Text style={{ alignSelf: 'center', justifyContent: 'center' }}>Loading...</Text>);

        screen = (
            <ScrollView stickyHeaderIndices={[0]}>
                
                <Header />
                <WhatIsMatrix />
                <Mathematics />
                <ComputerScience />
                <Finance />

                <TouchableNativeFeedback
                    onPress={() => {
                        Linking.openURL('mailto:matrix.iitguwahti@gmail.com?subject=App Feedback')

                    }}
                >
                    <Animated.View
                        style={[
                            {width: '80%', height: 30, backgroundColor: '#000000', marginLeft: '10%', marginBottom: 10, justifyContent: 'center'},
                        ]}
                    >
                        <Text
                            style={{color: '#ffffff', fontFamily: 'Rb', alignSelf: 'center'}}
                        >Leave us feedback.</Text>
                    </Animated.View>
                </TouchableNativeFeedback>
            </ScrollView>
        );
        

        return (
            <ScrollView>
                {screen}
            </ScrollView>
        );
    }
}