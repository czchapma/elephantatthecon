
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect } from 'react-router';
import { HomeContent} from './Content.js';
// import './AppRouter.js';

export class SurveyContent extends Component{
  constructor(props){
    super(props);
    this.state = {
        safety: 'none',
        verbal:'none',
        redirectToHome: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onAddressChanged = (e) => {
    const newState = e.currentTarget.getAttribute('value');

    this.setState({
      // safety: e.currentTarget.getAttribute('value')
      text: newState,
    });
  }

  handleChange = changeEvent => {
    this.setState({
      safety: changeEvent.target.value
    });
  };

  handleChangeVerbal = changeEvent => {
    this.setState({
      verbal: changeEvent.target.value
    });
  };

  handleChangeTouch = changeEvent => {
    this.setState({
      touch: changeEvent.target.value
    });
  };
  handleChangeS = changeEvent => {
    this.setState({
      sexual: changeEvent.target.value
    });
  };

  handleChangeD = changeEvent => {
    this.setState({
      describe: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    this.setState({
      redirectToHome: true
    });


    // {console.log("form submitted")}
    alert(`Thank you! Your answer has been recorded`);
    // formSubmitEvent.preventDefault();
  };

  render(){
    const redirectToHome = this.state.redirectToHome;
    if (redirectToHome === true) {
        // return <Redirect to="/home" />
        window.location.reload();
    }

    return (
      <div id="home-content-wrapper">

          <div id="survey-title-wrapper">
            <div id="survey-title">
              Convention Safety
            </div>
            <div id="survey-information">
              <p>The results of this survey will be shared in a future report and may be used by Uplift for future work to promote safe conventions and shared with the convention staff. By completing this survey, you acknowledge that that your responses will be used for these purposes.</p>
            </div>
          </div>

          <iframe name="hidden_iframe" id="hidden_iframe"height="0px" width="0px" frameBorder="0px"></iframe>
          <form id="myform" onSubmit={this.handleFormSubmit} action="https://docs.google.com/forms/d/e/1FAIpQLScIb9GguBeDtAteXkLi-unMsOUF3xuKcJ6GZVW19UvFqFv3VQ/formResponse" method="post" target="hidden_iframe">
                <div className="survey-header">
                  Event Information
                </div>

            <div className = "survey-question">
              <div className = "question-text"> I feel safe at the convention:</div>
              <div className="radio-row">
                <label><input type="radio" name="entry.351585626" value="always"checked={this.state.safety === "always"}
                onChange={this.handleChange}className="form-check-input"/>Always</label>
                <label><input type="radio" name="entry.351585626" value="usually"checked={this.state.safety === "usually"}
                onChange={this.handleChange}className="form-check-input"/>Usually</label>
                <label><input type="radio" name="entry.351585626" value="sometimes"checked={this.state.safety === "sometimes"}
                onChange={this.handleChange}className="form-check-input"/>Sometimes</label>
                <label><input type="radio" name="entry.351585626" value="rarely"checked={this.state.safety === "rarely"}
                onChange={this.handleChange}className="form-check-input"/>Rarely</label>
              </div>
            </div>

            <div className = "survey-question">
              <div className = "question-text">Someone has verbally harrassed me at the convention:</div>
              <div className="radio-row">
              <label><input type="radio" name="entry.556186155" value="yes"checked={this.state.verbal === "yes"}
              onChange={this.handleChangeVerbal}className="form-check-input"/>Yes</label>
              <label><input type="radio" name="entry.556186155" value="no"checked={this.state.verbal === "no"}
              onChange={this.handleChangeVerbal}className="form-check-input"/>No</label>
              </div>
            </div>

            <div className = "survey-question">
              <div className = "question-text">Someone has touched me without my consent at the convention:</div>
              <div className="radio-row">
              <label><input type="radio" name="entry.1792789459" value="yes"checked={this.state.touch === "yes"}
              onChange={this.handleChangeTouch}className="form-check-input"/>Yes</label>
              <label><input type="radio" name="entry.1792789459" value="no"checked={this.state.touch === "no"}
              onChange={this.handleChangeTouch}className="form-check-input"/>No</label>
              </div>
            </div>

            <div className = "survey-question">
              <div className = "question-text">Someone has sexually harrassed or assaulted me at the convention:</div>
              <div className="radio-row">
              <label><input type="radio" name="entry.939669801" value="yes"checked={this.state.sexual === "yes"}
              onChange={this.handleChangeS}className="form-check-input"/>Yes</label>
              <label><input type="radio" name="entry.939669801" value="no"checked={this.state.sexual === "no"}
              onChange={this.handleChangeS}className="form-check-input"/>No</label>
              </div>
            </div>

            <div className = "survey-question surveyFill">
                  <div className = "question-text filltext"> At any point in the weekend, did you feel uncomfortable at the convention or see others in a difficult situation?</div>
                  <div className = "radio-row">
                    <textarea value={this.state.value} onChange={this.onAddressChanged} name="entry.872631186"/>
                  </div>
            </div>

            <div className="survey-header"> Personal Information </div>

            <div id="demographic-info">
              <div id="survey-subheader">
              The following demographic questions are optional but will help us analyze data by demographics to discover safety trends that may correlate with specific identities.
              </div>
              <div id="demo-left">
                <div className = "question-text-demo"> What is your gender?</div>
                <textarea value={this.state.value} onChange={this.onAddressChanged}name="entry.722266204"/>

                <div className = "question-text-demo"> Do you have a disability or chronic illness?</div>
                <textarea value={this.state.value} onChange={this.onAddressChanged} name="entry.2033834358"/>

                <div className = "question-text-demo"> What is your race?</div>
                <textarea value={this.state.value} onChange={this.onAddressChanged} name="entry.630973531"/>
              </div>
              <div id="demo-right">
                <div className = "question-text-demo"> What is your sexuality?</div>
                <textarea id = "nice" value={this.state.value} onChange={this.onAddressChanged} name="entry.1281966181"/>
                <div className = "question-text-demo"> How would you describe yourself</div>

                <div className = "multipleChoice-rows">


                  <div className = "radio-row">
                    <label><input type="radio" name="entry.130234048" value="cis"checked={this.state.describe === "cis"}
                    onChange={this.handleChangeD}className="form-check-input"/>Cis</label>

                    <label><input type="radio" name="entry.130234048" value="trans"checked={this.state.describe === "trans"}
                    onChange={this.handleChangeD}className="form-check-input"/>Trans</label>

                    <label><input type="radio" name="entry.130234048.other_option_response" value="other"checked={this.state.describe === "other"}
                    onChange={this.handleChangeD}className="form-check-input"/>Other:</label>
                    <input type="text" name="entry.86141345" value={this.state.value} onChange={this.onAddressChanged}/>
                    {/* <textarea value={this.state.value} onChange={this.onAddressChanged} name="entry.872631186"/>        */}
                  </div>
                </div>

              </div>
            </div>

          <div className = "buttonContainer" id="submit_div">
            <input id = "submitButton" type="submit" value="Submit Form"/>
          </div>

        </form>

        <div id="footer">
          <p> Elephant at the Con is a project by <a href="www.uplifttogether.org">Uplift: Online Communities Against Sexual Violence</a>.
          </p>
          <p> Questions or comments? <a href="mailto:contactus@uplifttogether.org">Email us.</a>
          </p>

        </div>
      </div>
      );
    }
  }

export default SurveyContent;
