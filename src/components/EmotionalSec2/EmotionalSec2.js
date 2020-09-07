import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import {
  withStyles,
  Grid,
  Button,
  FormControl,
  TextField,
  // Paper,
} from '@material-ui/core';

class EmotionalSec2 extends Component {
  saveAndContinue = () => this.props.history.push('/EmotionalSec3');
  saveAndReturn = () => this.props.history.push('/EmotionalHome');
  render() {
    const { classes } = this.props;
    return (
      <div>
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
              <h3 className={classes.realmTitle}>Emotional Wellness Realm</h3>
              <h3 className={classes.sectionTitle}>
                Brain & Mind & Carbohydrates
              </h3>
              <div className={classes.sectionCoverContainer}>
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

              <p className={classes.sectionDescription}>
                The brain is an organ that serves as the center of the nervous
                system in all vertebrate and most invertebrate animals. It is
                located in the head, usually close to the sensory organs for
                senses such as vision. It is the most complex organ in a
                vertebrate's body.<br></br>
                <br></br> The mind is the set of cognitive faculties including
                consciousness, imagination, perception, thinking, judgement,
                language and memory, which is housed in the brain (sometimes
                including the central nervous system). It is usually defined as
                the faculty of an entity's thoughts and consciousness.
              </p>
              <br></br>
            </div>
            <FormControl className={classes.formContainerSection}>
              <div className={classes.QandAContainerSection}>
                <div className={classes.sectionQuestion}>
                  How much do we really know about the mind?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  multiline
                  rows={2}
                  className={classes.inputControlSection}
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
              <div className={classes.realmButtonContainer}>
                <Button
                  className={classes.realmButton}
                  onClick={this.saveAndContinue}
                >
                  Save & Continue
                </Button>{' '}
                <Button
                  className={classes.realmButton}
                  onClick={this.saveAndReturn}
                >
      Save & Exit
                </Button>
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(EmotionalSec2));
