import React, { Component } from 'react';
import { View, Text, ProgressBarAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card, Button } from './Common';

class Home extends Component {
    
    goToClass() {
        Actions.lesson();
    }

    goToCourse() {
        Actions.course();
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Text>
                            Picture, Name
                        </Text>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text>
                            Rank, Level, Progress Bar
                        </Text>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Button onPressMethod={this.goToClass.bind(this)}>
                            Go to next class
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPressMethod={this.goToCourse.bind(this)}>
                            Go to course list
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    };
}

export default Home;