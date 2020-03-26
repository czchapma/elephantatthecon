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

        <title>Elephant at the Con</title>
        <meta id="og-description" property="og:description" content="Elephant At The Con is a campaign by Uplift dedicated to shining a light on convention safety issues by collecting attendee stories and quantitative data on abuse and harassment at conventions with the goal of creating action plans for organizers to improve in the future."/>
        <meta id="og-title" property="og:title" content="Convention Safety Research by Uplift"/>
        <meta id="og-image" property="og:image" content="home/eatclogo.png"/>

      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
