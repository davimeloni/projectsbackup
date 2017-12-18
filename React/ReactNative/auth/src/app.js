import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './Components/Common';
import LoginForm from './Components/LoginForm';


export default class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDWqfY3o9PqX_0Qf_A5_xB0oR14SMAtBMU',
            authDomain: 'react-native-auth-d2071.firebaseapp.com',
            databaseURL: 'https://react-native-auth-d2071.firebaseio.com',
            projectId: 'react-native-auth-d2071',
            storageBucket: 'react-native-auth-d2071.appspot.com',
            messagingSenderId: '270711970207'
          });

          firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ loggedIn: true });
                } else {
                    this.setState({ loggedIn: false });
                }
          });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPressMethod={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <CardSection>
                        <Spinner />
                    </CardSection>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}
