import React, { Component } from 'react';
import img from './images/stat.png'; // Tell Webpack this JS file uses this image
import FilteredList from './FilteredList';
import stories from './stories.json';

// import add_d3 from './demographics.js'
import * as d3pie from "d3pie"

export class MainContent extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }

  render() {
    //return (<div>Hello</div>)
    return (
      <div className="main-wrapper">
        <h>MAGFEST</h> <br/>
    
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

export class TestContent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    console.log(d3pie)
    var pie = new d3pie("pieChart", {
  "header": {
    "title": {
      "text": "GENDER",
      "fontSize": 16
    },
    "subtitle": {
      "color": "#999999",
      "fontSize": 10,
      "font": "courier"
    },
    "location": "pie-center",
    "titleSubtitlePadding": 10
  },
  "footer": {
    "color": "#999999",
    "fontSize": 10,
    "font": "open sans",
    "location": "bottom-left"
  },
  "size": {
    "canvasHeight": 400,
    "canvasWidth": 450,
    "pieInnerRadius": "69%",
    "pieOuterRadius": "48%"
  },
  "data": {
    "sortOrder": "label-desc",
    "content": [
      {
        "label": "male",
        "value": 50,
        "color": "#EB5757"
      },
      {
        "label": "female",
        "value": 44,
        "color": "#2F80ED"
      },
      {
        "label": "nonbinary/genderqueer",
        "value": 4,
        "color": "#D8269B"
      },
      {
        "label": "agender",
        "value": 2,
        "color": "#9B51E0"
      }
    ]
  },
  "labels": {
    "outer": {
      "format": "label-value1",
      "pieDistance": 20
    },
    "inner": {
      "format": "none"
    },
    "mainLabel": {
      "fontSize": 11
    },
    "percentage": {
      "color": "#999999",
      "fontSize": 11,
      "decimalPlaces": 0
    },
    "value": {
      "color": "#37859a",
      "fontSize": 11
    },
    "lines": {
      "enabled": true,
      "style": "straight",
      "color": "#1d1d1d"
    },
    "truncation": {
      "enabled": true
    }
  },
  "tooltips": {
    "enabled": true,
    "type": "placeholder",
    "string": "{label}: {value}, {percentage}%",
    "styles": {
      "backgroundColor": "#363636",
      "padding": 6
    }
  },
  "effects": {
    "pullOutSegmentOnClick": {
      "effect": "back",
      "speed": 400,
      "size": 8
    }
  }
});
  }
  render() {
    return (
      <div className="main-wrapper">
        <h>STATISTICS</h> <br/>
         <br/>
        <div id="pieChart"></div>
      </div>
    );
  }
}

export class StoryContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    //return (<div>Hello</div>)
    return (
      <div className="main-wrapper">
        <h>STORIES</h> 
          <FilteredList items = {stories.magfest2018} />
      </div>
    );
  }
}
