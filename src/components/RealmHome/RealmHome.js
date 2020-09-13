import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import { withStyles, Grid, Button, Typography } from '@material-ui/core';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import LockIcon from '@material-ui/icons/Lock';

class RealmHome extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_REALM',
      payload: {
        realmId: this.props.match.params.realm,
      },
    });
    this.props.dispatch({
      type: 'FETCH_PROGRESS',
      payload: {
        realmId: this.props.match.params.realm,
      },
    });
  }

  goContinue = (event) => {
    console.log(this.props.state);
    // Use the user's progress to determine where to send them
    // If the user has progress saved use it
    if (this.props.progress.realm_id !== undefined) {
      // If the user's hasn't started the realm yet, go to the form page
      if (!this.props.progress.started)
        this.props.history.push(
          `/realm-form/${this.props.match.params.realm}/${this.props.realm.section[0].section_id}`
        );
      // Otherwise go to the last page the user was on.
      else {
        this.props.history.push(
          `/section/${this.props.match.params.realm}/${this.props.progress.section_id}`
        );
      }
    } else {
      // Otherwise go to this realm's form
      // /section/:realm/:section
      this.props.history.push(
        `/realm-form-intro/${this.props.match.params.realm}/${
          this.props.realm !== undefined
            ? this.props.realm.section[0].section_id
            : ''
        }`
      );
    }
  };

  goBack = () => this.props.history.push('/home');

  render() {
    const { classes, realm } = this.props;

    return (
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          justify="center"
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          {/* <h1>THIS IS SECTION {this.props.match.params.id}</h1> */}
          {realm.realm_name !== undefined ? (
            <Grid item>
              <Typography
                variant="h3"
                className={classes.realmTitle}
                gutterBottom
              >
                Realm of {realm.realm_name} Wellness
              </Typography>
            </Grid>
          ) : (
            ''
          )}

          {realm.cover_photo !== undefined ? (
            <Grid item className={classes.realmCoverContainer}>
              <img
                className={classes.realmCover}
                src={realm.cover_photo}
                alt={realm.realm_name + ' realm logo'}
              />
            </Grid>
          ) : (
            ''
          )}

          {realm.description !== undefined ? (
            <Grid item>
              <Typography className={classes.realmDescription}>
                {realm.description}
              </Typography>
            </Grid>
          ) : (
            'loading'
          )}

          {/* {this.props.state.progress !== undefined ? (
            JSON.stringify(this.props.state)
            ) : 'loading' } */}

          <Grid className={classes.realmButtonContainer}>
            {realm !== undefined ? (
              <Button className={classes.realmButton} onClick={this.goContinue}>
                Continue
              </Button>
            ) : (
              ''
            )}

            <Button className={classes.realmButton} onClick={this.goBack}>
              Go Back
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  realm: state.realm,
  user: state.user,
  progress: state.progress,
  state,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(RealmHome));
