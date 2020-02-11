import React, { Component } from 'react';
import img from './images/stat.png'; // Tell Webpack this JS file uses this image
import FilteredList from './FilteredList';
import stories from './stories.json';

import data from './data/data.json';
import tekko17 from './data/2017_tekko.json'
import nerdcon17 from './data/2017_nerdcon.json'
import vidcon18 from './data/2018_vidcon.json'
import magfest18 from './data/2018_magfest.json'
import leaky18 from './data/2018_leakycon.json'
import magfest19 from './data/2019_magfest.json'

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
    <p><a className="accent">Elephant At The Con</a> is a campaign by <a className="accent" href="https://uplifttogether.org/">Uplift</a> dedicated to shining a light on convention safety issues by collecting attendee stories and quantitative data on abuse and harassement at conventions with the goal of creating action plans for organizers to improve in the future.</p>
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

// Handles the statistics/demographics page of a report
// this.props.data contains all necessary data
export class StatContent extends Component {
  constructor(props){
    super(props);
    this.currentdata = {};
  }

  componentDidMount() {
      if (this.props.data.name === "magfest19"){
        this.currentdata = magfest19;
      }

    if (this.props.data.name === "leakycon18"){
      this.currentdata = leaky18;
    }

    if (this.props.data.name === "magfest"){
      this.currentdata = magfest18;
    }

    if (this.props.data.name === "tekko"){
      this.currentdata = tekko17;
    }

    if (this.props.data.name === "nerdcon"){
      this.currentdata = nerdcon17;
    }

    if (this.props.data.name === "geekycon"){
      //this.currentdata = geekycon16;
    }

    if (this.props.data.name === "vidcon18"){
      this.currentdata = vidcon18;
    }



    this.drawChart();
  }

  drawChart() {
    // each of these functions draws their respective chart; check js files
    // for specifics
    createPieCharts(this.currentdata);
    createRectangleCharts(this.currentdata);
    createBarCharts(this.currentdata);
  }


  render() {

    return (
      <div className="main-wrapper">

      <div id="wrapper">

        <div id="statistics-column">
            <div class="wrapper-title">Statistics</div>
            <div id="statistics-chart-container">
            <div id="rectangle-chart-container">
              <div class="chart-container"><p>ALWAYS</p> <svg id="rectangle-chart-1" class="rectangle-chart"></svg> <p>NEVER</p></div>
              <div class="chart-container"><p>ALWAYS</p> <svg id="rectangle-chart-2" class="rectangle-chart"></svg> <p>NEVER</p></div>
              <div class="chart-container"><p>ALWAYS</p> <svg id="rectangle-chart-3" class="rectangle-chart"></svg> <p>NEVER</p></div>
            </div>
             <div id="bar-chart-container">
              <svg id="bar-chart-1" class="bar-chart"></svg>
              <svg id="bar-chart-2" class="bar-chart"></svg>
              <svg id="bar-chart-3" class="bar-chart"></svg>
            </div>
            </div>
        </div>
        <div id="demographics-column">
            <div class="wrapper-title">Demographics</div>
            <div id="demographics-chart-container">
              <div id="genderPieChart"></div>
              <div id="racePieChart"></div>
              <div id="sexualityPieChart"></div>
            </div>
        </div>
      </div>

      </div>
    );
  }
}

// Handles the story page of a report
// this.props.data contains all necessary data
export class StoryContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    //check FilteredList for specifics
    let category = this.props.data.name + this.props.data.year;
    console.log(category);
    return (
      <div className="main-wrapper">
        <div className="wrapper-title">STORIES</div>
          <FilteredList items = {stories[category]} />
      </div>
    );
  }
}
