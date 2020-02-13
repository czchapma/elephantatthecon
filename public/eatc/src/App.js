import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.scss';
import './style/responsive.css';
import SurveyContent from './survey.js';

import {StatContent, MainContent, StoryContent, HomeContent} from './Content.js';

import {toggleDropDown} from './helpers/responsive.js'

class Header extends Component {
  render() {
    return (
      <div className="app-header" id = "app-header">
        <li className="menu-item" id = "home"><a href="#" value="home" onClick= {this.props.onClickFunc}>home</a></li>
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

    // DATA FORMAT
    // this.data.name - report name
    // this.data.year - report year
    // this.data.conlink - link to uplift article
    // this.data.conhome - link to convention website
    // this.data.p1 - paragraph 1 of main content
    // this.data.p2 - paragraph 2 of main content

    // this data is passed all the way to the child components, which render based
    // on it
    if(e.target.getAttribute("value") == "home"){
      this.setState(prevState => ({
        mode: 'home',
      }));
    }
    else if(e.target.getAttribute("value") == "survey"){
      this.setState(prevState => ({
        mode: 'survey',
      }));
    }


    else if(e.target.getAttribute("value") == "leakycon18"){
      document.getElementById("leakycon18").style.backgroundColor = "#9AD2DF";
      this.setState(prevState => ({
        data: {
        name: 'leakycon18',
        year: '2018',
        conlink: "https://medium.com/uplifttogether/magfest-2018-the-elephant-at-the-con-9d5392e9eb7e",
        conhome: "https://www.leakycon.com",
        intro: "",
        p1: `LeakyCon is the largest unofficial convention for fans of Harry Potter and the many magical
        elements of J.K. Rowling's Wizarding World. LeakyCon has provided the Harry Potter fandom with
        a place to gather and celebrate its passion since 2009.`,
        p2: `Clearly LeakyCon is a special event and an important community for many.
        At Uplift we understand the power of communities and work with organizers like LeakyCon to ensure
        that these important communities are safe for everyone. With this in mind, we conducted a survey of
        LeakyCon 2018 attendees on safety and inclusion.`,
        stat: './images/stat.png',
        story: 'test'
      },
        rmode: 'main',
        mode: 'content'
      }));
    }



    else if(e.target.getAttribute("value") == "magfest"){
      document.getElementById("magfest").style.backgroundColor = "#9AD2DF";
      // set data here!!!!
      this.setState(prevState => ({
        data: {
        name: 'magfest',
        year: '2018',
        conlink: "https://medium.com/uplifttogether/magfest-2018-the-elephant-at-the-con-9d5392e9eb7e",
        conhome: "https://www.magfest.org/",
        intro: "",
        p1: `MAGFest (Music and Gaming Festival) is a four day-long event dedicated to
        the appreciation of video game music, gaming of all types, and the gaming community that took place
        in Maryland in January 2018. When asked what keeps them coming back, some said the concerts, some
        said the cosplay, many said the fact that it’s a twenty-four hour show where you could play video
        games at 4 in the morning. A lot of people come with their friends every year. Some have moved away
        and still travel back every year for the festival.`,
        p2: `Clearly MAGFest is a special event and an important community for many.
        At Uplift we understand the power of communities and work with organizers like MAGFest to ensure
        that these important communities are safe for everyone. With this in mind, we conducted a survey of
        MAGFest 2018 attendees on safety and inclusion.`,
        stat: './images/stat.png',
        story: 'test'
      },
        rmode: 'main',
        mode: 'content'
      }));
    }
    else if(e.target.getAttribute("value") == "tekko"){
      document.getElementById("tekko").style.backgroundColor = "#9AD2DF";

      this.setState(prevState => ({
        data: {
        name: 'tekko',
        year: '2017',
        conlink:"https://medium.com/uplifttogether/tekko-2017-elephant-at-the-con-report-b2a8c86384e3",
        conhome: "http://www.teamtekko.us/",
        intro: "",
        p1: `Tekko (formerly Tekkoshocon) is an annual four-day convention that takes place
at the David L. Lawrence Convention Center in Pittsburgh, Pennsylvania. Mainly dedicated
to the appreciation of anime, this event includes anime viewings, concerts, cosplay
masquerades and competitions, dancing, fashion shows, and gaming.`,
        p2: `At Uplift we understand the power of communities and work with organizers like Tekko to ensure
that these important communities are safe for everyone. With this in mind, here is our survey of the
Tekko 2017 attendees on safety and inclusion.`,
        stat: './images/stat.png',
        story: 'test'

      },
      rmode: 'main',
        mode: 'tekko'
      }));
    }
    else if(e.target.getAttribute("value") == "nerdcon"){
      document.getElementById("nerdcon").style.backgroundColor = "#9AD2DF";

      // set data here!!!!
      this.setState(prevState => ({
        data: {
        name: 'nerdcon',
        year: '2017',
        conlink: "https://medium.com/uplifttogether/the-elephant-at-nerdcon-nerdfighteria-c859f88cfd16",
        conhome: "http://www.nerdcon.com/",
        intro: "",
        p1: `In celebration of ten years of Vlogbrothers and the Nerdfighteria community,
         Nerdfighters from all over the world gathered in Boston, MA for a weekend celebrating
         the wonderful community John and Hank Green have created. Thanks to the hard work of
         staff, volunteers, and members of the community, it was a memorable weekend, but
         unfortunately not everyone felt safe and included.`,
        p2: `Uplift attended the conference, presenting a workshop on being a leader in
        online communities, handing out convention safety cards, demonstrating our Chrome
        extension that blocks harassing content from social media, and collecting data for
         our project Elephant At The Con.`,
        stat: './images/stat.png',
        story: 'test'

      },
      rmode: 'main',
        mode: 'content'
      }));
    }
    else if(e.target.getAttribute("value") == "geekycon"){
      document.getElementById("geekycon").style.backgroundColor = "#9AD2DF";
      this.setState(prevState => ({
        data: {
        name: 'geekycon',
        year: '2016',
        conlink: "https://medium.com/uplifttogether/the-elephant-at-geekycon-the-stories-f65c83b7ce16",
        conhome: "https://geekyconblr.tumblr.com/post/159302934649/dearbelovedgeekyconcommunity",
        intro: "",
        p1: `GeekyCon targets the online fandoms of Doctor Who, Supernatural,
        Glee, Marvel Cinematic Universe, and Disney.`,
        p2: `At GeekyCon this year, Uplift volunteers educated attendees on our
        organization’s mission, offered resources about consent, healthy
        relationships, and con safety. We also spoke with attendees about their
        experience at the con. The stories, recorded in our Elephant At the Con
        survey, are shared below.`,
        stat: './images/stat.png',
        story: 'test'


      },
      rmode: 'main',
        mode: 'content'
      }));
    }
    else if(e.target.getAttribute("value") == "vidcon"){
      document.getElementById("vidcon").style.backgroundColor = "#9AD2DF";
      // set data here!!!!
      this.setState(prevState => ({
        data: {
          name: 'vidcon',
          year: '2017',
          intro: "",
          conlink: "https://medium.com/@UpliftTogether/aaa620a8d26c",
          conhome: "http://vidcon.com/",
          p1: `VidCon is a multi-genre online video conference, held annually in
          Southern California since 2010. This convention is one of the largest
          and most long-standing of its kind in the world, gathering thousands
           of online video creators, viewers, and industry representatives.`,
          p2: `At Uplift we understand the power of communities and work with organizers like VidCon to ensure
that these important communities are safe for everyone. With this in mind, here is our survey of the
VidCon 2017 attendees on safety and inclusion.
`,
          stat: './images/stat.png',
          story: 'test'

      },
      rmode: 'main',
        mode: 'content'
      }));
    } else if(e.target.getAttribute("value") == "vidcon18"){
      document.getElementById("vidcon18").style.backgroundColor = "#9AD2DF";
      // set data here!!!!
      this.setState(prevState => ({
        data: {
          name: 'vidcon18',
          year: '2018',
          intro: "",
          conlink: "https://medium.com/@UpliftTogether/the-elephant-at-vidcon-2018-3c7acb446d2a",
          conhome: "http://vidcon.com/",
          p1: `VidCon is a multi-genre online video conference, held annually in
          Southern California since 2010. This convention is one of the largest
          and most long-standing of its kind in the world, gathering thousands
           of online video creators, viewers, and industry representatives.`,
          p2: `At Uplift we understand the power of communities and work with organizers like VidCon to ensure
that these important communities are safe for everyone. With this in mind, here is our survey of the
VidCon 2018 attendees on safety and inclusion.
`,
          stat: './images/stat.png',
          story: 'test'

      },
      rmode: 'main',
        mode: 'content'
      }));
    }

    else if (e.target.getAttribute("value") == "magfest19") {

        document.getElementById("magfest19").style.backgroundColor = "#9AD2DF";
        // set data here!!!!
        this.setState(prevState => ({
          data: {
            name: 'magfest19',
            year: '2019',
            intro: "",
            conlink: "https://medium.com/uplifttogether/the-elephant-at-magfest-2019-4e7200dbf00e",
            conhome: "https://super.magfest.org/",
            p1: `MAGFest (Music and Gaming Festival) is an event dedicated to the appreciation of video
            game music, gaming of all types, and the gaming community. The event, which took place in Maryland
            in early January 2019, is a twenty-four-hour show offering arcades, tabletop, LAN, music, speakers,
            and more.`,
            p2: `At Uplift we understand the power of communities and work with organizers like VidCon to ensure
  that these important communities are safe for everyone. With this in mind, here is our survey of the
  VidCon 2018 attendees on safety and inclusion.
  `,
            stat: './images/stat.png',
            story: 'test'

        },
          rmode: 'main',
          mode: 'content'
        }));

    }

  }

  render() {
    let content;

    if(this.state.mode == "home"){
      content = <div><Header onClickFunc = {this.handleNewReport}/>
      <HomeContent /></div>
    }
    else if(this.state.mode == "survey"){
      content = <div><Header onClickFunc = {this.handleNewReport}/>
        <SurveyContent /></div>
    }
    else{
      content = <div><Header onClickFunc = {this.handleNewReport}/>
        <Report data={this.state.data} handleNewContent = {this.handleNewContent} rmode = {this.state.rmode}/></div>
    }
    return (
      <div className="app-wrapper">
        {content}
      </div>
    );
  }
}

export default App;
