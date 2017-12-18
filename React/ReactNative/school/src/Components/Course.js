import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { CardSection, Card, Button } from './Common';
import CourseItem from './CourseItem';

class Course extends Component {

    state = { albums: [], courseLevels: [] };

    componentDidMount() {
        /*fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            this.setState({ albums: data })
            
        });*/

        this.setState({ courseLevels: courseLevelsArr });
        //console.log(this.state);
    }

    _renderItem({item}) {
        return <CourseItem item={item} /> 
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <Text>
                    Course
                </Text>
                <Text>
                    Course Level 1
                </Text>
                <Text>
                    Course Level 2
                </Text>
                <Text>
                    Course Level 3
                </Text>
                <FlatList 
                    data={this.state.courseLevels}
                    renderItem={this._renderItem}
                />
            </ScrollView>
        );
    };
}

const courseLevelsArr = [
    {
        "level": 1,
        "Lessons": [
            {
                "Lesson_num": 1,
            },
            {
                "Lesson_num": 2,
            },
            {
                "Lesson_num": 3,
            },
            {
                "Lesson_num": 4,
            },
            {
                "Lesson_num": 5,
            }
        ]
    },
    {
        "level": 2,
        "Lessons": [
            {
                "Lesson_num": 1,
            },
            {
                "Lesson_num": 2,
            },
            {
                "Lesson_num": 3,
            },
            {
                "Lesson_num": 4,
            },
            {
                "Lesson_num": 5,
            }
        ]
    },
    {
        "level": 3,
        "Lessons": [
            {
                "Lesson_num": 1,
            },
            {
                "Lesson_num": 2,
            },
            {
                "Lesson_num": 3,
            },
            {
                "Lesson_num": 4,
            },
            {
                "Lesson_num": 5,
            }
        ]
    },
    {
        "level": 4
    },
    {
        "level": 5
    },
    {
        "level": 6
    },
    {
        "level": 7
    },
    {
        "level": 8
    },
    {
        "level": 9
    },
]

export default Course;