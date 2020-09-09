import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  FormControl,
  Grid,
  Checkbox,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  fade,
} from '@material-ui/core';
import styles from '/Users/brunoreyes/Desktop/REALM-UNiQUE-App/src/themes/adminTheme.js';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';
// const styles = (theme) => ({
//   button: {
//     background: 'blue',
//     // borderRadius: 3,
//     // border: 0,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     fontWeight: 'bold',
//     margin: '10px',
//     justify: 'center',
//   },
//
//
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade('#ffffff', 0.15),
//     '&:hover': {
//       backgroundColor: fade('#ffffff', 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing.unit,
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     width: theme.spacing.unit * 9,
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//     width: '100%',
//   },
//   inputInput: {
//     paddingTop: theme.spacing.unit,
//     paddingRight: theme.spacing.unit,
//     paddingBottom: theme.spacing.unit,
//     paddingLeft: theme.spacing.unit * 10,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: 160,
//       '&:focus': {
//         width: 200,
//       },
//     },
//   },
// });

let id = 0;
function createData(name, type) {
  id += 1;
  return { id, name, type };
}

//SAMPLE DATA - DELETE AFTER NO LONGER NEEDED
const rows = [
  createData('Ted Talk No.5', 'Video'),
  createData('Text No.1', 'Text'),
  createData('Photo No.10', 'Photo'),
  createData('Ted Talk No.2', 'Video'),
  createData('Youtube Video No.12', 'Video'),
];

class AddSectionsToNewRealmPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <center>
          <h1 className={classes.header}>Add Sections to New Realm</h1>
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
          <Paper className={classes.paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    width="30%"
                    className={classes.tableHeader}
                  >
                    Section Name
                  </TableCell>
                  <TableCell
                    align="left"
                    width="30%"
                    className={classes.tableHeader}
                  >
                    Resource Type
                  </TableCell>
                  <TableCell width="10%"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* CURRENTLY MAPPING ROWS FROM ABOVE */}
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell
                      className={classes.tableCell}
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {row.type === 'Photo' ? <ImageIcon /> : ''}
                      {row.type === 'Video' ? <YouTubeIcon /> : ''}
                      {row.type === 'Text' ? <DescriptionIcon /> : ''}
                      {/* <div>{JSON.stringify(row.type)} </div> */}
                    </TableCell>
                    <TableCell align="right" padding="checkbox">
                      <Checkbox
                        className={classes.checkBoxIcon}
                        color="white"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <div className={classes.adminButtonContainer}>
            <Button
              variant="contained"
              type="submit"
              name="submit"
              // onClick={this.submitSection}
              className={classes.adminButtonAdd}
            >
              Name Realm
            </Button>
            <Button
              variant="contained"
              type="submit"
              name="submit"
              // onClick={this.submitSection}
              className={classes.adminButtonAdd}
            >
              Organize Sections
            </Button>
          </div>
        </center>
      </div>
    );
  }
}

AddSectionsToNewRealmPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddSectionsToNewRealmPage);
