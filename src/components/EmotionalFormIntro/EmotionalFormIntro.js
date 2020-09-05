import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import { withStyles, Grid, Button, Paper } from '@material-ui/core';

class EmotionalFormIntro extends Component {
  goBack = () => this.props.history.push('/EmotionalHome');
  start = () => this.props.history.push('/EmotionalForm');
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          spacing={5}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid
            // className={classes.leftSideFlex}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <h3 className={classes.realmTitle}>Realm Form Introduction</h3>
            <div className={classes.formDescriptionContainer}>
              <p className={classes.formDescription}>
                Please fill out these preliminary questions regarding emotional
                wellness before beginning the realm course.
              </p>
              <p className={classes.estimatedTimeOfCompletion}>
                Estimated time to complete:{' '}
                <span className={classes.boldTOC}>5-8 minutes</span>
              </p>
            </div>
          </Grid>{' '}
          <div className={classes.formButtonContainer}>
            <Button className={classes.realmButton} onClick={this.start}>
              Start Form
            </Button>{' '}
            <Button className={classes.realmButton} onClick={this.goBack}>
              Back
            </Button>
          </div>
          {/*end container */}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(EmotionalFormIntro));
