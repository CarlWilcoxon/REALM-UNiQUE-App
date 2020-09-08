import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem"; 

const styles = (theme) => ({
    textField: {
        width: 400,
        margin: "10px",
    },
});

// const questionTypes = [
//     {
//         value: "Open-Ended",
//         label: "Open-Ended",
//     }
// ];

class RealmQuestions extends Component {
    state = {
        // questionType: "",
        question: "",
        question_index: this.props.index,
    };



    handleQuestionChange = (event) => {
        console.log("old state:", this.state);
        let newValue = event.target.value;
        this.setState({
          ...this.state,
          question : newValue,
        })
  
        this.props.dispatch({
          type: 'UPDATE_QUESTIONS',
          payload: {
            question: newValue,
            question_index: this.state.question_index,
          }})
      };

    render() {
        const { classes } = this.props;
        return (
          <div className="form">
            <center>
              <form>
                {/* QUESTION TYPE (ETC.)
                        <div>
                            <TextField
                                select
                                required
                                label="Question Type"
                                className={classes.textField}
                                value={this.state.questionType}
                                onChange={this.handleInputChangeFor("questionType")}
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
                        </div> */}
                {/* SECTION DESCRIPTION */}
                <div>
                  <TextField
                    required
                    variant="outlined"
                    label="Question"
                    value={this.state.question}
                    onChange={this.handleQuestionChange}
                    className={classes.textField}
                    margin="normal"
                  />
                </div>
              </form>
            </center>
          </div>
        );
    }
}

RealmQuestions.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default withStyles(styles)(
    connect(mapReduxStateToProps)(RealmQuestions)
);
