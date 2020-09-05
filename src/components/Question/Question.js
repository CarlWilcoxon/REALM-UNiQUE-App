import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

class Question extends Component {

  componentWillMount() {
    console.log(this.props.question)
    this.setState ({
      answer: '',
    })
  }


  // onClickHandler = () => {
  //     ({ type: '',
  //   payload: {
  //     index: this.props.question_index,
  //     answer: this.state.answer,
  //     question: this.props.content } });  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
    console.log("state:", this.state);
  };

  render() {
    return (
      <div>
        { this.props.question[0].content !== undefined ?
          <p>{this.props.question[0].content}</p>
        :
        'loading'}

        <TextField
        label="Answer"
        type="text"
        value={this.state.answer}
        onChange={this.handleInputChangeFor("answer")}
         />
{/*
<TextField
                    required
                    label="Image Link"
                    type="text"
                    value={this.state.imageLink}
                    onChange={this.handleInputChangeFor("imageLink")}
                    className={classes.textField}
                    margin="normal"
                  /> */}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Question);