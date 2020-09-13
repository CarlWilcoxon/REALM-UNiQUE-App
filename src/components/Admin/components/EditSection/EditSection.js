import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withStyles,
  FormControl,
  Grid,
  TextField,
  Button,
  MenuItem,
} from '@material-ui/core';
import styles from '../../../../themes/adminTheme.js';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Fade from 'react-reveal/Fade';
// import SaveIcon from '@material-ui/icons/Save';
// const styles = (theme) => ({
//   root: {
//     background: 'blue',
//     // borderRadius: 3,
//     // border: 0,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     fontWeight: 'bold',
//     margin: '10px',
//     justify: 'center',
//   },
//   textField: {
//     width: 400,
//     margin: '10px',
//   },
// });

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

class EditSection extends Component {

  state = {
    sectionId: this.props.section.id,
    title: this.props.section.title,
    type: this.props.section.type,
    description: this.props.section.description,
    imageLink: this.props.section.image_link,
    videoLink: this.props.section.video_link,
    questions: this.props.section.questions,
    textContent: this.props.section.text_content,
    preview: false,
  };

  //Packaging new section details and sending to saga to send to database
  changeSection = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'UPDATE_QUESTIONS',
      payload: {
        changedQuestions: ( this.state.changedQuestions === undefined ? null : this.state.changedQuestions ),
      }
    })

    this.props.dispatch({
      type: "CHANGE_SECTION",
      payload: {
        ...this.state,
      },
    });
  }; // end changeSection

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
    console.log("state:", this.state);
  };

  handleQuestionChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      changedQuestions:{
        ...this.state.changedQuestions,
        [propertyName]: event.target.value,
      },
    });
    console.log("state:", this.state);
  };

  appendNewQuestion = () => {

    this.props.dispatch({
      type: 'UPDATE_QUESTIONS',
      payload: {
        sectionId: this.state.sectionId,
        changedQuestions: ( this.state.changedQuestions === undefined? null : this.state.changedQuestions ),
      }
    })
    this.props.dispatch({
      type: 'ADD_SINGLE_QUESTION',
      payload: {
        sectionId: this.state.sectionId,
        qIndex: this.state.questions.length,
      }})
    console.log("You clicked add new questions");
  };
  toggleResourcePreview = () => {
    console.log("You clicked the preview icon");
    this.setState({
      preview: !this.state.preview,
    });
  };
  //   handleClick = (event) => {
  //     this.props.history.push("/");
  //   };

  render() {
    const { classes, section } = this.props;
    return (
      <div>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {/* <center> */}
            <h1 className={classes.header}>Edit Section</h1>
            <div className="form">
              <form>
                {/* SECTION TITLE */}
                <div>
                  <FormControl className={classes.formContainer}>
                    <div>
                      <TextField
                        required
                        label="Section Name"
                        helperText="character limit: 30"
                        type="text"
                        defaultValue={section.title}
                        inputProps={{ maxLength: 30 }}
                        variant="outlined"
                        onChange={this.handleInputChangeFor("title")}
                        className={classes.inputControl}
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
                {/* SECTION TYPE (VIDEO, TEXT, ETC.)
                <div>

                  <FormControl className={classes.formContainer}>
                    <div>
                      <TextField
                        select
                        required
                        label="Resource Type"
                        helperText=""
                        variant="outlined"
                        className={classes.inputControlIconSelector}
                        defaultValue={section.type}
                        // value={this.state.type}
                        onChange={this.handleInputChangeFor("type")}
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
                        {" "}
                        {type.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </FormControl>
                </div> */}
                {/* DYNAMIC INFORMATION SECTION */}
                {/* 1=video, 2=text, 3=image */}
                {/* type needs to be retrieved from the database */}
                <Fade>
                  {section.type === 1 ? (
                    <Fade>
                      <FormControl className={classes.formContainer}>
                        <div>
                          <TextField
                            required
                            label="Video Link"
                            type="text"
                            helperText=""
                            variant="outlined"
                            className={classes.inputControlLink}
                            // value={this.state.videoLink}
                            defaultValue={section.video_link}
                            onChange={this.handleInputChangeFor("videoLink")}
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
                          {this.state.videoLink !== "" ? (
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

                        {this.state.preview && this.state.videoLink !== "" ? (
                          <FormControl className={classes.formContainerVideo}>
                            {" "}
                            <Fade>
                              <h1 className={classes.previewTitle}>
                                Resource Preview
                              </h1>
                              <div className={classes.sectionVideoContainer}>
                                <iframe
                                  title={"section video"}
                                  frameborder="0"
                                  className={classes.sectionVideo}
                                  // src="https://www.youtube.com/embed/pRFXSjkpKWA"
                                  src={
                                    this.state.videoLink
                                      .replace("watch?v=", "embed/")
                                      .split("&feature=emb_title")[0]
                                  }
                                  // https://www.youtube.com/watch?v=pRFXSjkpKWA&feature=emb_title
                                ></iframe>
                              </div>{" "}
                            </Fade>
                          </FormControl>
                        ) : (
                          <></>
                        )}
                        {/* <div>{JSON.stringify()} </div> */}
                      </FormControl>
                    </Fade>
                  ) : section.type === 2 ? (
                    <div>
                      <Fade>
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
                              defaultValue={section.text_content}
                              //   value={this.state.textContent}
                              onChange={this.handleInputChangeFor(
                                "textContent"
                              )}
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
                      </Fade>
                    </div>
                  ) : section.type === 3 ? (
                    <div>
                      <Fade>
                        <FormControl className={classes.formContainer}>
                          <div>
                            <TextField
                              required
                              label="Image Link"
                              helperText=""
                              variant="outlined"
                              className={classes.inputControlLink}
                              defaultValue={section.image_link}
                              // value={this.state.imageLink}
                              onChange={this.handleInputChangeFor("imageLink")}
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
                            {this.state.imageLink !== "" ? (
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
                      </Fade>
                      {this.state.preview && this.state.imageLink !== "" ? (
                        <FormControl className={classes.formContainerVideo}>
                          <Fade>
                            <h1 className={classes.previewTitle}>
                              Resource Preview
                            </h1>
                            <div className={classes.sectionCoverContainer}>
                              <div>
                                <img
                                  className={classes.sectionImage}
                                  src={this.state.imageLink}
                                  alt="resource preview"
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
                </Fade>
                {/* SECTION DESCRIPTION */}
                <div>
                  <FormControl className={classes.formContainer}>
                    <TextField
                      required
                      label="Resource Description"
                      helperText=""
                      variant="outlined"
                      multiline
                      rows={9}
                      className={classes.inputControlContentDescription}
                      // value={this.state.description}
                      defaultValue={section.description}
                      onChange={this.handleInputChangeFor("description")}
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
                </div>
                <br />
                {/*  <------ space hardcoded for now */}
                <div>
                  {section.questions !== undefined
                    ? section.questions.map((q) => (
                        <FormControl className={classes.formContainer}>
                          <TextField
                            required
                            label="Resource Question"
                            helperText=""
                            variant="outlined"
                            defaultValue={q.content}
                            onChange={this.handleQuestionChangeFor(`q${q.id}`)}
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
                      ))
                    : ""}
                </div>
                {/* <div className="new-question">
                  <FormControl className={classes.formContainerQuestion}>
                    {this.state.questionInputs.map((questionInputs, index) => (
                      <SectionQuestion
                        key={index}
                        index={index}
                        handleInputChangeFor={this.handleInputChangeFor}
                      />
                    ))}
                  </FormControl>
                </div> */}

                {/* ADD NEW QUESTION BUTTON */}
                <div className={classes.adminButtonContainer}>
                  <Button
                    variant="contained"
                    onClick={this.appendNewQuestion}
                    className={classes.adminButtonAdd}
                  >
                    Add Question
                  </Button>

                  <Button
                    variant="contained"
                    type="submit"
                    name="submit"
                    onClick={this.changeSection}
                    className={classes.adminButtonAdd}
                  >
                    Save Section
                  </Button>
                </div>
              </form>
            </div>
            {/* </center> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

EditSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  section: state.section,
});

export default withStyles(styles)(connect(mapStateToProps)(EditSection));
