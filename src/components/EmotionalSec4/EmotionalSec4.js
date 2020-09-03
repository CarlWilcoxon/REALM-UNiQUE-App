import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmotionalSec4 extends Component {

  render() {
    return (
      <div>
        <h1>Emotional Realm</h1>
        <h3></h3>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  state
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EmotionalSec4);