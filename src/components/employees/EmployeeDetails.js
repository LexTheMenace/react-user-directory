import React, { Component } from 'react'
import Employee from './Employee'

class EmployeeDetails extends Component {
    state = {
        employee: {}
    }

    render() {
        console.log(this);
        return (
            <div>
                <h1>Employee Details</h1>
            </div>
        )
    }
}

export default EmployeeDetails;