import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import logo from './logo.svg';
import './style/App.scss';
import './style/responsive.css';
import {toggleDropDown} from './helpers/responsive.js'

import img from './images/stat.png'; // Tell Webpack this JS file uses this image
import FilteredList from './FilteredList';
import stories from './stories.json';

import data from './data/data.json';
import magfest20 from './data/2020_magfest.json'

import {createPieCharts} from './helpers/pieCharts.js'
import {createRectangleCharts} from './helpers/rectangleCharts.js'
import {createBarCharts} from './helpers/barCharts.js'
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


class Header extends Component {
  render() {
    return (
      <div className="app-header" id = "app-header">

        <li className="menu-item" id = "home"><a href="/home" value="home" onClick= {this.props.onClickFunc}>home</a></li>
        <li className="menu-item" id = "magfest20"><a href="#" value="magfest20" onClick= {this.props.onClickFunc}>magfest 20</a></li>
        <li className="menu-item" id = "magfest19"><a href="#" value="magfest19" onClick= {this.props.onClickFunc}>magfest 19</a></li>
        <li className="menu-item" id = "leakycon18"><a href="#" value="leakycon18" onClick= {this.props.onClickFunc}>leakycon 18</a></li>
        <li className="menu-item" id = "vidcon18"><a href="#" value="vidcon18" onClick= {this.props.onClickFunc}>vidcon 18</a></li>
        <li className="menu-item" id = "magfest"><a href="#" value="magfest" onClick= {this.props.onClickFunc}>magfest 18</a></li>
        <li className="menu-item" id = "tekko"><a href="#" value="tekko" onClick= {this.props.onClickFunc}>tekko 17</a></li>
        <li className="menu-item" id = "nerdcon"><a href="#" value="nerdcon" onClick= {this.props.onClickFunc}>nerdcon 17</a></li>
        {/* <li className="menu-item" id = "vidcon"><a href="#" value="vidcon" onClick= {this.props.onClickFunc}>vidcon 17</a></li> */}
        {/* <li className="menu-item" id = "geekycon"><a href="#" value="geekycon" onClick= {this.props.onClickFunc}>geekycon 16</a></li> */}

        <li className="menu-item" id = "survey"><a href="#" value="survey" onClick= {this.props.onClickFunc}>survey</a></li>
        <li className="menu-item icon" id = "toggle"><a href="javascript:void(0);"  onClick={toggleDropDown}>&#9776;</a></li>
      </div>
    );
  }
}


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
        <div className="main-date"><strong>2020</strong></div>
        <div className="divider"></div>
        <div className="convention-text-wrapper">
        <div className="main-text">MAGFest (Music and Gaming Festival) is an event dedicated to the appreciation of video game music, gaming of all types, and the gaming community.
        MAGFest is a twenty-four-hour show that takes place in Maryland.
        Many attendees are veterans who have been coming for years; some are local and some travel specifically for the convention.</div>
        <div className="main-text">For the third consecutive year, Uplift has worked with MAGFest to improve the safety and inclusion at community events.
        Each year, we have surveyed attendees about their experiences with safety and inclusion at MAGFest.</div>
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

    this.currentdata = magfest20;

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
    let category = "magfest202020";

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

export class MAG20 extends Component {
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

      // DATA FORMAT
      // this.data.name - report name
      // this.data.year - report year
      // this.data.conlink - link to uplift article
      // this.data.conhome - link to convention website
      // this.data.p1 - paragraph 1 of main content
      // this.data.p2 - paragraph 2 of main content

      document.getElementById("magfest20").style.backgroundColor = "#9AD2DF";
      // set data here!!!!
      this.setState(prevState => ({
        data: {
          name: 'magfest20',
          year: '2020',
          intro: "",
          conlink: "https://medium.com/uplifttogether/the-elephant-at-magfest-2019-4e7200dbf00e",
          conhome: "https://super.magfest.org/",
          p1: `MAGFest (Music and Gaming Festival) is an event dedicated to the appreciation of video game music, gaming of all types, and the gaming community.
          MAGFest is a twenty-four-hour show that takes place in Maryland.
          Many attendees are veterans who have been coming for years; some are local and some travel specifically for the convention.`,
          p2: `For the third consecutive year, Uplift has worked with MAGFest to improve the safety and inclusion at community events.
          Each year, we have surveyed attendees about their experiences with safety and inclusion at MAGFest. `,
          stat: './images/stat.png',
          story: 'test'

      },
        rmode: 'main',
        mode: 'content'
      }));

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

export default MAG20;
