import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import {
  withStyles,
  Grid,
  Button,
  FormControl,
  TextField,
  Typography,
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
class RealmFeedback extends Component {

  saveAndReturn = () => this.props.history.push('/home');
  render() {
    const { classes, realm } = this.props;
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
    function IconContainer(props: IconContainerProps) {
      const { value, ...other } = props;
      return <span {...other}>{customIcons[value].icon}</span>;
    }
    return (
      <div>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div>
              {/* <img classname={classes.realmImage} src={Emotional} alt="realm logo" /> */}
              { realm.realm_name !== undefined ? (
            <Grid item>
              <Typography variant="h3" className={classes.realmTitle} gutterBottom>
                Realm of {realm.realm_name} Wellness
              </Typography>
            </Grid>
          ) : '' }
              <h3 className={classes.sectionTitle}>
                Feedback
              </h3>

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
                <CssTextField className={classes.inputControl} multiline />
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
  realm: state.realm,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(RealmFeedback));

