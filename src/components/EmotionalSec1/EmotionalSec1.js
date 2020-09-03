import React, { Component } from 'react';
import { connect } from 'react-redux';

class Template extends Component {
complete = () => this.props.history.push ('/EmotionalFormFinished')
  render() {
    return (
      <div>
      <h3>Emotional Realm Section1: Brain and Mind</h3>
      <p>The brain is an organ that serves as the center of the nervous system in all vertebrate and most invertebrate animals. 
        It is located in the head, usually close to the sensory organs for senses such as vision. 
        It is the most complex organ in a vertebrate's body.</p>
      <p>The mind is the set of cognitive faculties including consciousness, imagination, perception, thinking, judgement, language and memory, which is housed in the brain (sometimes including the central nervous system). 
        It is usually defined as the faculty of an entity's thoughts and consciousness.</p>

      <div>
      <iframe width="420" height="315" src="https://www.youtube.com/embed?v=pRFXSjkpKWA"></iframe>
      </div>
      <div>
      How much do we really know about the mind? <input></input>
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  state
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Template);