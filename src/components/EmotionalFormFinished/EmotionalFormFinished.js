import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import { withStyles, Grid, Button } from '@material-ui/core';

class EmotionalFormFinished extends Component {
  goBack = () => this.props.history.push('/EmotionalForm');
  continue = () => this.props.history.push('/EmotionalSec1');

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          // direction="column"
        >
          <Grid
            // className={classes.leftSideFlex}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <h3 className={classes.realmTitle}>Thank You!</h3>
            <div className={classes.formDescriptionContainerThankYou}>
              <p className={classes.formDescription}>
                We appreciate your participation in filling out our realm form.
                Your answers have been saved. Click continue to start the realm
                course.
              </p>
            </div>
          </Grid>{' '}
          <div className={classes.bottomNav}>
            <Button className={classes.realmButton} onClick={this.continue}>
              Start Realm Course
            </Button>{' '}
            <Button className={classes.realmButton} onClick={this.goBack}>
              Back to Realm
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
export default withStyles(styles)(
  connect(mapStateToProps)(EmotionalFormFinished)
);
