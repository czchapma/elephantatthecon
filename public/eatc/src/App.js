import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import {TestContent,MainContent,StatContent,StoryContent} from './Content.js';

// We can put this in a different file and export it later
class Header extends Component {
  // No CSS to make it horizontal yet
  render() {
    return (
      <div className="app-header">
      <ul>
        <li className="menu-item"><a href="#">home</a></li>
        <li className="menu-item"><a href="#">magfest 18</a></li>
        <li className="menu-item"><a href="#">tekko 17</a></li>
        <li className="menu-item"><a href="#">nerdcon 17</a></li>
        <li className="menu-item"><a href="#">geekycon 17</a></li>
        <li className="menu-item"><a href="#">vidcon 17</a></li>
        <li className="menu-item"><a href="#">vidcon 16</a></li>
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
      // reportData: this.props.reportData,
      data: this.props.data,
      mode: 'main',
      contentData: 'Main Content',
      scrollData: 'Scroll Content'
    }
    console.log(this.props.data)
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
        <ReportContent data={this.state.data} mode ={this.state.mode}/>
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
      content = <TestContent data ={this.props.data} />
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
      data: {
        name: 'MAGFEST',
        intro: `MAGFest (Music and Gaming Festival) is a four day-long event dedicated to the appreciation of video game music, gaming of all types, and the gaming community that took place in Maryland in January 2018. When asked what keeps them coming back, some said the concerts, some said the cosplay, many said the fact that it’s a twenty-four hour show where you could play video games at 4 in the morning. A lot of people come with their friends every year. Some have moved away and still travel back every year for the festival.

        Clearly MAGFest is a special event and an important community for many. At Uplift we understand the power of communities and work with organizers like MAGFest to ensure that these important communities are safe for everyone. With this in mind, we conducted a survey of MAGFest 2018 attendees on safety and inclusion.`,
        stat: './images/stat.png',
        story: 'test'
      }
    }
  }
  render() {
    // Going to pass the data all the way down to ReportContent
    return (
      <div className="app-wrapper">
        <Header />
        <Report data={this.state.data}/>
      </div>
    );
  }
}

export default App;
