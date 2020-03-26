import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {HomeContent} from './Content.js';
import {SurveyContent} from './survey.js';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li> */}
          </ul>
        </nav>

        <Route path="/home" exact component={HomeContent} />
        <Route path="/survey" exact component={SurveyContent} />
        {/* <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
      </div>
    </Router>
  );
}

ReactDOM.render(routing, document.getElementById('root'));
