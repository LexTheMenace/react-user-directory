import React from 'react'
import {Link} from 'react-router-dom';

const Employee = (props) => {
    const { employee } = props;
    return (    
        <tr>
            <th scope="row">{employee.id}</th>
            <td><Link to={`data/employee/${employee.id}`}>{employee.name}</Link></td>
            <td>{employee.number}</td>
            <td>{employee.email}</td>
        </tr>
    )
}
export default Employee;