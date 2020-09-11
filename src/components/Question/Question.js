import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, TextField, Typography } from '@material-ui/core';
import styles from '../../themes/realmHomeTheme';

class Question extends Component {

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
          value={this.props.local[`answer${question.id}`]}
          onChange={this.props.changeHandler(`answer${question.id}`)}
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
