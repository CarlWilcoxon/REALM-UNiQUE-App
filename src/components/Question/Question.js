import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, TextField, Typography } from '@material-ui/core';
import styles from '../../themes/realmHomeTheme';

class Question extends Component {
  componentWillMount() {
    console.log(this.props.question);
    this.setState({
      answer: '',
    });
  }

  // questionChangeHandler=


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
    console.log('state:', this.state);
    console.log('this.props', this.props);
  };

  render() {
    // Deconstructing more props
    const { classes, question } = this.props;
    return (
      <>
        <Typography>{ question.content }</Typography>

        <TextField
          label="Answer"
          type="text"
          variant="outlined"
          multiline
          rows={2}
          className={classes.inputControlSection}
          value={this.state.answer}
          onChange={this.handleInputChangeFor('answer')}
          InputProps={{
            classes: {
              input: classes.input,
              root: classes.cssOutlinedInput,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(Question));
