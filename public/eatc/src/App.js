import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// We can put this in a different file and export it later
class Header extends Component {
  // No CSS to make it horizontal yet
  render() {
    return (
      <div className="App-header">
      <ul>
        <li><a href="#">Report 1</a></li>
        <li><a href="#">Report 2</a></li>
        <li><a href="#">Report 3</a></li>
      </ul>

      </div>
    );
  }
}

// We can put this in a different file and export it later
class Report extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="report-wrapper">
        <ReportScroll />
        <ReportContent data ={this.props.data}/>
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
    return (
      <div className="content-wrapper">
        <p>{this.props.data}</p>
      </div>
    );
  }
}

// We can put this in a different file and export it later
class ReportScroll extends Component {
  render() {
    return (
      <div className="scroll-wrapper">
      <ul>
        <li><a href="#">Option 1</a></li>
        <li><a href="#">Option 2</a></li>
        <li><a href="#">Option 3</a></li>
      </ul>

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
