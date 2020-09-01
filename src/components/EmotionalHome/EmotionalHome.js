import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmotionalHome extends Component {

  render() {
    return (
      <div>
        <h1>Realm 1: Emotional Realm</h1>
        <h3></h3>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EmotionalHome);