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
import SectionToChoose from '../../components/SectionToChoose/SectionToChoose';
import ChosenSection from '../../components/ChosenSection/ChosenSection';

class AddSectionsToNewRealmPage extends Component {
  componentDidMount = () => {
    this.getAllSections();
  };

  getAllSections = () => {
    this.props.dispatch({ type: 'FETCH_ALL_SECTIONS' });
  };

  submitRealmWithSections = () => {
    this.props.dispatch({
      type: 'POST_NEW_REALM',
      payload: {
        chosenSections: this.props.chosenSections,
        realm: this.props.realm,
      },
    });
    this.forwardviewRealm();
  };

  backtoAddRealm = () => {
    this.props.history.push('/add-realm');
  };

  forwardviewRealm = () => {
    this.props.history.push('/view-realms');
  };

  render() {
    const { classes } = this.props;
    console.log('rendering');
    return (
      <div>
        <center>
          <h1 className={classes.headerMore}>Add Sections to New Realm</h1>

          <h1 className={classes.headerLesser}>All Sections</h1>
          <h3 className={classes.headerLeast}>
            (Select sections in the order you wish to see them)
          </h3>
          <Paper className={classes.paperView}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    width="30%"
                    className={classes.tableHeader}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="left"
                    width="30%"
                    className={classes.tableHeader}
                  >
                    Type
                  </TableCell>
                  <TableCell width="10%"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* CURRENTLY MAPPING ROWS FROM ABOVE */}
                {this.props.sections.map((section) => (
                  <SectionToChoose key={section.id} section={section} />
                ))}
              </TableBody>
            </Table>
          </Paper>
          <br></br>
          <h2 className={classes.headerLesser}>Chosen Sections</h2>
          <h3 className={classes.headerLeast}>
            (Sections will appear from top to bottom)
          </h3>
          <Paper className={classes.paperView}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    width="30%"
                    className={classes.tableHeader}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="left"
                    width="30%"
                    className={classes.tableHeader}
                  >
                    Type
                  </TableCell>
                  <TableCell width="10%"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.chosenSections.map((section) => (
                  <ChosenSection key={section.id} section={section} />
                ))}
              </TableBody>
            </Table>
          </Paper>
          <div className={classes.adminButtonContainer}>
            <Button
              variant="contained"
              type="submit"
              name="submit"
              className={classes.adminButtonAdd}
              onClick={this.backtoAddRealm}
            >
              Back to Name Realm
            </Button>
            <Button
              variant="contained"
              type="submit"
              name="submit"
              className={classes.adminButtonAdd}
              onClick={this.submitRealmWithSections}
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
  realm: reduxState.realm,
});

AddSectionsToNewRealmPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  connect(mapReduxStateToProps)(AddSectionsToNewRealmPage)
);
