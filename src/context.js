import React, { Component } from 'react'
import Fakerator from 'fakerator'
import axios from 'axios';
import data from './components/employees/data/data.json'
var fakerator = Fakerator();

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_EMP':
        return {
            ...state, 
            employee_list: action.payload,
            heading: 'Search Results'
        };
        case 'NO_RESULTS':
            return {
                ...state, 
                employee_list: data,
                heading: 'All Employees'
            };
        default:
            return state;
    }
}
export class Provider extends Component {
    state = {
        employee_list: [],
        heading: 'All Employees',
        dispatch: action => this.setState(state => reducer(state, action))
    }

    //Load JSON
    componentDidMount() {
        this.setState({employee_list: data})
    }
    
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer