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
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import Fade from 'react-reveal/Fade';

class AddNewRealmPage extends Component {
  state =
    this.props.state.realm.name === undefined
      ? {
          name: '',
          photoLink: '', //https://assets.entrepreneur.com/content/3x2/2000/1596647278-GettyImages-168491057.jpg?width=700&crop=2:1
          description: '',
          preview: false,
          questionInputs: [],
          icon: '',
        }
      : this.props.state.realm;
  // Be wary of constructors, they can over ride info

  populateNewRealmInputs = () => {
    this.setState({
      name: 'Financial',
      photoLink:
        'https://assets.entrepreneur.com/content/3x2/2000/1596647278-GettyImages-168491057.jpg?width=700&crop=2:1',
      description:
        'Understanding how financial wellness is interconnected with our other realms of wellness is the first step to gain a better relationship with money. In this realm we will learn how to create a responsible relationship with money, that both your current and future self will appreciate!',
    });
  };
  //Store new realm in a reducer
  storeRealm = (event) => {
    this.props.dispatch({
      type: 'SET_REALM',
      payload: {
        ...this.state,
      },
    });
    this.goNext();
  };

  //Navigate to next page
  goNext = () => this.props.history.push('/add-sections-to-realm');

  //CAPTURE INPUTS IN STATE

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
    console.log('state:', this.state);
  };

  handleQuestionChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      questions: {
        ...this.state.questions,
        [propertyName]: event.target.value,
      },
    });
    console.log('state:', this.state);
  };

  appendNewQuestion = () => {
    console.log('You clicked add new questions');
    this.setState({
      ...this.state,
      questions:
        this.state.questions === undefined ? {} : { ...this.state.questions },
      questionInputs: [...this.state.questionInputs, 'bob'],
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
              <h1
                className={classes.header}
                onClick={this.populateNewRealmInputs}
              >
                New Realm
              </h1>

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
                    {this.state.questionInputs.map((q, i) => (
                      <Grid
                        item
                        component={RealmQuestion}
                        index={i}
                        local={this.state.questions}
                        changeHandler={this.handleQuestionChangeFor}
                        key={i}
                      />
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

const mapStateToProps = (state) => ({
  state,
});

export default withStyles(styles)(connect(mapStateToProps)(AddNewRealmPage));
