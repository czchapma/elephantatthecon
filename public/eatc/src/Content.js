import React, { Component } from 'react';
import img from './images/stat.png'; // Tell Webpack this JS file uses this image
import FilteredList from './FilteredList';
import stories from './stories.json';

// import {drawPie} from './demographics.js'
import {createPieCharts} from './pieCharts.js'
import {createRectangleCharts} from './rectangleCharts.js'
import {createBarCharts} from './barCharts.js'
import * as d3pie from "d3pie"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

export class HomeContent extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }

  render(){
    return (
      <div id="content-wrapper">

      <div id="title-wrapper">
    <div id="eatc">ELEPHANT</div>
    <div id="eatc">AT THE CON</div>
    <img id="logo" src="logo.png"/>
  </div>

  <div class="divider"></div>

  <div id="description">
    <p><a class="accent">Elephant At The Con</a> is a campaign by <a class="accent" href="https://uplifttogether.org/">Uplift</a> dedicated to shining a light on convention safety issues by collecting attendee stories and quantitative data on abuse and harassement at conventions with the goal of creating action plans for organizers to improve in the future.</p>
  </div>

  <div class="divider"></div>

  <div id="believe-text">WE BELIEVE...</div>

  <div id="believe-wrapper">
    <div id="believe-box">
    <p>People of all identities have the right to feel safe at conventions.</p></div>
    <div id="believe-box">
    <p>Every convention has its own challenges and areas for improvement.</p></div>
    <div id="believe-box">
    <p>Convention organizers and their communities want to do the right thing.</p></div>
    <div id="believe-box">
    <p> Quantitative data and personal stories will empower convention organizers to make their next event safer for all.</p></div>
  </div>

    </div>
  );
  }
}

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
        <div className="main-date"><strong>2018</strong></div>
        <div className="divider"></div>
        <div className="convention-text-wrapper">
        <div className="main-text">MAGFest (Music and Gaming Festival) is a four day-long event dedicated to
        the appreciation of video game music, gaming of all types, and the gaming community that took place
        in Maryland in January 2018. When asked what keeps them coming back, some said the concerts, some
        said the cosplay, many said the fact that it’s a twenty-four hour show where you could play video
        games at 4 in the morning. A lot of people come with their friends every year. Some have moved away
        and still travel back every year for the festival.</div>
        <div className="main-text">Clearly MAGFest is a special event and an important community for many.
        At Uplift we understand the power of communities and work with organizers like MAGFest to ensure
        that these important communities are safe for everyone. With this in mind, we conducted a survey of
        MAGFest 2018 attendees on safety and inclusion.</div>
        </div>

        </div>

      </div>
    );
  }
}


export class StatContent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    createPieCharts();
    createRectangleCharts();
    createBarCharts();
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

export class StoryContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="main-wrapper">
        <div className="main-title">STORIES</div>
          <FilteredList items = {stories.magfest2018} />
      </div>
    );
  }
}
