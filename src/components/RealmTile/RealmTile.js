import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Grid,
} from '@material-ui/core';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import EcoIcon from '@material-ui/icons/Eco';
import PlaceIcon from '@material-ui/icons/Place';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SpaIcon from '@material-ui/icons/Spa';
import styles from '../../themes/homeTheme';

// this components just renders the icons and names of each realm for MobileHome
class RealmTile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.buttonContainer}>
        <Grid item className={classes.button}>
          {this.props.iconIndex % 8 === 0 ? (
            <EmojiEmotionsIcon className={classes.icon} />
          ) : ( '' )}
          {this.props.iconIndex % 8 === 1 ? (
            <EcoIcon className={classes.icon} />
          ) : ( '' )}
          {this.props.iconIndex % 8 === 2 ? (
            <FitnessCenterIcon className={classes.icon} />
          ) : ( '' )}
          {this.props.iconIndex % 8 === 3 ? (
            <SpaIcon className={classes.icon} />
          ) : ( '' )}
          {this.props.iconIndex % 8 === 4 ? (
            <AttachMoneyIcon className={classes.icon} />
          ) : ( '' )}
          {this.props.iconIndex % 8 === 5 ? (
            <PlaceIcon className={classes.icon} />
          ) : ( '' )}
          {this.props.iconIndex % 8 === 6 ? (
            <EmojiPeopleIcon className={classes.icon} />
          ) : ( '' )}
          {this.props.iconIndex % 8 === 7 ? (
            <EmojiObjectsIcon className={classes.icon} />
          ) : ( '' )}

          <Grid item className={classes.realmName}>
            {this.props.realm.realm_name}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(RealmTile));
