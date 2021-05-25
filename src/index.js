import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './App';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Resume from './Resume'

ReactDOM.render(
    <HashRouter>
      <Switch>
        <Route path='/' component={ App } exact />
        <Route path='/resume' component={ Resume } />
      </Switch>
    </HashRouter>,
  document.getElementById('root')
);

