import React, { Component } from 'react'
import Employees from '../employees/Employees'
import Search from '../employees/Search'
import data from '../employees/data/data.json'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data
        }
        this.sortBy = this.sortBy.bind(this)
    }

    sortBy(key) {
        console.log(data);
        switch (key) {
            case 'name':
                return this.setState({
                    data: data.sort((a, b) => {
                        var nameA = a.name.toUpperCase(); 
                        var nameB = b.name.toUpperCase(); 
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }

                        // names must be equal
                        return 0;
                    })
                })
            case 'number':
                return this.setState({
                    data: data.sort((a, b) => a.number - b.number)
                })
        }

        this.setState({
            data: data.sort((a, b) => a.number - b.number)
        })
        console.log(data);
    }
    render() {
        return (
            <React.Fragment>
                <Search />
                <Employees
                    sortBy={this.sortBy}
                    employees={this.state.data}
                />
            </React.Fragment>
        )
    }

}
export default Index;