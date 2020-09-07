import React, { Component } from "react";
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
function createData(name) {
  id += 1;
  return { id, name };
}

//SAMPLE DATA - DELETE AFTER NO LONGER NEEDED
const rows = [
  createData("Realm One"),
  createData("Realm Two"),
  createData("Realm Three"),
  createData("Realm Four"),
  createData("Realm Five"),
];

class ViewRealmsPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <center>
          <h1>View Realms</h1>
          <div>
            <Button
              variant="contained"
              id="submit-new-section"
              // type="submit"
              // name="submit"
              // onClick={this.submitSection}
              className={classes.button}
              classes={{ root: classes.button }}
            >
              + Add New Realm
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
                  <TableCell align="left" width="30%">
                    Realm Name
                  </TableCell>
                  <TableCell width="10%" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* CURRENTLY MAPPING ROWS FROM ABOVE */}
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="left" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <Button
                      variant="contained"
                      className="submit-new-section"
                      align="right"
                      // type="submit"
                      // name="submit"
                      // onClick={this.submitSection}
                      className={classes.button}
                      classes={{ root: classes.button }}
                    >
                      Preview Realm
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

 ViewRealmsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)( ViewRealmsPage);

