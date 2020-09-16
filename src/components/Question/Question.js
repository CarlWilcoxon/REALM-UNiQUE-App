import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FormControl,
  withStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import styles from '../../themes/realmHomeTheme';

class Question extends Component {
  render() {
    // Deconstructing more props
    const { classes, question } = this.props;
    return (
      <>
        <FormControl className={classes.formContainerSection}>
          <div className={classes.QandAContainerSection}>
            <div className={classes.sectionQuestion}>
              <Typography>{question.content}</Typography>
            </div>
            <TextField
              id="standard-name"
              label="Answer"
              type="text"
              multiline
              className={classes.inputControlSection}
              value={this.props.local[`answer${question.id}`]}
              onChange={this.props.changeHandler(`answer${question.id}`)}
              margin="normal"
            />{" "}
          </div>
        </FormControl>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(Question));
