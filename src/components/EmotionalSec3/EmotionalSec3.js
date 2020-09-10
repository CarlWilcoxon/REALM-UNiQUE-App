import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import {
  withStyles,
  Grid,
  Button,
  FormControl,
  // TextField,
  // RadioGroup,
  // FormControlLabel,
  // Radio,
  Box,
  // Paper,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
// import clsx from 'clsx';
class EmotionalSec3 extends Component {
  // saveAndContinue = () => this.props.history.push('/EmotionalSec4');
  // EmotionalSec4 doesn't exist
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
          
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <div>
              {/* <img classname={classes.realmImage} src={Emotional} alt="realm logo" /> */}
              <h3 className={classes.realmTitle}>Emotional Wellness Realm</h3>
              <h3 className={classes.sectionTitle}>
                Feedback
                <span className={classes.sectionOrder}> 3 of 10 </span>
              </h3>

              {/* <p className={classes.sectionDescription}>
                <br></br>
                <br></br>
              </p> */}
              <br></br>
            </div>
            <FormControl
              className={classes.formContainerSection}
              component="fieldset"
            >
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
                  //   onClick={this.saveAndContinue}
                >
                  Save & Complete Realm
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
export default withStyles(styles)(connect(mapStateToProps)(EmotionalSec3));

{
  /* <div className={classes.QandAContainerSection}>
                <div className={classes.sectionQuestion}>
                  Is the brain the mind?
                </div>
                <RadioGroup
                  aria-label="answer"
                  name="answer"
                  // value={1}
                  // onChange={handleChange}
                  className={classes.sectionRadio}
                >
                  <FormControlLabel
                    value="yes"
                    control={
                      <Radio
                        checkedIcon={
                          <span
                            className={clsx(classes.icon, classes.checkedIcon)}
                          />
                        }
                        icon={<span className={classes.icon} />}
                      />
                    }
                    label={
                      <span className={classes.sectionRadioButtonLabel}>
                        Yes
                      </span>
                    }
                    className={classes.sectionRadioButtonLabel}
                  />
                  <FormControlLabel
                    value="no"
                    control={
                      <Radio
                        checkedIcon={
                          <span
                            className={clsx(classes.icon, classes.checkedIcon)}
                          />
                        }
                        icon={<span className={classes.icon} />}
                      />
                    }
                    label={
                      <span className={classes.sectionRadioButtonLabel}>
                        No
                      </span>
                    }
                    className={classes.sectionRadioButtonLabel}
                  />
                  <FormControlLabel
                    value="I don't know"
                    control={
                      <Radio
                        checkedIcon={
                          <span
                            className={clsx(classes.icon, classes.checkedIcon)}
                          />
                        }
                        icon={<span className={classes.icon} />}
                      />
                    }
                    label={
                      <span className={classes.sectionRadioButtonLabel}>
                        Not Sures
                      </span>
                    }
                    className={classes.sectionRadioButtonLabel}
                  />
                </RadioGroup>
              </div> */
}
