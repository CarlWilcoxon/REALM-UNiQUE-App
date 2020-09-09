import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core/';
import styles from '/Users/brunoreyes/Desktop/REALM-UNiQUE-App/src/themes/adminTheme.js';

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

class RealmQuestions extends Component {
  state = {
    // questionType: "",
    question: '',
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log('state:', this.state);
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
          required
          label="Question"
          helperText="character limit: 140"
          inputProps={{ maxLength: 140 }}
          variant="outlined"
          className={classes.inputControlQuestion}
          value={this.state.question}
          onChange={this.handleInputChangeFor('question')}
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
