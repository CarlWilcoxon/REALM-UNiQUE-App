import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmotionalFormFinished extends Component {

  goBack =() => this.props.history.push('/EmotionalForm')
  continue =() => this.props.history.push('/EmotionalSec1')

  render() {
    return (
      <div>
        <h1>Emotional Realm</h1>
        <h3>Realm Form </h3>
        <h3>Thank you!</h3>
        <p>Your answers have been saved.  Click continue to view the Realm course!</p>
        <div>
          <button onClick={this.goBack}>Back</button>
          <button onClick={this.continue}>Continue to Realm Course</button>
        </div>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  state
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EmotionalFormFinished);