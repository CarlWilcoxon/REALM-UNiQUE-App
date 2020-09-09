import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PreviewSection from "../../components/PreviewSection/PreviewSection";
import EditSection from "../../components/EditSection/EditSection";

const styles = (theme) => ({
});

class PreviewSectionPage extends Component {

    // componentDidMount() {
    //     this.props.dispatch({
    //         type: 'FETCH_SECTION',
    //         payload: {
    //             sectionId: this.props.match.params.id,
    //         },
    //     });
    // }

    state = {
        edit: true,
    };

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit,
        });
    };

    // submitHandler = () => {

    // }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <center>
                    <h1>(section name)</h1>
                    {this.state.edit ? (
                        <div>
                            <PreviewSection />
                            <Button
                                variant="contained"
                                className="edit-profile"
                                className={classes.button}
                                classes={{ root: classes.root }}
                                onClick={this.toggleEdit}
                            >
                                Edit Section
                    </Button>
                        </div>
                    ) : (
                            <div>
                                <EditSection />
                                <Button
                                    variant="contained"
                                    className="back-to-profile"
                                    className={classes.button}
                                    classes={{ root: classes.root }}
                                    onClick={this.toggleEdit}
                                >
                                    Preview Section
                    </Button>
                            </div>
                        )}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    user: reduxState.user,
    reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(withStyles(styles)(PreviewSectionPage));
