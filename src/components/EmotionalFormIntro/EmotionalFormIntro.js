import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import {
  withStyles,
  Grid,
  Button,
  // Paper,
} from '@material-ui/core';

class EmotionalFormIntro extends Component {
  goBack = () => this.props.history.push('/EmotionalHome');
  start = () => this.props.history.push('/EmotionalForm');
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h3 className={classes.realmTitle}>Realm Form Introduction</h3>
        <p className={classes.realmDescription}>
          Please fill out these preliminary questions regarding emotional
          wellness before beginning the realm course.
        </p>
        <p className={classes.realmEsitmatedTimeOfCompletion}>
          Estimated time to complete:{' '}
          <b className={classes.bold}>5-8 minutes</b> .
        </p>
        <div className={classes.realmButtonContainer}>
          <Button className={classes.realmButton} onClick={this.start}>
            Start Form
          </Button>{' '}
          <Button className={classes.realmButton} onClick={this.goBack}>
            Back
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(EmotionalFormIntro));
