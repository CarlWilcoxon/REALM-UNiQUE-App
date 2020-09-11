import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styles from '../../../../themes/adminTheme.js';
import {
  withStyles,
  // Grid, Button, Typography
} from '@material-ui/core';

class PreviewRealmPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_REALM',
      payload: {
        realmId: this.props.match.params.id, //hard-coded, needs to be changed this.props.match.params.section
      },
    });
  }

  render() {
    const { classes, realm } = this.props;

    return (
      <div>
        <h1 className={classes.headerView}>Preview</h1>
        {realm.realm_name !== undefined ? (
          <p className={classes.sectionTitle}>
            {' '}
            (Name)
            <div className={classes.headerLess}>{realm.realm_name}</div>{' '}
            <br></br>
            <br></br>{' '}
          </p>
        ) : (
          'loading'
        )}
        (Content)<br></br>
        <br></br>
        {realm.description !== undefined ? (
          <p className={classes.sectionDescription}>
            (Description)
            <br></br>
            <br></br>
            {realm.description}
          </p>
        ) : (
          'null'
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  realm: state.realm,
});

export default withRouter(
  withStyles(styles)(connect(mapStateToProps)(PreviewRealmPage))
);
