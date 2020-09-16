import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
import styles from '../../../../themes/adminTheme.js';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

class ViewRealmsPage extends Component {
  componentDidMount = () => {
    this.getAllRealms();
  };

  getAllRealms = () => {
    this.props.dispatch({ type: 'FETCH_ALL_REALMS' });
  };

  handleClick = (realmId) => {
    this.props.history.push(`/preview/realm/${realmId}`);
  };

  handleDeleteClick = (realmId) => {
    this.props.dispatch({ type: 'DELETE_REALM', payload: realmId });
  };

  handleNewRealmClick = () => {
    this.props.history.push(`/add-realm`);
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
              id="submit-new-section"
              className={classes.adminButtonPreview}
              classes={{ root: classes.button }}
              onClick={this.handleNewRealmClick}
            >
              <AddIcon className={classes.addSectionViewIcon} /> New Realm
            </Button>
          </div>

          <Paper className={classes.paperViewRealm}>
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
                      // scope="row"
                      className={classes.tableCell}
                    >
                      {realm.realm_name}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        variant="contained"
                        aria-label="preview"
                        className={classes.viewSectionIcon}
                        onClick={() => this.handleClick(realm.id)}
                      >
                        <VisibilityIcon fontSize="large" />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        variant="contained"
                        size="large"
                        aria-label="delete"
                        className={classes.viewSectionDeleteIcon}
                        onClick={() => this.handleDeleteClick(realm.id)}
                      >
                        <DeleteIcon fontSize="large" />
                      </IconButton>
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

ViewRealmsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  realms: reduxState.allRealms,
});

export default connect(mapReduxStateToProps)(
  withStyles(styles)(ViewRealmsPage)
);
