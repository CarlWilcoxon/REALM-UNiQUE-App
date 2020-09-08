import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import InputBase from "@material-ui/core/InputBase";
// import SearchIcon from "@material-ui/icons/Search";

const styles = (theme) => ({
  button: {
    font: " 300  16px  Poppins , sans-serif",
    color: "white",
    backgroundColor: "#457b9d",
    "&:hover": {
      backgroundColor: "#a8dadc",
      color: "#457b9d",
    },
    "&:focus": {
      backgroundColor: "a8dadc",
      color: "#457b9d",
    },
    "text-transform": "capitalize",
    "text-align": "center",
    "margin-top": "10px",
    "border-radius": "5px",
  },
  root: {
    width: "60%",
    marginTop: "5%",
    marginBottom: "3%",
    overflowX: "auto",
  },
  table: {
    // minWidth: "50%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#ffffff", 0.15),
    "&:hover": {
      backgroundColor: fade("#ffffff", 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 160,
      "&:focus": {
        width: 200,
      },
    },
  },
});

class ViewSectionsPage extends Component {

  componentDidMount = () => {
    this.getAllSections();
  };

  getAllSections = () => {
    this.props.dispatch({ type: "FETCH_ALL_SECTIONS" });
  };

  handleClick = (sectionId) => {
    // this.props.history.push(`/preview/${sectionId}`);
    console.log("Clicked View Section");
  };

    render() {
        const { classes } = this.props;

        return (
          <div>
            <center>
              <h1>View Sections</h1>
              <div>
                <Button
                  variant="contained"
                  className="submit-new-section"
                  // type="submit"
                  // name="submit"
                  // onClick={this.submitSection}
                  className={classes.button}
                  classes={{ root: classes.button }}
                >
                  + Add New Section
                </Button>
              </div>
              {/* <AppBar position="static">
                        <Toolbar>
                            <div className={classes.grow} />
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search Sections…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                        </Toolbar>
                    </AppBar> */}
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" width="40%%">
                        Section Name
                      </TableCell>
                      <TableCell align="left" width="20%">
                        Resource Type
                      </TableCell>
                      <TableCell width="15%"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.sections.map((section) => (
                      <TableRow key={section.id}>
                        <TableCell align="left" component="th" scope="row">
                          {section.title}
                        </TableCell>
                        <TableCell align="left">{section.type_name}</TableCell>
                        <Button
                          variant="contained"
                          className="submit-new-section"
                          // type="submit"
                          // name="submit"
                          onClick={this.handleClick(section.id)}
                          className={classes.button}
                          classes={{ root: classes.button }}
                        >
                          View Section
                        </Button>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </center>
          </div>
        );
    }
}

ViewSectionsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  sections: reduxState.allSections
});

export default connect(mapReduxStateToProps)(withStyles(styles)(ViewSectionsPage));
