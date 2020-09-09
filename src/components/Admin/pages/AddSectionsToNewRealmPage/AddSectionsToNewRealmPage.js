import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withStyles,
  Checkbox,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import styles from '../../../../themes/adminTheme.js';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';


class AddSectionsToNewRealmPage extends Component {
  componentDidMount = () => {
    this.getAllSections();
  };

  getAllSections = () => {
    this.props.dispatch({ type: "FETCH_ALL_SECTIONS" });
  };

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
                {this.props.sections.map((row) => (
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
                      {row.type === 'Photo' || row.type === 3 ? <ImageIcon /> : ''}
                      {row.type === 'Video'|| row.type === 1 ? <YouTubeIcon /> : ''}
                      {row.type === 'Text'|| row.type === 2 ? <DescriptionIcon /> : ''}
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

const mapReduxStateToProps = (reduxState) => ({
  sections: reduxState.allSections,
});

AddSectionsToNewRealmPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapReduxStateToProps)(AddSectionsToNewRealmPage));
