import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = (theme) => ({
    textField: {
        width: 400,
        margin: "10px",
    },
});

const questionTypes = [
    {
        value: "Open-Ended",
        label: "Open-Ended",
    }
];

class SectionQuestions extends Component {
    state = {
        questionType: "",
        question: ""
    };

    // //Packaging new section details and sending to saga to send to database
    // submitSection = (event) => {
    //     event.preventDefault();
    //     this.props.dispatch({
    //         type: "SUBMIT_SECTION",
    //         payload: {
    //             title: this.state.title,
    //             type: this.state.type,
    //             description: this.state.description,
    //             newQuestion1Type: this.state.newQuestion1Type,
    //             newQuestion1: this.state.newQuestion1,
    //         },
    //     });
    // }; // end submitSection

    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        console.log("state:", this.state);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="form">
                <center>
                    <form>
                        {/* QUESTION TYPE (ETC.) */}
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
                        </div>
                        {/* SECTION DESCRIPTION */}
                        <div>
                            <TextField
                                required
                                label="Question"
                                value={this.state.question}
                                onChange={this.handleInputChangeFor("question")}
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

SectionQuestions.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default withStyles(styles)(
    connect(mapReduxStateToProps)(SectionQuestions)
);
