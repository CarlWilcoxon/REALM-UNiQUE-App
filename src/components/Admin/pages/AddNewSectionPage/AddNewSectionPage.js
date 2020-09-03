import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SectionQuestions from "../../components/SectionQuestions/SectionQuestions";

const styles = (theme) => ({
  root: {
    background: "blue",
    // borderRadius: 3,
    // border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    fontWeight: "bold",
    margin: "10px",
    justify: "center",
  },
  textField: {
    width: 400,
    margin: "10px",
  },
});

const type = [
  {
    value: 2,
    label: "Text",
  },
  {
    value: 1,
    label: "Video",
  },
  {
    value: 3,
    label: "Image",
  },
];

class AddNewSectionPage extends Component {

  constructor(){
    super();
    this.state = {
        questionInputs: []
    }
  }

  state = {
    title: "",
    type: 0,
    description: "",
    questions:[],
    // questions =[
    //   {
    //     question = ...,
    //     questionType = ...},
    //   {
    //     question = ...,
    //     questionType = ...},
    //   {
    //     question = ...,
    //     questionType = ...},
    // ]
    imageLink:"",
    videoLink:"",
    textContent:"",
  };

//Packaging new section details and sending to saga to send to database
  submitSection = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SUBMIT_SECTION",
      payload: this.state,
    });
  }; // end submitSection

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log("state:", this.state);
  };

  appendNewQuestion = () => {
    console.log('You clicked add new questions');
        this.setState({
            questionInputs: [
                ...this.state.questionInputs, <SectionQuestions/>
            ]
        });
  }


  //   handleClick = (event) => {
  //     this.props.history.push("/");
  //   };

  render() {
    const { classes } = this.props;
    return (
      <div className="form">
        <center>
          <form>
            <h1>Add New Section</h1>
            {/* SECTION TITLE */}
            <div>
              <TextField
                required
                label="Section Title"
                type="text"
                value={this.state.title}
                onChange={this.handleInputChangeFor("title")}
                className={classes.textField}
                margin="normal"
              />
            </div>
            {/* SECTION TYPE (VIDEO, TEXT, ETC.) */}
            <div>
              <TextField
                select
                required
                label="Resource Type"
                className={classes.textField}
                value={this.state.type}
                onChange={this.handleInputChangeFor("type")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
              >
                {type.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            {/* SECTION DESCRIPTION */}
            <div>
              <TextField
                required
                label="Resource Description"
                value={this.state.description}
                onChange={this.handleInputChangeFor("description")}
                className={classes.textField}
                margin="normal"
              />
            </div>
            {/* DYNAMIC INFORMATION SECTION */}
            {/* 1=video, 2=text, 3=image */}
            { this.state.type === 1 ?
              <div>
                <TextField
                  required
                  label="Video Link"
                  type="text"
                  value={this.state.videoLink}
                  onChange={this.handleInputChangeFor("videoLink")}
                  className={classes.textField}
                  margin="normal"
                />
              </div>
              : this.state.type === 2 ?
              <div>
                <TextField
                  required
                  label="Text Content"
                  type="text"
                  value={this.state.textContent}
                  onChange={this.handleInputChangeFor("textContent")}
                  className={classes.textField}
                  margin="normal"
                />
              </div>
              : this.state.type === 3 ?
              <div>
                <TextField
                  required
                  label="Image Link"
                  type="text"
                  value={this.state.imageLink}
                  onChange={this.handleInputChangeFor("imageLink")}
                  className={classes.textField}
                  margin="normal"
                />
              </div>
              : <></> }
              {/* NEW QUESTION MAP */}
            <div id="new-question">
              {this.state.questionInputs.map((questionInputs) => (
                <SectionQuestions />
              ))}
            </div>
            {/* ADD NEW QUESTION BUTTON */}
            <div>
              <Button
                variant="contained"
                id="add-section-question"
                // type="submit"
                // name="submit"
                onClick={this.appendNewQuestion}
                className={classes.button}
                classes={{ root: classes.root }}
              >
                + Add Question
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                id="submit-new-section"
                type="submit"
                name="submit"
                onClick={this.submitSection}
                className={classes.button}
                classes={{ root: classes.root }}
              >
                Save Section
              </Button>
            </div>
          </form>
        </center>
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
