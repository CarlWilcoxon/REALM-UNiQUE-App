import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withStyles,
  // FormControl,
  TextField,
} from '@material-ui/core/';
// import MenuItem from "@material-ui/core/MenuItem";
import styles from '../../../../themes/adminTheme.js';

// const styles = (theme) => ({
//   textField: {
//     width: 400,
//     margin: '10px',
//   },
// });

// const questionTypes = [
//     {
//         value: "Open-Ended",
//         label: "Open-Ended",
//     }
// ];

class SectionQuestions extends Component {
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
      <>
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
          {/* <div class="mdc-text-field-character-counter">0 / 140</div> */}
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
