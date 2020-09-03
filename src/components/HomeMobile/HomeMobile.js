import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomeMobile extends Component {

goEmotional =() => this.props.history.push('/EmotionalHome')

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <h3>Choose a Realm to Expore:</h3>
        <div> 
          <button onClick={this.goEmotional}>Realm 1: Emotional</button>
          <button>Realm 2: Nutritional</button>
        </div>
        <div>
          <button>Realm 3: Physical</button>
          <button>Realm 4: Spiritual</button> 
        </div>
        <div>
          <button>Realm 5: Financial</button>
          <button>Realm 6: Environmental</button>
        </div>
        <div>
          <button>Realm 7: Social</button>
          <button>Realm 8: Intellectual</button> 
        </div>
        
        
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomeMobile);
