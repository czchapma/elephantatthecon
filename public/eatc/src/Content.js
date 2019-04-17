import React, { Component } from 'react';
import img from './images/stat.png'; // Tell Webpack this JS file uses this image
import FilteredList from './FilteredList';
import stories from './stories.json';

import {drawPie} from './demographics.js'
import * as d3pie from "d3pie"

export class MainContent extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="main-title">{this.props.data.name}</div>
        <div className="main-date"><strong>- 2018 -</strong></div> 
        <div className="main-text">MAGFest (Music and Gaming Festival) is a four day-long event dedicated to the appreciation of video game music, gaming of all types, and the gaming community that took place in Maryland in January 2018. When asked what keeps them coming back, some said the concerts, some said the cosplay, many said the fact that it’s a twenty-four hour show where you could play video games at 4 in the morning. A lot of people come with their friends every year. Some have moved away and still travel back every year for the festival.</div>
        <div className="main-text">Clearly MAGFest is a special event and an important community for many. At Uplift we understand the power of communities and work with organizers like MAGFest to ensure that these important communities are safe for everyone. With this in mind, we conducted a survey of MAGFest 2018 attendees on safety and inclusion.</div>
      </div>
    );
  }
}

export class StatContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="main-wrapper">
        <h>STATISTICS</h> <br/>
         <br/>
        <img src={img}/>
      </div>
    );
  }
}

export class TestContent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    drawPie();
  }
  render() {
    return (
      <div className="main-wrapper">
        <div id="genderChart"></div>

         <br/>
         <div className="row">
           <div className="column stat-col">
             <div className="stat-title">STATISTICS</div>
              <div id="chart1"></div> 
              <div id="chart2"></div> 
           </div>
           <div className="column demo-col">
              <div className="stat-title">DEMOGRAPHICS</div> 
            <div id="chart3"></div> 
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
