import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core/';

import styles from '../../../../themes/adminTheme.js';

class SectionQuestions extends Component {
  state = {
    question: '',
    question_index: this.props.index,
  };

  handleQuestionChange = (event) => {
    // console.log('old state:', this.state);
    let newValue = event.target.value;
    this.setState({
      ...this.state,
      question: newValue,
    });

    this.props.dispatch({
      type: 'UPDATE_QUESTIONS',
      payload: {
        question: newValue,
        question_index: this.state.question_index,
      },
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        {/* QUESTION TYPE (ETC.)

        {/* SECTION DESCRIPTION */}
        <div>
          <TextField
            required
            label="Question"
            helperText="character limit: 140"
            inputProps={{ maxLength: 140 }}
            variant="outlined"
            className={classes.inputControlQuestion}
            value={this.props.local[`question${this.props.index}`]}
            onChange={this.props.changeHandler(`question${this.props.index}`)}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                className: classes.floatingLabelFocusStyle,
              },
            }}
            InputProps={{
              classes: {
                input: classes.input,
                root: classes.cssOutlinedInput,
                notchedOutline: classes.notchedOutline,
              },
            }}
            FormHelperTextProps={{
              classes: { root: classes.helperText },
            }}
          />
        </div>
      </>
    );
  }
}

SectionQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(
  connect(mapReduxStateToProps)(SectionQuestions)
);
