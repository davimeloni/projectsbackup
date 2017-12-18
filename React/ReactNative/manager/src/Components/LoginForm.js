import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from "../Actions";
import {Card, CardSection, Input, Button, Spinner} from './Common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    doLogin() {
        const { email, password } =this.props;

        this.props.loginUser({email, password});
    }

    renderLoginButton() {
        if (this.props.loading) {
            return <Spinner sizeSpinner="large" />;
        }

        return (
            <Button onPressMethod={this.doLogin.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="E-mail"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="********"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderLoginButton()}
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

const mapStateToProps = ({auth}) => {

    const { email, password, error, loading } = auth;

    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser})(LoginForm);

