import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SectionQuestion from "../../components/SectionQuestions/SectionQuestions";

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

class EditSection extends Component {
    state = {
        title: "",
        type: "",
        description: "",
        questions: [],
        imageLink: "",
        videoLink: "",
        textContent: "",
        questionInputs: [],
    };

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_SECTION',
            payload: {
                sectionId: 5//this.props.match.params.section, //hard-coded, needs to be changed this.props.match.params.section
            },
        });
    }

    //Packaging new section details and sending to saga to send to database
    submitSection = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: "SUBMIT_SECTION",
            // payload: {
            //   title: this.state.title,
            //   type: this.state.type,
            //   description: this.state.description,
            //   ///questions need to be added to payload
            // },

            payload: this.state,
        });
    }; // end submitSection

    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
        console.log("state:", this.state);
    };

    appendNewQuestion = () => {
        console.log("You clicked add new questions");
        this.setState({
            questionInputs: [...this.state.questionInputs, <SectionQuestion />],
        });
    };

    //   handleClick = (event) => {
    //     this.props.history.push("/");
    //   };

    render() {
        const { classes, section } = this.props;
        return (
            <div>
                <center>
                    <h1>Edit</h1>
                    <div className="form">
                        <form>
                            {/* SECTION TITLE */}
                            <div>
                                <TextField
                                    required
                                    label="Section Title"
                                    type="text"
                                    defaultValue={section.title}
                                    // value={section.title}
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
                                    defaultValue="3" //A type was selected as an example here
                                    // value={this.state.type}
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
                            {/* DYNAMIC INFORMATION SECTION */}
                            {/* 1=video, 2=text, 3=image */}
                            {/* type needs to be retrieved from the database */}
                            {this.state.type === 1 ? (
                                <div>
                                    <TextField
                                        required
                                        label="Video Link"
                                        type="text"
                                        // value={this.state.videoLink}
                                        defaultValue={section.video_link}
                                        onChange={this.handleInputChangeFor("videoLink")}
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                </div>
                            ) : this.state.type === 2 ? (
                                <div>
                                    <TextField
                                        required
                                        label="Text Content"
                                        type="text"
                                        // value={this.state.textContent}
                                        defaultValue={section.text_content}
                                        onChange={this.handleInputChangeFor("textContent")}
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                </div>
                            ) : this.state.type === 3 ? (
                                <div>
                                    <TextField
                                        required
                                        label="Image Link"
                                        type="text"
                                        // value={this.state.imageLink}
                                        defaultValue= {section.image_link}
                                        onChange={this.handleInputChangeFor("imageLink")}
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                </div>
                            ) : (
                                            <></>
                                        )}
                            {/* SECTION DESCRIPTION */}
                            <div>
                                <TextField
                                    required
                                    label="Resource Description"
                                    // value={this.state.description}
                                    defaultValue={section.description}
                                    onChange={this.handleInputChangeFor("description")}
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </div>
                            {/* ORGINAL QUESTIONS MAP <--------- NEEDS TO BE FINISHED*/}
                            <div className="new-question">
                                {this.state.questionInputs.map((questionInputs, index) => (
                                    <SectionQuestion key={index} />
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
                    </div>
                </center>
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

