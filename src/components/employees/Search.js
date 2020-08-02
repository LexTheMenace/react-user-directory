import React, { Component } from 'react'
import { Consumer } from '../../context'
import axios from 'axios';
import data from './data/data.json'
class Search extends Component {
    state = {
        empName: ''
    }
    

    findEmployee = (dispatch, e) => {
    const chkData = (data) => {
        return data.name === this.state.empName
    }
        e.preventDefault();
        const res = data.filter(chkData)
        if (res === undefined || res.length === 0) {
            console.log("No Results Found...");
            dispatch({
                type: 'NO_RESULTS'
            });
        } else {
            dispatch({
            type: 'SEARCH_EMP',
            payload: res
        })};

        this.setState({empName: ''})
        
        
 /*        data.map(emp => {
            const {name, email, number} = emp
           
            if (name === this.state.empName) {
                res.push(emp)
            }   
            console.log(res)
        dispatch({
            type: 'SEARCH_EMP',
            payload: res
        })
    }) */

    }

    onChange = (e, dispatch) => {
      this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card card-body mb-4 p-4'>
                            <h1 className='display-4 text-center'>
                                <i className='fas fa-search'></i>
                            </h1>
                            <p className='lead text-center'> Search Employees by Name </p>
                            <form onSubmit={this.findEmployee.bind(this, dispatch)}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg'
                                        placeholder='Name...'
                                        name='empName'
                                        value={this.state.empName}
                                        onChange={this.onChange}
                                        />
                                </div>
                                <button 
                                className='btn btn-dark btn-lg btn-block mb-5'
                                type='submit'
                                >
                                    Search Employees
                                </button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
export default Search;