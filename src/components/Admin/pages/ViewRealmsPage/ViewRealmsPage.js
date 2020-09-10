import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withStyles,
  FormControl,
  Grid,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
import styles from '../../../../themes/adminTheme.js';
import { fade } from '@material-ui/core/styles/colorManipulator';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';

// const styles = (theme) => ({
//   button: {
//     font: ' 300  16px  Poppins , sans-serif',
//     color: 'white',
//     backgroundColor: '#457b9d',
//     '&:hover': {
//       backgroundColor: '#a8dadc',
//       color: '#457b9d',
//     },
//     '&:focus': {
//       backgroundColor: 'a8dadc',
//       color: '#457b9d',
//     },
//     'text-transform': 'capitalize',
//     'text-align': 'center',
//     'margin-top': '10px',
//     'border-radius': '5px',
//   },
//   root: {
//     width: '40%',
//     marginTop: '5%',
//     marginBottom: '3%',
//     overflowX: 'auto',
//   },
//   table: {
//     // minWidth: "50%",
//   },
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

class ViewRealmsPage extends Component {
  componentDidMount = () => {
    this.getAllRealms();
  };

  getAllRealms = () => {
    this.props.dispatch({ type: 'FETCH_ALL_REALMS' });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <center>
          <h1 className={classes.headerView}>Realms</h1>
          <div>
            <Button
              variant="contained"
              className="submit-new-section"
              // type="submit"
              // name="submit"
              // onClick={this.submitSection}
              className={classes.adminButtonView}
              classes={{ root: classes.button }}
            >
              <AddIcon className={classes.addSectionViewIcon} /> New Realm
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
          <Paper className={classes.paperView}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    width="30%"
                    className={classes.tableHeader}
                  >
                    Realm Name
                  </TableCell>
                  <TableCell
                    width="10%"
                    align="right"
                    className={classes.tableHeader}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.realms.map((realm) => (
                  <TableRow key={this.props.realms.id}>
                    <TableCell
                      align="left"
                      component="th"
                      scope="row"
                      className={classes.tableCell}
                    >
                      {realm.realm_name}
                    </TableCell>
                    <IconButton
                      variant="contained"
                      color="primary"
                      size="large"
                      // onClick={(event) => this.handleClick(section.id)}
                      aria-label="delete"
                      className={classes.viewSectionIcon}
                    >
                      <VisibilityIcon fontSize="large" />
                    </IconButton>
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

const mapReduxStateToProps = (reduxState) => ({
  realms: reduxState.allRealms,
});

export default connect(mapReduxStateToProps)(
  withStyles(styles)(ViewRealmsPage)
);
