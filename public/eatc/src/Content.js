import React, { Component } from 'react';
import img from './images/stat.png'; // Tell Webpack this JS file uses this image


export class MainContent extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <div className="main-wrapper">
        <h>{this.props.data.name}</h> <br/>
        
        {this.props.data.intro}      
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

export class StoryContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="main-wrapper">
        <h>STORIES</h> <br/>
         {this.props.data.story}<br />
      </div>
    );
  }
}