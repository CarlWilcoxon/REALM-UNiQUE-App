import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core/';
import styles from '../../themes/realmHomeTheme';


// const questionTypes = [
//     {
//         value: "Open-Ended",
//         label: "Open-Ended",
//     }
// ];

class FormQuestions extends Component {
  state = {
    // questionType: "",
    question: '',
  };


  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.formContainer}>
          <div className={classes.QandAContainer}>
            <div className={classes.formQuestion}>
              {this.props.question.content} How many negative thoughts do you think about yourself?
            </div>
            <TextField
              // label="What do you think about most of the time?"
              // helperText="Required"
              variant="outlined"
              // multiline
              // rows={2}
              className={classes.inputControl}
              // value={this.state.password}
              // onChange={this.handleInputChangeFor('password')}
              InputProps={{
                classes: {
                  input: classes.input,
                  root: classes.cssOutlinedInput,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </div>
        </FormControl>
      </div>
    );
  }
}

FormQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(
  connect(mapReduxStateToProps)(FormQuestions)
);
