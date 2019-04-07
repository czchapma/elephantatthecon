import React, { Component } from 'react';
import img from './images/stat.png'; // Tell Webpack this JS file uses this image


export class MainContent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="main-wrapper">
        <h>MAGFEST</h> <br/>
        {this.props.data}
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a leo eget ligula rhoncus finibus. Donec ornare elit sed sem fermentum, eget consectetur magna vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus at pellentesque diam. Cras placerat ex felis, feugiat rhoncus turpis interdum sit amet. Donec in arcu vitae massa imperdiet auctor. Aliquam venenatis iaculis metus. Nunc et faucibus libero, placerat fringilla velit. Nullam condimentum, lectus vitae vestibulum porttitor, neque sapien fringilla mauris, sed condimentum purus sem ut leo. Nunc tellus turpis, sagittis et tincidunt vitae, convallis quis neque. Aenean sed cursus nisi. Praesent at posuere urna. Nullam eget ultricies est.</p>
      
      </div>
    );
  }
}

export class StatContent extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <h>STATISTICS</h> <br/>
        {this.props.data} <br/>
        <img src={img}/>
      </div>
    );
  }
}

export class StoryContent extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <h>STORIES</h> <br/>
        {this.props.data} <br />
      </div>
    );
  }
}