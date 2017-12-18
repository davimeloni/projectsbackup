import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './Common';

class LessonItem extends Component {
    
    render() {
        const {Lesson_num} = this.props.item;

        return(
            <CardSection>
                <Text>
                    Lesson: {Lesson_num}
                </Text>
            </CardSection>
        );
    };
}

export default LessonItem;