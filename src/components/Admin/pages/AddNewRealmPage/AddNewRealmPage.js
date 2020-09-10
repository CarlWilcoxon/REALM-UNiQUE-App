import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RealmQuestion from '../../components/RealmQuestions/RealmQuestions';
import styles from '../../../../themes/adminTheme.js';
import {
  withStyles,
  FormControl,
  Grid,
  TextField,
  Button,
  // MenuItem,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
// import HelpIcon from '@material-ui/icons/Help';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
// import EcoIcon from '@material-ui/icons/Eco';
// import PlaceIcon from '@material-ui/icons/Place';
// import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import SpaIcon from '@material-ui/icons/Spa';
import Fade from 'react-reveal/Fade';

class AddNewRealmPage extends Component {
  state = {
    name: '',
    photoLink: '',
    description: '',
    preview: false,
    questionInputs: [],
    icon: '',
  };
  // Be wary of constructors, they can over ride info

  //Store new realm in a reducer
  storeRealm = (event) => {
    this.props.dispatch({
      type: "SET_REALM",
      payload: {
          ...this.state,
          questions: this.props.reduxState.newQuestions,
      },
  });
  this.goNext();
};

goNext =() => this.props.history.push('/add-sections-to-realm')
  //CAPTURE INPUTS IN STATE

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
    console.log('state:', this.state);
  };

  appendNewQuestion = () => {
    console.log('You clicked add new questions');
    this.setState({
      questionInputs: [...this.state.questionInputs, <RealmQuestion />],
    });
  };

  toggleCoverPreview = () => {
    console.log('You clicked the preview icon');
    this.setState({
      preview: !this.state.preview,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <form>
              <h1 className={classes.header}>New Realm</h1>

              <FormControl className={classes.formContainer}>
                <div>
                  <TextField
                    required
                    label="Realm Name"
                    helperText="character limit: 15"
                    variant="outlined"
                    inputProps={{ maxLength: 15 }}
                    className={classes.inputControl}
                    value={this.state.name}
                    onChange={this.handleInputChangeFor('name')}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        className: classes.floatingLabelFocusStyle,
                      },
                    }}
                    InputProps={{
                      classes: {
                        input: classes.input,
                        root: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    FormHelperTextProps={{
                      classes: { root: classes.helperText },
                    }}
                  />
                </div>
              </FormControl>

              {/* <FormControl className={classes.formContainer}>
                <div> */}
                  {/* <TextField
                    select
                    required
                    label="Realm Icon"
                    helperText=""
                    variant="outlined"
                    className={classes.inputControlIconSelector}
                    value={this.state.icon}
                    onChange={this.handleInputChangeFor('icon')}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        className: classes.floatingLabelFocusStyle,
                      },
                    }}
                    InputProps={{
                      classes: {
                        input: classes.input,
                        root: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    FormHelperTextProps={{
                      classes: { root: classes.helperText },
                    }}
                  > */}
                    {/* <MenuItem value="<AttachMoneyIcon/>">
                      <AttachMoneyIcon />{' '}
                    </MenuItem>
                    <MenuItem value="<FitnessCenterIcon/>">
                      <FitnessCenterIcon />{' '}
                    </MenuItem>
                    <MenuItem value="<EmojiEmotionsIcon/>">
                      <EmojiEmotionsIcon />{' '}
                    </MenuItem>
                    <MenuItem value="<EcoIcon/>">
                      {' '}
                      <EcoIcon />
                    </MenuItem>
                    <MenuItem value="<EmojiPeopleIcon/>">
                      <EmojiPeopleIcon />{' '}
                    </MenuItem>
                    <MenuItem value="<EmojiObjectsIcon/>">
                      <EmojiObjectsIcon />{' '}
                    </MenuItem>
                    <MenuItem value="<SpaIcon/>">
                      <SpaIcon />{' '}
                    </MenuItem>
                    <MenuItem value="<PlaceIcon/>">
                      <PlaceIcon />{' '}
                    </MenuItem> */}
                  {/* </TextField>
                </div>
              </FormControl> */}

              <div>
                <FormControl className={classes.formContainer}>
                  <div>
                    <TextField
                      required
                      label="Realm Cover Photo Link"
                      helperText=""
                      variant="outlined"
                      className={classes.inputControlLink}
                      value={this.state.photoLink}
                      onChange={this.handleInputChangeFor('photoLink')}
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          className: classes.floatingLabelFocusStyle,
                        },
                      }}
                      InputProps={{
                        classes: {
                          input: classes.input,
                          root: classes.cssOutlinedInput,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      FormHelperTextProps={{
                        classes: { root: classes.helperText },
                      }}
                    />
                    {this.state.photoLink !== '' ? (
                      <VisibilityIcon
                        onClick={this.toggleCoverPreview}
                        className={
                          this.state.preview
                            ? classes.clickedPreview
                            : classes.preview
                        }
                      />
                    ) : (
                      <VisibilityIcon className={classes.grayPreview} />
                    )}
                  </div>
                </FormControl>

                {this.state.preview && this.state.photoLink !== '' ? (
                  <FormControl className={classes.formContainerVideo}>
                    <Fade>
                      <h1 className={classes.previewTitle}>
                        Cover Photo Preview
                      </h1>
                      <div className={classes.sectionImageContainer}>
                        <div>
                          <img
                            className={classes.sectionImage}
                            src={this.state.photoLink}
                            alt="content"
                          />
                        </div>
                      </div>
                    </Fade>
                  </FormControl>
                ) : (
                  <></>
                )}
              </div>

              <FormControl className={classes.formContainer}>
                <div>
                  <TextField
                    required
                    label="Realm Description"
                    helperText=""
                    variant="outlined"
                    multiline
                    rows={9}
                    className={classes.inputControlContentDescription}
                    value={this.state.description}
                    onChange={this.handleInputChangeFor('description')}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        className: classes.floatingLabelFocusStyle,
                      },
                    }}
                    InputProps={{
                      classes: {
                        input: classes.input,
                        root: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    FormHelperTextProps={{
                      classes: { root: classes.helperText },
                    }}
                  />
                </div>
              </FormControl>

              {/* WHERE NEW QUESTION INPUTS GO */}

              {/* ADD NEW QUESTION BUTTON */}
              <div className="new-question">
                <FormControl className={classes.formContainerQuestion}>
                  <div id="new-question">
                    {this.state.questionInputs.map((questionInputs, index) => (
                      <RealmQuestion 
                      key={index}
                      index={index}/>
                    ))}
                  </div>
                </FormControl>
              </div>
              <div className={classes.adminButtonContainer}>
                <Button
                  variant="contained"
                  onClick={this.appendNewQuestion}
                  className={classes.adminButton}
                >
                  Add Question
                </Button>

                <Button
                  variant="contained"
                  type="submit"
                  name="submit"
                  onClick={this.storeRealm}
                  className={classes.adminButton}
                >
                  Select Sections for Realm
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </>
    );
  }
}

AddNewRealmPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(
  connect(mapReduxStateToProps)(AddNewRealmPage)
);
