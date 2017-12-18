import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Home from './Components/Home';
import Course from './Components/Course';
import Lesson from './Components/Lesson';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene 
                    title="Home"
                    key="home"
                    component={Home}
                    rightTitle="Go To Course"
                    onRight={() => Actions.course()}
                />
                <Scene 
                    title="Course"
                    key="course"
                    component={Course}
                    rightTitle="Go to Lesson"
                    onRight={() => Actions.lesson()}
                />
                <Scene 
                    title="Lesson"
                    key="lesson"
                    component={Lesson}
                />
            </Scene>
        </Router>
    );
}

export default RouterComponent;