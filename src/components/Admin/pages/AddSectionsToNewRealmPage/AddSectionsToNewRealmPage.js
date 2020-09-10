import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import styles from '../../../../themes/adminTheme.js';
import SectionToChoose from "../../components/SectionToChoose/SectionToChoose"
import ChosenSection from "../../components/ChosenSection/ChosenSection"


class AddSectionsToNewRealmPage extends Component {
  componentDidMount = () => {
    this.getAllSections();
  };

  getAllSections = () => {
    this.props.dispatch({ type: "FETCH_ALL_SECTIONS" });
  };

  submitRealmWithSections = () => {
     console.log('submitrealmwithsections clicked')
  };

  render() {
    const { classes } = this.props;
    console.log('rendering')
    return (
      <div>
        <center>
          <h1 className={classes.header}>Add Sections to New Realm</h1>
          <h3>Select sections in the order you wish for them to appear</h3>
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
                {this.props.sections.map((section) => (
                  <SectionToChoose key={section.id} section={section}/>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <h2 className={classes.header}>Chosen Sections</h2>
          <h3>Sections will be saved in the order they appear below</h3>
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
                {this.props.chosenSections.map((section) => (
                  <ChosenSection key={section.id} section={section}/>
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
              onClick= {this.submitRealmWithSections}
            >
              Save Realm with Sections
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

export default withStyles(styles)(connect(mapReduxStateToProps)(AddSectionsToNewRealmPage));
