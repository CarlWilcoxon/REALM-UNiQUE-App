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

class AddClientPage extends Component {
    state = {
        name: "",
        contact_name: "",
        contact_email: "",
        notes: "",
    };

    //Packaging new section details and sending to saga to send to database
    submitSection = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: "SUBMIT_SECTION",
            // payload: {
            //   name: this.state.name,
            //   contact_name: this.state.contact_name,
            //   contact_email: this.state.contact_email,
            // notes: this.state.notes,
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

    //   handleClick = (event) => {
    //     this.props.history.push("/");
    //   };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <center>
                    <h1>Add New Client</h1>
                    <div className="form">
                        <form>
                            {/* CLIENT NAME */}
                            <div>
                                <TextField
                                    required
                                    label="Client Name"
                                    type="text"
                                    // defaultValue="EXAMPLE CLIENT NAME"
                                    value={this.state.name}
                                    onChange={this.handleInputChangeFor("name")}
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </div>
                            {/* POINT OF CONTACT NAME */}
                            <div>
                                <TextField
                                    required
                                    label="Point of Contact Name"
                                    value={this.state.contact_name}
                                    // defaultValue="EXAMPLE POINT OF CONTACT NAME"
                                    onChange={this.handleInputChangeFor("contact_name")}
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </div>
                            {/* POINT OF CONTACT EMAIL */}
                            <div>
                                <TextField
                                    required
                                    label="Point of Contact Email"
                                    value={this.state.contact_email}
                                    // defaultValue="EXAMPLE POINT OF CONTACT EMAIL"
                                    onChange={this.handleInputChangeFor("contact_email")}
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </div>
                            {/* NOTES */}
                            <div>
                                <TextField
                                    required
                                    label="Other Notes"
                                    value={this.state.notes}
                                    // defaultValue="EXAMPLE OTHER NOTES"
                                    onChange={this.handleInputChangeFor("notes")}
                                    className={classes.textField}
                                    margin="normal"
                                />
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
                                    Create Client
                </Button>
                            </div>
                        </form>
                    </div>
                </center>
            </div>
        );
    }
}

AddClientPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default withStyles(styles)(
    connect(mapReduxStateToProps)(AddClientPage)
);
