import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddSubject from './components/AddSubject/AddSubject';
import Evaluate from './components/Evaluate/Evaluate';
import AddQuestions from './components/AddQuestions/AddQuestions';
import AddStudent from './components/AddStudent/AddStudent';
import Validate from './components/Validation/Validate';
import GlobalContext from './context/GlobalContext';

const App = () => {
  return (
    <GlobalContext>
      <div className="App">
        <Router>
          <div style={{ display: 'flex' }}>
            <Dashboard />
            <Switch>
              <Route path="/add-que" component={AddQuestions} />
              <Route path="/add-subject" component={AddSubject} />
              <Route path="/eval" component={Evaluate} />
              <Route path="/add-student" component={AddStudent} />
              <Route exact path="/" component={Home} />
              <Route
                path="/validate/:id/:code"
                render={props => <Validate {...props} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </GlobalContext>
  );
};

export default App;
