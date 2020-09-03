import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmotionalForm extends Component {
  
  goBack =() => this.props.history.push('/EmotionalFormIntro')
  complete = () => this.props.history.push ('/EmotionalFormFinished')
  
  render() {
    return (
      <div>
        <h1>Emotional Realm</h1>
        <h3>Realm Form</h3>
          <div>
             What do you think about most of the time? <input></input>
          </div>
          <div>
            How many negative thoughts do you think about yourself? <input></input>
          </div>
          <div>
            How many positive thoughts do you think about yourself? <input></input>
          </div>
          <div>
            List things you are afraid of.  Can you control these things?  <input></input>
          </div>
          <div>
            List some memories.  Are they mainly positive or negative? <input></input>
          </div>
          <div>
            How much sleep do you get at night? <input></input>
          </div>
          <div>
            What time do you normally go to bed? <input></input>
          </div>
          <div>
            What time do you normally get out of bed? <input></input>
          </div>
          <div>
            Do you take any medication to sleep? <input></input>
          </div>
          <div>
            Do you look at your phone, watch tv, or work on a computer right before bed? <input></input>
          </div>
          <div>
            How do you face, deal with, and/or overcome responsibilities, problems, or difficulties? <input></input>
          </div>
          <div>
            Do you eat or drink alcohol when upset of celebrating? <input></input>
          </div>
          <div>
            Do you go to the gym when stressed out, or do you get depressed and sleep? <input></input>
          </div>
          <div>
            <button onClick={this.goBack}>Back</button>
            <button onClick={this.complete}>Complete Form</button>
          </div>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EmotionalForm);