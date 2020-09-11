import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core/';
import styles from '../../../../themes/adminTheme.js';


// const questionTypes = [
//     {
//         value: "Open-Ended",
//         label: "Open-Ended",
//     }
// ];

class RealmQuestions extends Component {
  state = {
    // questionType: "",
    question: "",
    question_index: this.props.index,
};



handleQuestionChange = (event) => {
    console.log("old state:", this.state);
    let newValue = event.target.value;
    this.setState({
      ...this.state,
      question : newValue,
    })

    this.props.dispatch({
      type: 'UPDATE_QUESTIONS',
      payload: {
        question: newValue,
        question_index: this.state.question_index,
      }})
  };


  render() {
    const { classes } = this.props;
    return (
      <div>
                {/* QUESTION TYPE (ETC.)
                        <div>
                            <TextField
                                select
                                required
                                label="Question Type"
                                className={classes.textField}
                                value={this.state.questionType}
                                onChange={this.handleInputChangeFor("questionType")}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                margin="normal"
                            >
                                {type.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div> */}
        {/* SECTION DESCRIPTION */}

        <TextField
        className={classes.textField}
        margin="normal"required
        variant="outlined"
        label="Question"
        value={this.state.question}
        onChange={this.handleQuestionChange}
        className={classes.textField}
        margin="normal"
          required
          label="Question"
          helperText="character limit: 140"
          inputProps={{ maxLength: 140 }}
          variant="outlined"
          className={classes.inputControlQuestion}
          value={this.state.question}
          onChange={this.handleQuestionChange}
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
    );
  }
}

RealmQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(
  connect(mapReduxStateToProps)(RealmQuestions)
);
