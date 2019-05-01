import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SurveyContent extends Component{
  constructor(props){
    super(props);
    this.state = {
        safety: 'none'
    };
  }

  onAddressChanged = (e) => {
    this.setState({
      safety: e.currentTarget.getAttribute('value')
    });
  }

  render(){
    return (
      <div id="home-content-wrapper">

          <div id="survey-title-wrapper">
            <div id="survey-title">
              MAGFEST 2018
            </div>
            <div id="survey-information">
              <p>MAGFest (Music and Gaming Festival) is a four day-long
              event dedicated to the appreciation of video game music, gaming
              of all types, and the gaming community that took place in Maryland
              in January 2018. By completing this survey, I acknowledge that my
              answers may be used by MAGFEST staff for future Uplift Work
              to promote safer conventions.
              </p>
            </div>
          </div>

          <form>
            <div id="survey-form">

              <div id="event-info">
                <div className="survey-header">
                  Event Information
                </div>

                <div className = "survey-question">
                  <div className = "question-text"> I felt safe:</div>
                  <div className = "radio-row">
                      <input type="radio" name = "safety" value="Always"/>
                      <span value="Always" onClick={this.onAddressChanged}><div className="check" /></span>  Always

                      <input type="radio" name = "safety" value="Usually"/>
                      <span value="Usually" onClick={this.onAddressChanged}><div className="check"/></span>  Usually

                      <input type="radio" name = "safety" value="Sometimes"/>
                      <span value="Sometimes" onClick={this.onAddressChanged}><div className="check"/></span>  Sometimes

                      <input type="radio" name = "safety" value="Rarely"/>
                      <span value="Rarely" onClick={this.onAddressChanged}><div className="check"/></span>  Rarely

                      <input type="radio" name = "safety" value="Never"/>
                      <span value="Never" onClick={this.onAddressChanged}><div className="check"/></span>  Never
                  </div>
                </div>

                <div className = "survey-question">
                  <div className = "question-text"> Someone verbally harassed me:</div>
                  <div className = "radio-row">
                    <input type="radio" name = "safety" value="Always"/>
                    <span value="Always" onClick={this.onAddressChanged}><div className="check" /></span>  Yes

                    <input type="radio" name = "safety" value="Usually"/>
                    <span value="Usually" onClick={this.onAddressChanged}><div className="check"/></span>  No
                  </div>
                </div>

                <div className = "survey-question">
                  <div className = "question-text"> Someone touched me without my consent:</div>
                  <div className = "radio-row">
                    <input type="radio" name = "safety" value="Always"/>
                    <span value="Always" onClick={this.onAddressChanged}><div className="check" /></span>  Yes

                    <input type="radio" name = "safety" value="Usually"/>
                    <span value="Usually" onClick={this.onAddressChanged}><div className="check"/></span>  No
                  </div>
                </div>

                <div className = "survey-question">
                  <div className = "question-text"> Someone sexually harassed or assaulted me:</div>
                  <div className = "radio-row">
                    <input type="radio" name = "safety" value="Always"/>
                    <span value="Always" onClick={this.onAddressChanged}><div className="check" /></span>  Yes

                    <input type="radio" name = "safety" value="Usually"/>
                    <span value="Usually" onClick={this.onAddressChanged}><div className="check"/></span>  No
                  </div>
                </div>
                <br></br>
                <div className = "survey-question surveyFill">
                  <div className = "question-text filltext"> At any point in the weekend, did you feel uncomfortable at MAGFest or see others in a difficult situation?</div>
                  <div className = "radio-row">
                    <textarea value="" />
                  </div>
                </div>
            </div>

            <div id="demographic-info">
              <div className="survey-header"> Personal Information </div>
              <div id="survey-subheader">
              The following demographic questions are optional but will help us analyze data by demographics to discover safety trends that may correlate with specific identities.
              </div>
              <div id="demo-left">
                <div className = "question-text-demo"> What is your sexuality?</div>
                <textarea value="" />
                <div className = "question-text-demo"> Do you have a disability or chronic illness?</div>
                <textarea value="" />
                <div className = "question-text-demo"> What is your race?</div>
                <textarea value="" />
              </div>
              <div id="demo-right">
                <div className = "question-text-demo"> What is your gender?</div>
                <textarea id = "nice" value="" />
                <div className = "question-text-demo"> Which of the following (if any) apply to you?</div>

                <div className = "multipleChoice-rows">
                  <div className = "multOptions">
                    <input type="radio" name = "safety" value="Always"/>
                    <span class="leftradio" value="Always" onClick={this.onAddressChanged}><div className="check" /></span>  Cis
                  </div>

                  <div className = "multOptions">
                  <input type="radio" name = "safety" value="Usually"/>
                  <span class="leftradio" value="Usually" onClick={this.onAddressChanged}><div className="check"/></span>  Trans
                  </div>

                  <div className = "multOptions">

                  <input type="radio" name = "safety" value="Usually"/>
                  <span class="leftradio" value="Usually" onClick={this.onAddressChanged}><div className="check"/></span>
                  <textarea id = "ugh" value="" />
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div className = "buttonContainer">
            <input id = "submitButton" type="submit" value="Submit Form"/>
          </div>

        </form>

        <div id="footer">
          <p> Elephant at the Con is a project by <a href="uplifttogether.org">Uplift: Online Communities Against Sexual Violence</a>.
          </p>
          <p> Questions or comments? <a href="mailto:contactus@uplifttogether.org">Email us.</a>
          </p>

        </div>
      </div>
      );
    }
  }

export default SurveyContent;
