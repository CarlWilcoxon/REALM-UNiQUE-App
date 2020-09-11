import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../Question/Question';
import styles from '../../themes/realmHomeTheme';
import {
  withStyles,
  Grid,
  Button,
  Typography,
  // FormControl,
  // TextField,
  // Paper,
} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LockIcon from '@material-ui/icons/Lock';


class RealmHome extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_REALM',
      payload: {
        realmId: this.props.match.params.realm,
      },
    })
  }

  saveAndContinue = (event) => {
    // Go to this realm's form?
    this.props.history.push(
      `/realm/${this.props.match.params.realm
      }/section/${(this.props.state.realm !==undefined
         ?
        this.props.state.realm.section[0].section_id
        : '' )}`)
  };
  goBack = () => this.props.history.push('/home');


  render() {

    const {
      classes,
      realm
    } = this.props;

    return (
      <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      >
        <Grid
          // className={classes.leftSideFlex}
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
              <Typography variant="h3" className={classes.realmTitle} gutterBottom>
                Realm of {realm.realm_name} Wellness
              </Typography>
            </Grid>
          ) : '' }

          { realm.cover_photo !== undefined ? (
            <Grid item className={classes.realmCoverContainer}>
                <img
                className={classes.realmCover}
                src="images/emotionalRealmCover.jpg"
                alt={realm.realm_name + " realm logo"}
              />
            </Grid>
          ) : '' }

          {realm.description !== undefined ? (
            <Grid item>
              <p className={classes.realmDescription}>
                {realm.description}
              </p>
            </Grid>
          ) : 'loading' }


          <Grid className={classes.realmButtonContainer}>

            {realm !== undefined?
            <Button
              className={classes.realmButton}
              onClick={this.saveAndContinue}
            >
              Continue
            </Button> : '' }

            <Button
              className={classes.realmButton}
              onClick={this.goBack}
            >
              Go Back
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  state,
  realm: state.realm,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(RealmHome));
