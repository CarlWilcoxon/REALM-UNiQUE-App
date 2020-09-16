import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styles from '../../../../themes/adminTheme.js';
import { withStyles } from '@material-ui/core';

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
        {/* {this.props.reduxState !== undefined
          ? JSON.stringify(this.props.reduxState)
          : 'loading'} */}
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

        <br></br>
        <div className={classes.sectionCoverContainer}>
          (Cover Photo)
          <br></br>
          <br></br>
          <img
            className={classes.sectionImage}
            src={realm.cover_photo}
            alt={realm.realm_name + ' image'}
          />
        </div>

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
