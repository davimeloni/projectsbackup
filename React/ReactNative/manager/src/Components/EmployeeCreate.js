import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, createEmployee } from '../Actions';
import { Card, CardSection, Button } from './Common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.createEmployee({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        // console.log(this.props.employee);

        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPressMethod={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, createEmployee })(EmployeeCreate);