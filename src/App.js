import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index'
import { Provider } from './context'
import EmployeeDetails from './components/employees/EmployeeDetails';

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path='/data/employee/:id' component={EmployeeDetails}/>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
