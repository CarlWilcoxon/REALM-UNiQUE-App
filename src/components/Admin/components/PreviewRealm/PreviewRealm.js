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
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_REALM_SECTIONS',
      payload: {
        realmId: this.props.match.params.id,
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
          </p>
        ) : (
          'loading'
        )}
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
        (Sections)<br></br>
        (Section id)
        <div className={classes.headerLess}>{realm.section_id}</div> <br></br>
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
