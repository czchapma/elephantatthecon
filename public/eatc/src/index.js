import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, PrivateRoute, Link, Redirect } from "react-router-dom";
import './style/index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

import MAG20 from './conventions/magfest20.js';
import MAG19 from './conventions/magfest19.js';
import LEAKY18 from './conventions/leakycon18.js';
import VID18 from './conventions/vidcon18.js';
import MAG18 from './conventions/magfest18.js';
import TEKKO17 from './conventions/tekko17.js';
import NERD17 from './conventions/nerdcon17.js';
import SurveyContent from './survey.js';

const routing = (
    <Router>
      <div>

        {/* Routing for each sub-url */}
        <Route path="/" component={App} exact />
        <Route path="/magfest20" component={MAG20}/>
        <Route path="/magfest19" component={MAG19}/>
        <Route path="/leakycon18" component={LEAKY18}/>
        <Route path="/vidcon18" component={VID18}/>
        <Route path="/magfest18" component={MAG18}/>
        <Route path="/tekko17" component={TEKKO17}/>
        <Route path="/nerdcon17" component={NERD17}/>
        <Route path="/survey" component={SurveyContent}/>


        {/* Meta tags for social preview */}
        <title>Elephant at the Con | Uplift - Online Communities Against Sexual Violence</title>
        <meta id="meta-description" name="description" content="Elephant At The Con is a campaign by Uplift dedicated to shining a light on convention safety issues by collecting attendee stories and quantitative data on abuse and harassment at conventions with the goal of creating action plans for organizers to improve in the future."/>
        <meta id="og-description" property="og:description" content="Elephant At The Con is a campaign by Uplift dedicated to shining a light on convention safety issues by collecting attendee stories and quantitative data on abuse and harassment at conventions with the goal of creating action plans for organizers to improve in the future."/>
        <meta id="og-title" property="og:title" content="Elephant at the Con: Convention Safety Research by Uplift"/>
        <meta id="og-image" property="og:image" content="home/eatclogo.png"/>

      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
