import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

class Template extends Component {



  state = {
    answer:'',
  }



  // onClickHandler = () => {
  //     ({ type: '',
  //   payload: {
  //     index: this.props.question_index,
  //     answer: this.state.answer,
  //     question: this.props.content } });  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div>
        {this.props.content}

        <TextField
        value={this.state.answer}
        onChange={this.handleChange} />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Template);