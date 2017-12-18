import React, { Component } from 'react';
import { Text, TouchableOpacity, View, FlatList, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './Common';
import LessonItem from './LessonItem';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class CourseItem extends Component {

    state = {selectedLevel: null}

    _renderItem() {
        console.log("_renderItem");
        //return <LessonItem item={item} />
    }

    renderLessons() {
        //console.log(this.props.item);
        //this.setState({selectedLevel: this.props.item.level});
    

        console.log(this.props.item.level);
        
        console.log(this.state.selectedLevel);
        //console.log('ta chegando aqui pelo menos?');

        if (this.state.selectedLevel === this.props.item.level) {
            return <FlatList
                data={this.props.item}
                renderItem={({item}) => <LessonItem item={item} />}
            />
        }
    };

    useless() {
        //this.selectedLevel = ;
        this.setState({selectedLevel: this.props.item.level})
    }

    render() {
        const { level } = this.props.item;

        return (
            <TouchableOpacity
                onPress={this.useless.bind(this)}
            >
                <CardSection>
                    <Text>
                        Level: {level}
                    </Text>

                   {this.renderLessons()} 
                </CardSection>

                
            </TouchableOpacity>
        );
    };
}

export default CourseItem;