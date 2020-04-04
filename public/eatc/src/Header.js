import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import logo from './logo.svg';
import './style/App.scss';
import './style/responsive.css';
import {toggleDropDown} from './helpers/responsive.js';

class Header extends Component {
  render() {
    return (
      <div className="app-header" id = "app-header">

        <li className="menu-item" id = "home"><a href="/" value="home" onClick= {this.props.onClickFunc}>home</a></li>
        <li className="menu-item" id = "magfest20"><a href="/magfest20" value="magfest20" onClick= {this.props.onClickFunc}>magfest 20</a></li>
        <li className="menu-item" id = "magfest19"><a href="/magfest19" value="magfest19" onClick= {this.props.onClickFunc}>magfest 19</a></li>
        <li className="menu-item" id = "leakycon18"><a href="/leakycon18" value="leakycon18" onClick= {this.props.onClickFunc}>leakycon 18</a></li>
        <li className="menu-item" id = "vidcon18"><a href="#" value="vidcon18" onClick= {this.props.onClickFunc}>vidcon 18</a></li>
        <li className="menu-item" id = "magfest"><a href="#" value="magfest" onClick= {this.props.onClickFunc}>magfest 18</a></li>
        <li className="menu-item" id = "tekko"><a href="#" value="tekko" onClick= {this.props.onClickFunc}>tekko 17</a></li>
        <li className="menu-item" id = "nerdcon"><a href="#" value="nerdcon" onClick= {this.props.onClickFunc}>nerdcon 17</a></li>
        {/* <li className="menu-item" id = "vidcon"><a href="#" value="vidcon" onClick= {this.props.onClickFunc}>vidcon 17</a></li> */}
        {/* <li className="menu-item" id = "geekycon"><a href="#" value="geekycon" onClick= {this.props.onClickFunc}>geekycon 16</a></li> */}
        <li className="menu-item" id = "survey"><a href="/survey" value="survey" onClick= {this.props.onClickFunc}>survey</a></li>
        <li className="menu-item icon" id = "toggle"><a href="javascript:void(0);"  onClick={toggleDropDown}>&#9776;</a></li>
      </div>
    );
  }
}

export default Header;
