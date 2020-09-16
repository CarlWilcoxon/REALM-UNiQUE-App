import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core/';
import styles from '../../themes/realmHomeTheme';

class FormQuestions extends Component {
  state = {
    question: '',
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.formContainer}>
          <div className={classes.QandAContainer}>
            <div className={classes.formQuestion}>
              {this.props.question.content} How many negative thoughts do you
              think about yourself?
            </div>
            <TextField
              variant="outlined"
              className={classes.inputControl}
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

export default withStyles(styles)(connect(mapReduxStateToProps)(FormQuestions));
