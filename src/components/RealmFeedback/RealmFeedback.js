import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import {
  withStyles,
  Grid,
  Button,
  FormControl,
  TextField,
  // Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  // Paper,
} from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import clsx from 'clsx';

const CssTextField = withStyles({
  root: {
    color: '#1f3556',
    '& label.Mui-focused': {
      color: '#1f3556',
    },
    '& label.Mui': { color: '#1f3556' },
    '& .MuiInput-underline:after': {
      borderBottom: '#1f3556 solid 2px',
      color: '#1f3556',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '#1f3556 solid 1px',
      color: '#1f3556',
    },
  },
})(TextField);

class EmotionalSec3 extends Component {
  state = {
    feedbackScore: '3',
    feedback: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_REALM',
      payload: {
        realmId: this.props.match.params.realm,
      },
    });
  }

  handleRadioChange = (event) => {
    this.setState({
      ...this.state,
      feedbackScore: event.target.value,
    });
  };

  handleFeedbackChange = (event) => {
    this.setState({
      ...this.state,
      feedback: event.target.value,
    });
  };

  // saveAndContinue = () => this.props.history.push('/EmotionalSec4');
  // EmotionalSec4 doesn't exist
  saveAndReturn = () => {
    this.props.dispatch({
      type: 'SUBMIT_FEEDBACK',
      payload: {
        state: this.state,
        realmId: this.props.match.params.realm,
      },
    });

    this.props.history.push('/home');
  };

  render() {
    const { classes } = this.props;
    // function IconContainer(props: IconContainerProps) {
    //   const { value, ...other } = props;
    //   return <span {...other}>{customIcons[value].icon}</span>;
    // }
    return (
      <div>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div>
              {/* <img classname={classes.realmImage} src={Emotional} alt="realm logo" /> */}
              {this.props.state.realm.realm_name !== undefined ? (
                <Grid item>
                  <h3 className={classes.realmTitle}>
                    Realm of {this.props.state.realm.realm_name} Wellness
                  </h3>
                </Grid>
              ) : (
                ''
              )}
              <h3 className={classes.sectionTitle}>
                Feedback
                <span className={classes.sectionOrder}> </span>
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
                  How did you feel about the course?
                </div>
                {/* <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    name="customized-icons"
                    // defaultValue={2}
                    getLabelText={(value: number) => customIcons[value].label}
                    IconContainerComponent={IconContainer}
                  />
                </Box> */}
                <div className={classes.radioContainer}>
                  <RadioGroup
                    aria-label="Feedback"
                    name="Feedback"
                    value={this.state.feedbackScore}
                    defaultValue={this.state.feedbackScore}
                    onChange={this.handleRadioChange}
                    row
                    className={classes.sectionRadio}
                  >
                    <FormControlLabel
                      labelPlacement="top"
                      value="1"
                      control={
                        <Radio
                          checkedIcon={
                            <span
                              className={clsx(
                                classes.icon,
                                classes.checkedIcon
                              )}
                            />
                          }
                          icon={<span className={classes.icon} />}
                        />
                      }
                      label={
                        <span className={classes.sectionRadioButtonLabel}>
                          <SentimentVeryDissatisfiedIcon
                            className={classes.ratingIcon}
                          />
                        </span>
                      }
                      className={classes.sectionRadioButtonLabel}
                    />
                    <FormControlLabel
                      value="2"
                      labelPlacement="top"
                      control={
                        <Radio
                          checkedIcon={
                            <span
                              className={clsx(
                                classes.icon,
                                classes.checkedIcon
                              )}
                            />
                          }
                          icon={<span className={classes.icon} />}
                        />
                      }
                      label={
                        <span className={classes.sectionRadioButtonLabel}>
                          <SentimentDissatisfiedIcon
                            className={classes.ratingIcon}
                          />
                        </span>
                      }
                      className={classes.sectionRadioButtonLabel}
                    />
                    <FormControlLabel
                      labelPlacement="top"
                      value="3"
                      control={
                        <Radio
                          checkedIcon={
                            <span
                              className={clsx(
                                classes.icon,
                                classes.checkedIcon
                              )}
                            />
                          }
                          icon={<span className={classes.icon} />}
                        />
                      }
                      label={
                        <span className={classes.sectionRadioButtonLabel}>
                          <SentimentSatisfiedIcon
                            className={classes.ratingIcon}
                          />
                        </span>
                      }
                      className={classes.sectionRadioButtonLabel}
                    />
                    <FormControlLabel
                      labelPlacement="top"
                      value="4"
                      control={
                        <Radio
                          checkedIcon={
                            <span
                              className={clsx(
                                classes.icon,
                                classes.checkedIcon
                              )}
                            />
                          }
                          icon={<span className={classes.icon} />}
                        />
                      }
                      label={
                        <span className={classes.sectionRadioButtonLabel}>
                          <SentimentSatisfiedAltIcon
                            className={classes.ratingIcon}
                          />
                        </span>
                      }
                      className={classes.sectionRadioButtonLabel}
                    />
                    <FormControlLabel
                      labelPlacement="top"
                      value="5"
                      control={
                        <Radio
                          checkedIcon={
                            <span
                              className={clsx(
                                classes.icon,
                                classes.checkedIcon
                              )}
                            />
                          }
                          icon={<span className={classes.icon} />}
                        />
                      }
                      label={
                        <span className={classes.sectionRadioButtonLabel}>
                          <SentimentVerySatisfiedIcon
                            className={classes.ratingIcon}
                          />
                        </span>
                      }
                      className={classes.sectionRadioButtonLabel}
                    />
                  </RadioGroup>

                  <CssTextField
                    className={classes.inputControl}
                    label="Feedback"
                    multiline
                    value={this.state.feedback}
                    onChange={this.handleFeedbackChange}
                  />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className={classes.realmButtonContainer}>
                  <Button
                    className={classes.realmButton}
                    onClick={this.saveAndReturn}
                  >
                    Save & Complete Realm
                  </Button>
                  {/* <Button
                  className={classes.realmButton}
                  onClick={this.saveAndReturn}
                >
                  Save & Exit
                </Button> */}
                </div>
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
}
