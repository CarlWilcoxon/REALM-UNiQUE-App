import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeMobile extends Component {

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <h3>Choose a Realm to Expore:</h3>
        <div> 
          <button>Emotional</button>
          <button>Nutritional</button>
        </div>
        <div>
          <button>Physical</button>
          <button>Spiritual</button> 
        </div>
        <div>
          <button>Financial</button>
          <button>Environmental</button>
        </div>
        <div>
          <button>Social</button>
          <button>Intellectual</button> 
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
