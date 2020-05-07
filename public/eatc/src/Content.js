import React, { Component } from 'react';
import img from './images/stat.png'; // Tell Webpack this JS file uses this image
import FilteredList from './FilteredList';
import stories from './stories.json';

// import {drawPie} from './demographics.js'
import {createPieCharts} from './helpers/pieCharts.js'
import {createRectangleCharts} from './helpers/rectangleCharts.js'
import {createBarCharts} from './helpers/barCharts.js'
import * as d3pie from "d3pie"
// import { getData } from './data/cssc_script.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers);
library.add(faBalanceScale);
library.add(faCheckCircle);
library.add(faComment);
library.add(faFileContract);
library.add(faLink);


// Handles the home page
export class HomeContent extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }

  render(){
    return (
      <div id="home-content-wrapper">

      <div id="home-title-wrapper">
      <div id="home-eatc-wrapper">
        <div id="eatc-1">ELEPHANT</div>
        <div id="eatc-2">AT THE CON</div>
      </div>

    <img id="logo" src="../eatclogo.png"/>
  </div>

  <div className="home-divider"></div>

  <div id="home-description">
    <p><a className="accent">Elephant At The Con</a> is a campaign by <a className="accent" href="https://uplifttogether.org/">Uplift</a> dedicated to shining a light on convention safety issues by collecting attendee stories and quantitative data on abuse and harassment at conventions with the goal of creating action plans for organizers to improve in the future.</p>
  </div>

  <div className="home-divider"></div>

  <div id="believe-text">WE BELIEVE...</div>

  <div id="believe-wrapper">
    <div id="believe-box"> <FontAwesomeIcon className="icon" icon="users" />
    <p>People of all identities have the right to feel safe at conventions.</p></div>
    <div id="believe-box"> <FontAwesomeIcon className="icon" icon="balance-scale" />
    <p>Every convention has its own challenges and areas for improvement.</p></div>
    <div id="believe-box"> <FontAwesomeIcon className="icon" icon="check-circle" />
    <p>Convention organizers and their communities want to do the right thing.</p></div>
    <div id="believe-box"> <FontAwesomeIcon className="icon" icon="comment" />
    <p> Quantitative data and personal stories will empower convention organizers to make their next event safer for all.</p></div>
  </div>

    </div>
  );
  }
}

// Handles the main page of a report
// this.props.data contains all necessary data
export class MainContent extends Component {
  constructor(props){
    super(props);
    console.log(this.props)

  }

  render() {
    return (
      <div className="main-wrapper">

        <div className="convention-wrapper">

        <div className="main-title">{this.props.data.name}</div>
        <div className="divider"></div>
        <div className="main-date"><strong>{this.props.data.year}</strong></div>
        <div className="divider"></div>
        <div className="convention-text-wrapper">
        <div className="main-text">{this.props.data.p1}</div>
        <div className="main-text">{this.props.data.p2}</div>
        </div>

        <div id="button-wrapper">
          <div className="convention-button"><a href={this.props.data.conlink}>
          <FontAwesomeIcon className="convention-icon" icon="file-contract"/></a></div>

          <div className="convention-button"><a href={this.props.data.conhome}>
          <FontAwesomeIcon className="convention-icon" icon="link"/></a></div>
        </div>

        </div>

      </div>
    );
  }
}
