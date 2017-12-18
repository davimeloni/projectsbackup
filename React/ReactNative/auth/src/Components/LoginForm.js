import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './Common';

export default class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }

    onButtonPressed() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch((e) => {
                        console.log(e);
                        console.log({email});
                        console.log({password});
                        this.setState({ error: 'Authentication Failed.', loading: false });
                    });
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner sizeSpinner="small" />
        }

        return (
            <Button onPressMethod={this.onButtonPressed.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email" 
                        value={this.state.email}
                        onChangeText={email => this.setState({email})} 
                        />
                </CardSection>
                
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password" 
                        value={this.state.password}
                        onChangeText={password => this.setState({password})} 
                        />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}