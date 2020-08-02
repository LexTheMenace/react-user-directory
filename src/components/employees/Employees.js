import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Employee from './Employee'
import * as ReactBootstrap from 'react-bootstrap'
import '../../App.css';

class Employees extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value);
                    const { employee_list, heading } = value;
                    if (employee_list === undefined || employee_list.length === 0) {
                        return <Spinner />
                    } else {
                        console.log(this.props.employees);
                        return (
                            <React.Fragment>
                                <h3 className='text-center mb-4'>{heading}</h3>
                                <ReactBootstrap.Table className='ReactBootstrap.Table'>
                                    <thead>
                                        <tr>
                                            <th scope="col">ID#</th>
                                            <th scope="col">Name <button className='btn btn-dark' onClick={() => this.props.sortBy('name')}> <i className="fa fa-arrow-down"></i></button></th>
                                            <th scope="col">Number <button className='btn btn-dark' onClick={() => this.props.sortBy('number')}> <i className="fa fa-arrow-down"></i></button></th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employee_list.map(employee =>
                                            <Employee key={employee.id} employee={employee} />
                                        )}
                                    </tbody>
                                </ReactBootstrap.Table>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Employees;
