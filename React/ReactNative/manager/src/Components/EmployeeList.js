import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { fetchEmployees } from '../Actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.fetchEmployees();
    }

    renderItem({ item }) {
        return <ListItem employee={item} />
    }

    render() {
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderItem}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);