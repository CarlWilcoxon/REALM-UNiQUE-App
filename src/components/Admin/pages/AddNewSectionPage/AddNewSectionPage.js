import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SectionQuestion from '../../components/SectionQuestions/SectionQuestions';
import {
  withStyles,
  FormControl,
  Grid,
  TextField,
  Button,
  MenuItem,
} from '@material-ui/core';
import styles from '/Users/brunoreyes/Desktop/REALM-UNiQUE-App/src/themes/adminTheme.js';
import VisibilityIcon from '@material-ui/icons/Visibility';
// import HelpIcon from '@material-ui/icons/Help';
import Fade from 'react-reveal/Fade';
const type = [
  {
    value: 2,
    label: 'Text',
  },
  {
    value: 1,
    label: 'Video',
  },
  {
    value: 3,
    label: 'Image',
  },
];

class AddNewSectionPage extends Component {
  state = {
    title: '',
    type: '',
    description: '',
    questions: [],
    imageLink: '',
    videoLink: '',
    textContent: '',
    questionInputs: [],
    preview: false,
  };

  //Packaging new section details and sending to saga to send to database
  submitSection = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'SUBMIT_SECTION',
      // payload: {
      //   title: this.state.title,
      //   type: this.state.type,
      //   description: this.state.description,
      //   ///questions need to be added to payload
      // },

      payload: this.state,
    });
  };

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
      questionInputs: [...this.state.questionInputs, <SectionQuestion />],
    });
  };
  toggleResourcePreview = () => {
    console.log('You clicked the preview icon');
    this.setState({
      preview: !this.state.preview,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <form>
              <h1 className={classes.header}>New Section</h1>
              <FormControl className={classes.formContainer}>
                <div>
                  <TextField
                    required
                    label="Section Name"
                    helperText="character limit: 30"
                    variant="outlined"
                    className={classes.inputControl}
                    value={this.state.title}
                    onChange={this.handleInputChangeFor('title')}
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
              <FormControl className={classes.formContainer}>
                <div>
                  <TextField
                    select
                    required
                    label="Resource Type"
                    helperText=""
                    variant="outlined"
                    className={classes.inputControl}
                    value={this.state.type}
                    onChange={this.handleInputChangeFor('type')}
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
                  >
                    {' '}
                    {type.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </FormControl>

              {/* 1=video, 2=text, 3=image */}
              {this.state.type === 1 ? (
                <FormControl className={classes.formContainer}>
                  <div>
                    <TextField
                      required
                      label="Video Link"
                      type="text"
                      helperText=""
                      variant="outlined"
                      className={classes.inputControlLink}
                      value={this.state.videoLink}
                      onChange={this.handleInputChangeFor('videoLink')}
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
                    {this.state.videoLink !== '' ? (
                      <VisibilityIcon
                        onClick={this.toggleResourcePreview}
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

                  {this.state.preview && this.state.videoLink !== '' ? (
                    <FormControl className={classes.formContainerVideo}>
                      {' '}
                      <Fade>
                        <h1 className={classes.previewTitle}>
                          Resource Preview
                        </h1>
                        <div className={classes.sectionVideoContainer}>
                          <iframe
                            title={'section video'}
                            frameborder="0"
                            className={classes.sectionVideo}
                            // src="https://www.youtube.com/embed/pRFXSjkpKWA"
                            src={
                              this.state.videoLink
                                .replace('watch?v=', 'embed/')
                                .split('&feature=emb_title')[0]
                            }
                            // https://www.youtube.com/watch?v=pRFXSjkpKWA&feature=emb_title
                          ></iframe>
                        </div>{' '}
                      </Fade>
                    </FormControl>
                  ) : (
                    <></>
                  )}
                  {/* <div>{JSON.stringify()} </div> */}
                </FormControl>
              ) : this.state.type === 2 ? (
                <div>
                  <FormControl className={classes.formContainer}>
                    <div>
                      <TextField
                        required
                        label="Text Content"
                        helperText=""
                        variant="outlined"
                        multiline
                        rows={18}
                        className={classes.inputControlTextContent}
                        value={this.state.textContent}
                        onChange={this.handleInputChangeFor('textContent')}
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
                </div>
              ) : this.state.type === 3 ? (
                <div>
                  <FormControl className={classes.formContainer}>
                    <div>
                      <TextField
                        required
                        label="Image Link"
                        helperText=""
                        variant="outlined"
                        className={classes.inputControlLink}
                        value={this.state.imageLink}
                        onChange={this.handleInputChangeFor('imageLink')}
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
                      {this.state.imageLink !== '' ? (
                        <VisibilityIcon
                          onClick={this.toggleResourcePreview}
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
                  {this.state.preview && this.state.imageLink !== '' ? (
                    <FormControl className={classes.formContainerVideo}>
                      <Fade>
                        <h1 className={classes.previewTitle}>
                          Resource Preview
                        </h1>
                        <div className={classes.sectionImageContainer}>
                          <div>
                            <img
                              className={classes.sectionImage}
                              src={this.state.imageLink}
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
              ) : (
                <></>
              )}

              <FormControl className={classes.formContainer}>
                <TextField
                  required
                  label="Resource Description"
                  helperText=""
                  variant="outlined"
                  multiline
                  rows={9}
                  className={classes.inputControlContentDescription}
                  value={this.state.textContent}
                  onChange={this.handleInputChangeFor('textContent')}
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
              </FormControl>

              <div className="new-question">
                <FormControl className={classes.formContainerQuestion}>
                  {this.state.questionInputs.map((questionInputs, index) => (
                    <SectionQuestion key={index} />
                  ))}
                </FormControl>
              </div>
              <div className={classes.adminButtonContainer}>
                <Button
                  variant="contained"
                  onClick={this.appendNewQuestion}
                  className={classes.adminButton}
                  classes={{ root: classes.root }}
                >
                  Add Question
                </Button>

                <Button
                  variant="contained"
                  type="submit"
                  name="submit"
                  onClick={this.submitSection}
                  className={classes.adminButton}
                  classes={{ root: classes.root }}
                >
                  Save Section
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AddNewSectionPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(
  connect(mapReduxStateToProps)(AddNewSectionPage)
);
