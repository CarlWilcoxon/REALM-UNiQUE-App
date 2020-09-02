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
    value: "Text",
    label: "Text",
  },
  {
    value: "Video",
    label: "Video",
  },
  {
    value: "Image",
    label: "Image",
  }
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
    type: "",
    description: "",
    questionsCounter: 0,
    questions:[]
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
  };

//Packaging new section details and sending to saga to send to database
  submitSection = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SUBMIT_SECTION",
      payload: {
        title: this.state.title,
        type: this.state.type,
        description: this.state.description,
        newQuestion1Type: this.state.newQuestion1Type,
        newQuestion1: this.state.newQuestion1,
      },
    });
  }; // end submitSection

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log("state:", this.state);
  };

  // handleCounterClick = (event) => {
  //   this.setState({
  //     // questionsCounter: event.target.value,
  //   });
  //   console.log("state:", this.state.questionsCounter);
  //   };

  appendNewQuestion = () => {
    console.log('You clicked add new questions');
    // newInput = `input-${this.state.inputs.length}`;
    // this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
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
              {/* <div id="new-question">
              {this.state.question.map(input => <SectionQuestions key={input} />)}
              </div> */}
            {/* ADD NEW QUESTION BUTTON */}
            <div>
                <Button
                  variant="contained"
                  className="add-section-question"
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
                className="submit-new-section"
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
