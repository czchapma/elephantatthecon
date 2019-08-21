import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, PrivateRoute, Link, Redirect } from "react-router-dom";
import './style/index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import SurveyContent from './survey.js';

const routing = (
    <Router>
      <div>
        {/* <Redirect from="/" to="/home"/> */}
        <Route path="/home" component={App} />
        <Route path="/survey" component={SurveyContent} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
