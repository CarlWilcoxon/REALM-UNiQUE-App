import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import {
  withStyles,
  Grid,
  Button,
  // Paper,
} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LockIcon from '@material-ui/icons/Lock';

class AutoRealmHome extends Component {
  goBack = () => this.props.history.push('/');
  start = () => this.props.history.push('/EmotionalFormIntro');

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid
          // className={classes.leftSideFlex}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <Grid container className={classes.realmCoverContainer}>
            {/* cards are what you were looking for
            <Paper square={false} className={classes.realmCoverPaper}> */}
            <Grid item>
              <img
                className={classes.realmCover}
                src="images/emotionalRealmCover.jpg"
                // src="images/emotions.png"
                alt="realm logo"
              />
            </Grid>
            {/* </Paper> */}
          </Grid>
          <h3 className={classes.realmTitle}>Realm: Emotional Wellness</h3>
          <p className={classes.realmDescription}>
            Emotional health is an important part of overall health. People
            who are emotionally healthy are in control of their thoughts,
            feelings, and behaviors. They are able to cope with life’s
            challenges. They can keep problems in perspective and bounce back
            from setbacks. They feel good about themselves and have good
            relationships.
          </p>
          <br></br>
          <p className={classes.realmDescription}>
            Being emotionally healthy does not mean you are happy all the
            time. It means you are aware of your emotions. You can deal with
            them, whether they are positive or negative. Emotionally healthy
            people still feel stress, anger, and sadness. But they know how to
            manage their negative feelings. They can tell when a problem is
            more than they can handle on their own. They also know when to
            seek help from their doctor.
          </p>
          <Grid className={classes.realmTableofContent}>
            {/* <Grid className={classes.realmTableofContentTitle}>Summary </Grid> */}
            <Grid className={classes.realmTableofContentTitle}>Sections </Grid>

            <Grid className={classes.realmTableofContentSectionContainer}>
              <Grid className={classes.realmTableofContentSection}>
                Emotional Form{' '}
              </Grid>
              <Grid className={classes.realmTableofContentSectionIcon}>
                <CheckBoxIcon />
              </Grid>
            </Grid>
            <Grid className={classes.realmTableofContentSectionContainer}>
              <Grid className={classes.realmTableofContentSection}>
                Brain & Mind{' '}
              </Grid>
              <Grid className={classes.realmTableofContentSectionIcon}>
                <CheckBoxIcon />
              </Grid>
            </Grid>
            <Grid className={classes.realmTableofContentSectionContainer}>
              <Grid className={classes.realmTableofContentSection}>
                Thoughts & Memories{' '}
              </Grid>
              <Grid className={classes.realmTableofContentSectionIcon}>
                <CheckBoxOutlineBlankIcon />
              </Grid>
            </Grid>
            <Grid className={classes.realmTableofContentSectionContainer}>
              <Grid className={classes.realmTableofContentSection}>Sleep </Grid>
              <Grid className={classes.realmTableofContentSectionIcon}>
                <LockIcon />
              </Grid>
            </Grid>
            <Grid className={classes.realmTableofContentSectionContainer}>
              <Grid className={classes.realmTableofContentSection}>
                Relationship with Self & Self-Awareness{' '}
              </Grid>
              <Grid className={classes.realmTableofContentSectionIcon}>
                <LockIcon />
              </Grid>
            </Grid>
            <Grid className={classes.realmTableofContentSectionContainer}>
              <Grid className={classes.realmTableofContentSection}>
                Thoughts & Memories{' '}
              </Grid>
              <Grid className={classes.realmTableofContentSectionIcon}>
                <LockIcon />
              </Grid>
            </Grid>
            <Grid className={classes.realmTableofContentSectionContainer}>
              <Grid className={classes.realmTableofContentSection}>
                Relationship & Awareness of Others
              </Grid>
              <Grid className={classes.realmTableofContentSectionIcon}>
                <LockIcon />
              </Grid>
            </Grid>
            <Grid className={classes.realmTableofContentSectionContainer}>
              <Grid className={classes.realmTableofContentSection}>
                Coping Mechanisms
              </Grid>
              <Grid className={classes.realmTableofContentSectionIcon}>
                <LockIcon />
              </Grid>
            </Grid>
            <Grid className={classes.realmButtonContainer}>
              <Button className={classes.realmButton} onClick={this.start}>
                Start
              </Button>{' '}
              <Button className={classes.realmButton} onClick={this.goBack}>
                Back
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(AutoRealmHome));
