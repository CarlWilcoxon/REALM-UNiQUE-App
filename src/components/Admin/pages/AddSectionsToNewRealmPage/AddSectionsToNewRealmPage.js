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
import Checkbox from "@material-ui/core/Checkbox";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Button from "@material-ui/core/Button";
import SectionToChoose from "../../components/SectionToChoose/SectionToChoose"
import ChosenSection from "../../components/ChosenSection/ChosenSection"


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
    "margin-top": "20px",
    "border-radius": "5px",
  },
  root: {
    width: "40%",
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

let id = 0;
function createData(name, type) {
  id += 1;
  return { id, name, type };
}

//SAMPLE DATA - DELETE AFTER NO LONGER NEEDED
const rows = [
  createData("Ted Talk No.5", "Video"),
  createData("Text No.1", "Text"),
  createData("Photo No.10", "Photo"),
  createData("Ted Talk No.2", "Video"),
  createData("Youtube Video No.12", "Video"),
];

class AddSectionsToNewRealmPage extends Component {
  componentDidMount = () => {
    this.getAllSections();
  };

  getAllSections = () => {
    this.props.dispatch({ type: "FETCH_ALL_SECTIONS" });
  };

  goOrganize =() => this.props.history.push('/organize-realm-sections')

  state = {
    title: "",
    description: "",
    type: "",
    image_link: "",
    video_link: "",
    text_content: "",
 };

  render() {
    const { classes } = this.props;
    console.log('rendering')
    return (
      <div>
        <center>
          <h1>Add Sections to New Realm</h1>
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
        <h2>Available Sections</h2>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="left" width="30%">
                    Section Name
                  </TableCell>
                  <TableCell align="left" width="30%">
                    Resource Type
                  </TableCell>
                  <TableCell width="10%"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.sections.map((section) => (
                  <SectionToChoose key={section.id} section={section}/>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <h2>Chosen Sections</h2>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="left" width="30%">
                    Section Name
                  </TableCell>
                  <TableCell align="left" width="30%">
                    Resource Type
                  </TableCell>
                  <TableCell width="10%"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.chosenSections.map((section) => (
                  <ChosenSection key={section.id} section={section}/>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <div>
            <Button
              variant="contained"
              // className="submit-new-section"
              // type="submit"
              // name="submit"
              // onClick={this.submitSection}
              className={classes.button}
              classes={{ root: classes.button }}
            >
              Name Realm
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              // className="submit-new-section"
              // type="submit"
              // name="submit"
              // onClick={this.submitSection}
              className={classes.button}
              classes={{ root: classes.button }}
              onClick={this.goOrganize}
            >
              Organize Sections
            </Button>
          </div>
        </center>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  sections: reduxState.allSections,
  chosenSections: reduxState.chosenSections,
});

AddSectionsToNewRealmPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(AddSectionsToNewRealmPage));
