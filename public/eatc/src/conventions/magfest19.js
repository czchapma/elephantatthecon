import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import logo from '../logo.svg';
import '../style/App.scss';
import '../style/responsive.css';
import {toggleDropDown} from '../helpers/responsive.js'

import Header from '../Header.js';

import img from '../images/stat.png'; // Tell Webpack this JS file uses this image
import FilteredList from '../FilteredList';

import stories from '../stories.json';
import magfest19 from '../data/2019_magfest.json'

import {createPieCharts} from '../helpers/pieCharts.js'
import {createRectangleCharts} from '../helpers/rectangleCharts.js'
import {createBarCharts} from '../helpers/barCharts.js'
import * as d3pie from "d3pie"

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



class ReportScroll extends Component {
  render() {
    return (
      <div className="scroll-wrapper">
        <li className="scroll-item" ><a  href="#main" value="main" onClick= {this.props.onClickFunc}>Main</a></li>
        <li className="scroll-item"><a  href="#stats" value="stats" onClick= {this.props.onClickFunc}>Stats</a></li>
        <li className="scroll-item"><a  href="#stories" value="stories" onClick= {this.props.onClickFunc}>Stories</a></li>
      </div>
    );
  }
}


class ReportContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let content;



    if(this.props.mode == "main"){
      content = <MainContent/>
    }
    else if(this.props.mode == "stat"){
      content = <StatContent/>
    }
    else if(this.props.mode == "story"){
      content = <StoryContent/>
    }
    else{
      //content = "Something is wrong with rendering ReportContent"
      content = <MainContent/>
    }

    return (
      <div className="content-wrapper">
        {content}
      </div>
    );
  }
}



class Report extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'main',
      contentData: 'Main Content',
      scrollData: 'Scroll Content'
    }
  }

  handleNewContent(e){
    if(e.target.getAttribute("value") == "main"){
      this.setState(prevState => ({
        rmode: 'main',

      }));
    }
    else if(e.target.getAttribute("value") == "stats"){
      this.setState(prevState => ({
        rmode: 'stat',

      }));
    }
    else if(e.target.getAttribute("value") == "stories"){
      this.setState(prevState => ({
        rmode: 'story',

      }));
    }
  }


  render() {
    // We pass the handle new content function into ReportScroll,
    // this will handle the changing of ReportContent's data
    return (
      <div className="report-wrapper">
        <ReportScroll onClickFunc = {this.props.handleNewContent}/>
        <ReportContent mode ={this.props.rmode}/>
      </div>
    );
  }
}




class MainContent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="main-wrapper">

        <div className="convention-wrapper">

        <div className="main-title">magfest</div>
        <div className="divider"></div>
        <div className="main-date"><strong>2019</strong></div>
        <div className="divider"></div>
        <div className="convention-text-wrapper">
        <div className="main-text">MAGFest (Music and Gaming Festival) is an event dedicated to the appreciation of video
        game music, gaming of all types, and the gaming community. The event, which took place in Maryland
        in early January 2019, is a twenty-four-hour show offering arcades, tabletop, LAN, music, speakers,
        and more.</div>
        <div className="main-text">At Uplift we understand the power of communities and work with organizers like MAGFest to ensure
        that these important communities are safe for everyone. With this in mind, here is our survey of the
        MAGFest 2019 attendees on safety and inclusion.</div>
        </div>

        <div id="button-wrapper">
          <div className="convention-button"><a href="https://medium.com/uplifttogether/the-elephant-at-magfest-2019-4e7200dbf00e">
          <FontAwesomeIcon className="convention-icon" icon="file-contract"/></a></div>

          <div className="convention-button"><a href="https://super.magfest.org/">
          <FontAwesomeIcon className="convention-icon" icon="link"/></a></div>
        </div>

        </div>

      </div>
    );
  }
}

class StatContent extends Component {
  constructor(props){
    super(props);
    this.currentdata = {};
  }

  componentDidMount() {

    this.currentdata = magfest19;

    this.drawChart();
  }

  drawChart() {
    // each of these functions draws their respective chart; check js files
    // for specifics
    //console.log(this.currentData);
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
    let category = "magfest192019";

    if (stories.hasOwnProperty(category)) {
        return (
          <div className="main-wrapper">
            <div className="wrapper-title">STORIES</div>
              <FilteredList items = {stories[category]} />
          </div>
        );
    } else {
        return (
          <div>
            Our apologies, the stories of this convention have not been uploaded. Please come back later. Thank you.
          </div>
        );
    }

  }
}

export class MAG19 extends Component {
    constructor(props){
      super(props);
      /*
        We want to be able to set this reportData based on which report is chosen in
        the header, and pass the data down into the components
      */
      this.handleNewReport = this.handleNewReport.bind(this);
      this.state = {
        mode: "home"
      }

      this.handleNewContent = this.handleNewContent.bind(this);
    }

    handleNewContent(e){

        console.log(e);

      if(e.target.getAttribute("value") == "main"){
        this.setState(prevState => ({
          rmode: 'main',
        }));
      }
      else if(e.target.getAttribute("value") == "stats"){
        this.setState(prevState => ({
          rmode: 'stat',
        }));
      }
      else if(e.target.getAttribute("value") == "stories"){
        this.setState(prevState => ({
          rmode: 'story',
        }));
      }
    }


    handleNewReport(e){
      // handles the color changes in navigation bar
      let x  = document.getElementsByClassName("menu-item");
        for(let i = 0; i < x.length; i++){
            x[i].style.backgroundColor = "#67AEC1";
        }
      document.getElementById(e.target.getAttribute("value")).style.backgroundColor = "#9AD2DF";


  }


  render() {

      let content;
      content =
          <div>
              <Header onClickFunc = {this.handleNewReport}/>
              <Report data={this.state.data} handleNewContent = {this.handleNewContent} rmode = {this.state.rmode}/>
          </div>

      return (
        <div className="app-wrapper">
          {content}
        </div>
      );

  }


}

export default MAG19;
