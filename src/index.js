import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/upload';

ReactDOM.render(( <Router>
  <Switch>
    <Route exact path="/" component={Home}/>
    
 </Switch>
  </Router>), document.getElementById('app'));
