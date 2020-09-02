// import React, { Component } from 'react';

// class AddSectionsToNewRealmPage extends Component {

//     render() {
//         return (
//           <div>
//             <center>
//               <h1>Add Sections to New Realm</h1>
//               <div className="sections-new-realm-form"></div>
//             </center>
//           </div>
//         );
//     }
// }

// export default AddSectionsToNewRealmPage;


import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";


const styles = (theme) => ({
  root: {
    width: "40%",
    marginTop: "5%",
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
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
      width: 120,
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

const rows = [
  createData("Ted Talk No.5", "Video"),
  createData("Text No.1", "Text"),
  createData("Photo No.10", "Photo"),
  createData("Ted Talk No.2", "Video"),
  createData("Youtube Video No.12", "Video"),
];

class AddSectionsToNewRealmPage extends Component {
render() {
  const { classes } = this.props;

  return (
    <div>
      <center>
        <h1>Add Sections to New Realm</h1>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
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
              {/* CURRENTLY MAPPING ROWS FROM ABOVE */}
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.type}</TableCell>
                  <TableCell align="right" padding="checkbox">
                    <Checkbox />
                  </TableCell>
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

AddSectionsToNewRealmPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddSectionsToNewRealmPage);
