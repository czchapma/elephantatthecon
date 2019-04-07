import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {MainContent,StatContent,StoryContent} from './Content.js';

// We can put this in a different file and export it later
class Header extends Component {
  // No CSS to make it horizontal yet
  render() {
    return (
      <div className="app-header">
      <ul>
        <li className="menu-item"><a href="#">Report 1</a></li>
        <li className="menu-item"><a href="#">Report 2</a></li>
        <li className="menu-item"><a href="#">Report 3</a></li>
        <li className="menu-item"><a href="#">Report 1</a></li>
        <li className="menu-item"><a href="#">Report 2</a></li>
        <li className="menu-item"><a href="#">Report 3</a></li>
      </ul>

      </div>
    );
  }
}

// We can put this in a different file and export it later
class Report extends Component {
  constructor(props){
    super(props);
    this.handleNewContent = this.handleNewContent.bind(this);
    this.state = {
      mode: 'main',
      contentData: 'Main Content',
      scrollData: 'Scroll Content'
    }
  }
  // This function will handling switching between different report contents,
  // eg from main to statistics to stories
  handleNewContent(e){
    if(e.target.getAttribute("value") == "main"){
      this.setState(prevState => ({
        mode: 'main',
        contentData :'Main Content'
      }));
    }
    else if(e.target.getAttribute("value") == "stats"){
      this.setState(prevState => ({
        mode: 'stat',
        contentData :'Stats Content'
      }));
    }
    else if(e.target.getAttribute("value") == "stories"){
      this.setState(prevState => ({
        mode: 'story',
        contentData :'Story Content'
      }));
    }
  }

  render() {
    // We pass the handle new content function into ReportScroll, 
    // this will handle the changing of ReportContent's data
    return (
      <div className="report-wrapper">
        <ReportScroll onClickFunc = {this.handleNewContent}/>
        <ReportContent data ={this.state.contentData} mode ={this.state.mode}/>
      </div>
    );
  }
}

// We can put this in a different file and export it later
class ReportContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    // return (
    //   <div className="content-wrapper">
    //     <p>{this.props.data}</p>
    //   </div>
    // );


    let content;

    if(this.props.mode == "main"){
      content = <MainContent data ={this.props.data}/>
    }
    else if(this.props.mode == "stat"){
      content = <StatContent data ={this.props.data} />
    }
    else if(this.props.mode == "story"){
      content = <StoryContent data ={this.props.data} />
    }
    else{
      content = "Uh Oh!"
    }

    return (
      <div className="content-wrapper">
        {content}
      </div>
    );
  }
}

// We can put this in a different file and export it later
class ReportScroll extends Component {
  render() {
    return (
      <div className="scroll-wrapper">
      
        <li className="scroll-item" ><a  href="#" value="main" onClick= {this.props.onClickFunc}>Main</a></li>
        <li className="scroll-item"><a  href="#" value="stats" onClick= {this.props.onClickFunc}>Stats</a></li>
        <li className="scroll-item"><a  href="#" value="stories" onClick= {this.props.onClickFunc}>Stories</a></li>
  
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

      Maybe have some js function to parse json file representing a report? 
    */
    this.state = {
      reportData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  }
  render() {
    // Going to pass the data all the way down to ReportContent
    return (
      <div className="app-wrapper">
        <Header />
        <Report data={this.state.reportData}/>
      </div>
    );
  }
}

export default App;
