import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers';
import ReduxThunk from 'redux-thunk';
import * as firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import Router from './Router';

class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: "AIzaSyBFAch1Pxnr0TRrZnh6fgHLcc3j4ZFv9IA",
            authDomain: "manager-ddb77.firebaseapp.com",
            databaseURL: "https://manager-ddb77.firebaseio.com",
            projectId: "manager-ddb77",
            storageBucket: "",
            messagingSenderId: "909050985155"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;