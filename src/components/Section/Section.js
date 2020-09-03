import React, { Component } from 'react';
import { connect } from 'react-redux';

class Section extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_SECTION',
    payload: {
      sectionId: this.props.match.params.id } });
  }

  render() {
    return (
      <div>
        <h1>THIS IS SECTION {this.props.match.params.id}</h1>
        <h3></h3>
        { this.props.reduxState.section !== undefined ?
          JSON.stringify(this.props.reduxState.section)
        :
        'loading'}

      </div>
    );
  }
}


const mapStateToProps = (reduxState) => ({
  user: reduxState.user,
  reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Section);