import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Emotional from './emotional.png';
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

class EmotionalHome extends Component {
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
          <div>
            {/* <img classname={classes.realmImage} src={Emotional} alt="realm logo" /> */}

            <div className={classes.realmCoverContainer}>
              {/* <Paper square={false} className={classes.realmCoverPaper}> */}
              <div>
                <img
                  className={classes.realmCover}
                  src="images/emotionalRealmCover.jpg"
                  // src="images/emotions.png"
                  alt="realm logo"
                />
              </div>
              {/* </Paper> */}
            </div>
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
            <div className={classes.realmTableofContent}>
              {/* <div className={classes.realmTableofContentTitle}>Summary </div> */}
              <div className={classes.realmTableofContentTitle}>Sections </div>

              <div className={classes.realmTableofContentSectionContainer}>
                <div className={classes.realmTableofContentSection}>
                  Emotional Form{' '}
                </div>
                <div className={classes.realmTableofContentSectionIcon}>
                  <CheckBoxIcon />
                </div>
              </div>
              <div className={classes.realmTableofContentSectionContainer}>
                <div className={classes.realmTableofContentSection}>
                  Brain & Mind{' '}
                </div>
                <div className={classes.realmTableofContentSectionIcon}>
                  <CheckBoxIcon />
                </div>
              </div>
              <div className={classes.realmTableofContentSectionContainer}>
                <div className={classes.realmTableofContentSection}>
                  Thoughts & Memories{' '}
                </div>
                <div className={classes.realmTableofContentSectionIcon}>
                  <CheckBoxOutlineBlankIcon />
                </div>
              </div>
              <div className={classes.realmTableofContentSectionContainer}>
                <div className={classes.realmTableofContentSection}>Sleep </div>
                <div className={classes.realmTableofContentSectionIcon}>
                  <LockIcon />
                </div>
              </div>
              <div className={classes.realmTableofContentSectionContainer}>
                <div className={classes.realmTableofContentSection}>
                  Relationship with Self & Self-Awareness{' '}
                </div>
                <div className={classes.realmTableofContentSectionIcon}>
                  <LockIcon />
                </div>
              </div>
              <div className={classes.realmTableofContentSectionContainer}>
                <div className={classes.realmTableofContentSection}>
                  Thoughts & Memories{' '}
                </div>
                <div className={classes.realmTableofContentSectionIcon}>
                  <LockIcon />
                </div>
              </div>
              <div className={classes.realmTableofContentSectionContainer}>
                <div className={classes.realmTableofContentSection}>
                  Relationship & Awareness of Others
                </div>
                <div className={classes.realmTableofContentSectionIcon}>
                  <LockIcon />
                </div>
              </div>
              <div className={classes.realmTableofContentSectionContainer}>
                <div className={classes.realmTableofContentSection}>
                  Coping Mechanisms
                </div>
                <div className={classes.realmTableofContentSectionIcon}>
                  <LockIcon />
                </div>
              </div>
              {/* <div className={classes.realmTableofContentSection}>
                Section 1: Brain and Mind <CheckBoxIcon />
                {/* <div>
                  <CheckBoxOutlineBlankIcon />
                </div> */}
              {/* </div>
              <div className={classes.realmTableofContentSectionContainer}>
                <div className={classes.realmTableofContentSection}>
                  Section 2:<br></br> Thoughts and Memories{' '}
                </div>
                <div className={classes.realmTableofContentSectionIcon}>
                  <LockIcon />
                </div>
              </div>
              <div className={classes.realmTableofContentSection}>
                Section 3: Sleep
              </div>
              <div className={classes.realmTableofContentSection}>
                Section 4: Relationship with Self and Self Awareness
              </div>
              <div className={classes.realmTableofContentSection}>
                Section 5: Relationship with Others and Awareness of Others
              </div>
              <div className={classes.realmTableofContentSection}>
                Section 6: Coping Mechanisms
              </div> */}
              <div className={classes.realmButtonContainer}>
                <Button className={classes.realmButton} onClick={this.start}>
                  Start
                </Button>{' '}
                <Button className={classes.realmButton} onClick={this.goBack}>
                  Back
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(EmotionalHome));
