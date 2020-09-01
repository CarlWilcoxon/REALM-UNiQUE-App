import React, { Component } from 'react';
import { connect } from 'react-redux';
import Emotional from './emotional.png';

class EmotionalHome extends Component {
  goBack =() => this.props.history.push('/')

  render() {
    return (
      <div>
        <img src={Emotional} alt='realm logo'/>
        <h1>Realm 1: Emotional Wellness</h1>
        <p>Emotional health is an important part of overall health. 
          People who are emotionally healthy are in control of their thoughts, feelings, and behaviors. 
          They are able to cope with life’s challenges. 
          They can keep problems in perspective and bounce back from setbacks. 
          They feel good about themselves and have good relationships.</p>
        <div>
        </div>
        <p>Being emotionally healthy does not mean you are happy all the time. 
          It means you are aware of your emotions. 
          You can deal with them, whether they are positive or negative. 
          Emotionally healthy people still feel stress, anger, and sadness. 
          But they know how to manage their negative feelings. 
          They can tell when a problem is more than they can handle on their own. 
          They also know when to seek help from their doctor.</p>
        
        <button onClick={this.goBack}>Back</button>
        <button>Start</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EmotionalHome);