import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import { withStyles, Grid, Button, FormControl, Box } from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Rating from '@material-ui/lab/Rating';

class EmotionalSec2 extends Component {
  saveAndContinue = () => this.props.history.push('/EmotionalSec3');
  saveAndReturn = () => this.props.history.push('/EmotionalHome');
  render() {
    const { classes } = this.props;

    const customIcons: {
      [index: string]: { icon: React.ReactElement, label: string },
    } = {
      1: {
        icon: <SentimentVeryDissatisfiedIcon className={classes.ratingIcon} />,
        label: 'Very Dissatisfied',
      },
      2: {
        icon: <SentimentDissatisfiedIcon className={classes.ratingIcon} />,
        label: 'Dissatisfied',
      },
      3: {
        icon: <SentimentSatisfiedIcon className={classes.ratingIcon} />,
        label: 'Neutral',
      },
      4: {
        icon: <SentimentSatisfiedAltIcon className={classes.ratingIcon} />,
        label: 'Satisfied',
      },
      5: {
        icon: <SentimentVerySatisfiedIcon className={classes.ratingIcon} />,
        label: 'Very Satisfied',
      },
    };
    function IconContainer(props: IconContainerProps) {
      const { value, ...other } = props;
      return <span {...other}>{customIcons[value].icon}</span>;
    }
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
                Brain & Mind & Carbohydrates{' '}
                <span className={classes.sectionOrder}> 2 of 10 </span>
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
                  How did you feel about this content?
                </div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    name="customized-icons"
                    // defaultValue={2}
                    getLabelText={(value: number) => customIcons[value].label}
                    IconContainerComponent={IconContainer}
                  />
                </Box>
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
