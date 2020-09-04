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
        { this.props.reduxState.section !== undefined ?
          <h3>{this.props.reduxState.section.title}</h3>
        :
        'loading'}

        { this.props.reduxState.section !== undefined ?
          <p>{this.props.reduxState.section.description}</p>
        :
        'loading'}

        <div>{ this.props.reduxState.section !== undefined ?
          <iframe width="420" height="315" src={this.props.reduxState.section.video_link}></iframe>
        :
        'loading'}
        </div>

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


