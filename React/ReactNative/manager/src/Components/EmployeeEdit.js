import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';
import { employeeUpdate, saveEmployee, deleteEmployee } from '../Actions';
import { Card, CardSection, Button, Confirm } from './Common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.saveEmployee({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccepting() {
        const { uid } = this.props.employee;

        this.props.deleteEmployee({ uid });
    }

    onDeclining() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPressMethod={this.onButtonPress.bind(this)}>
                        Save Changes
                </Button>
                </CardSection>

                <CardSection>
                    <Button onPressMethod={this.onTextPress.bind(this)} >
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPressMethod={() => this.setState({ showModal: !this.state.showModal })} >
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccepting.bind(this)}
                    onDecline={this.onDeclining.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, saveEmployee, deleteEmployee })(EmployeeEdit);
