import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Button,
  Paper,
  GridListTile,
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


class RealmTile extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  goRealm = () => this.props.history.push(`/Realm/${this.props.realm.id}/home`);

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const { classes } = this.props;
    return (
      <GridListTile
        onClick={this.goRealm}
        className={classes.gridListTile}
      >
        <div className={classes.buttonContainer}>
          <Paper
          elevation={3}
          className={classes.buttonPaper}
          >
            <div className={classes.button}>
            { this.props.iconIndex === 0 ?
                <EmojiEmotionsIcon className={classes.icon}/>
                :
                ''
              }
              { this.props.iconIndex === 1 ?
                <EcoIcon className={classes.icon}/>
                :
                ''
              }
              { this.props.iconIndex === 2 ?
                <FitnessCenterIcon className={classes.icon}/>
                :
                ''
              }
              { this.props.iconIndex === 3 ?
                <SpaIcon className={classes.icon}/>
                :
                ''
              }
              { this.props.iconIndex === 4 ?
                <AttachMoneyIcon className={classes.icon}/>
                :
                ''
              }
              { this.props.iconIndex === 5 ?
                <PlaceIcon className={classes.icon}/>
                :
                ''
              }
              { this.props.iconIndex === 6 ?
                <EmojiPeopleIcon className={classes.icon}/>
                :
                ''
              }
              { this.props.iconIndex === 7 ?
                <EmojiObjectsIcon className={classes.icon}/>
                :
                ''
              }



              <br/>
              <div className={classes.realmName}>{this.props.realm.realm_name}</div>
            </div>
          </Paper>
        </div>
      </GridListTile>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(RealmTile));
