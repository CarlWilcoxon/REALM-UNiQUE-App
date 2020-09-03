import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmotionalFormIntro extends Component {
  goBack =() => this.props.history.push('/EmotionalHome')
  start=()=> this.props.history.push('/EmotionalForm')
  render() {
    return (
      <div>
        <h3>Realm Form Introduction</h3>
        <p>Please fill out these preliminary questions regarding emotional wellness before beginning the realm course.</p>
        <p>Estimated time to complete: 5-8 minutes.</p>
        <button onClick={this.goBack}>Back</button>
        <button onClick={this.start}>Start Realm Form</button>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EmotionalFormIntro);