import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.scss';
import './style/responsive.css';

import SurveyContent from './survey.js';
import {MainContent, HomeContent} from './Content.js';

import {toggleDropDown} from './helpers/responsive.js';

import Header from './Header.js';

class Report extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'main',
      contentData: 'Main Content',
      scrollData: 'Scroll Content'
    }
  }
  render() {
    // We pass the handle new content function into ReportScroll,
    // this will handle the changing of ReportContent's data
    return (
      <div className="report-wrapper">
        <ReportScroll onClickFunc = {this.props.handleNewContent}/>
        <ReportContent data={this.props.data} mode ={this.props.rmode}/>
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
      content = <MainContent data ={this.props.data}/>
    }
    else{
      content = "Something is wrong with rendering ReportContent"
    }

    return (
      <div className="content-wrapper">
        {content}
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

class App extends Component {
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

  // this function handles the content switching of a particular report
  // although it is defined here, its "scope" is within a ReportContent
  handleNewContent(e){
    if(e.target.getAttribute("value") == "main"){
      this.setState(prevState => ({
        rmode: 'main',

      }));
    }
  }

  // this function handles the switching of a report
  // clicking on the nav bar will invoke this function, which changes the data
  // and renders a new report
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

    if(this.state.mode == "home"){
      content =
      <div>
          <Header onClickFunc = {this.handleNewReport}/>
          <HomeContent />
      </div>
    }

    return (

      <div className="app-wrapper">
        {content}
      </div>
    );
  }
}

export default App;
