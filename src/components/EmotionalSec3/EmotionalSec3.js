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
// import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import clsx from 'clsx';
class EmotionalSec3 extends Component {
  // saveAndContinue = () => this.props.history.push('/EmotionalSec4');
  // EmotionalSec4 doesn't exist
  saveAndReturn = () => this.props.history.push('/EmotionalHome');
  render() {
    const { classes } = this.props;
    // const customIcons: {
    //   [index: string]: { icon: React.ReactElement, label: string },
    // } = {
    //   1: {
    //     icon: ,
    //     label: 'Very Dissatisfied',
    //   },
    //   2: {
    //     icon: <SentimentDissatisfiedIcon className={classes.ratingIcon} />,
    //     label: 'Dissatisfied',
    //   },
    //   3: {
    //     icon: <SentimentSatisfiedIcon className={classes.ratingIcon} />,
    //     label: 'Neutral',
    //   },
    //   4: {
    //     icon: <SentimentSatisfiedAltIcon className={classes.ratingIcon} />,
    //     label: 'Satisfied',
    //   },
    //   5: {
    //     icon: <SentimentVerySatisfiedIcon className={classes.ratingIcon} />,
    //     label: 'Very Satisfied',
    //   },
    // };

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
              <h3 className={classes.realmTitle}>Emotional Wellness Realm</h3>
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
                <RadioGroup
                  aria-label="answer"
                  name="answer"
                  // value={1}
                  // onChange={handleChange}
                  row
                  className={classes.sectionRadio}
                >
                  <FormControlLabel
                    labelPlacement="top"
                    value={1}
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
                            className={clsx(classes.icon, classes.checkedIcon)}
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
                            className={clsx(classes.icon, classes.checkedIcon)}
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
                            className={clsx(classes.icon, classes.checkedIcon)}
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
                            className={clsx(classes.icon, classes.checkedIcon)}
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
                />
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
}
