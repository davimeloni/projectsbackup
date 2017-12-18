import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from './Components/Home';
import Router from './Router';

class App extends Component {
    render() {
        return (
            <Router />
        );
    };
}

export default App;