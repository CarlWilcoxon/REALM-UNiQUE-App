import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Grid,
  Paper,
  GridList,
  GridListTile,
} from '@material-ui/core';
/*
  import {
    AttachMoneyIcon,
    EmojiEmotionsIcon,
    FitnessCenterIcon,
    EcoIcon,
    PlaceIcon,
    EmojiPeopleIcon,
    EmojiObjectsIcon,
    SpaIcon
  } from '@material-ui/icons';
 */
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
// import EcoIcon from '@material-ui/icons/Eco';
// import PlaceIcon from '@material-ui/icons/Place';
// import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import SpaIcon from '@material-ui/icons/Spa';
import styles from '../../themes/homeTheme';
import RealmTile from '../RealmTile/RealmTile';



class HomeMobile extends Component {

  componentDidMount() {
    this.props.dispatch( { type: "FETCH_ALL_REALMS" } );
  }


  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const { classes } = this.props;
    return (
      <div>
        { this.props.realms[1] !== undefined ?
        <>
          <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Grid
              // className={classes.leftSideFlex}
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <h1 className={classes.welcomeMessage} id="welcome">
                Hello{' '}
                <span className={classes.userName}>
                  {this.props.username}
                </span>
                ,
              </h1>
              <h3 className={classes.exploreInvitation}>Explore a Realm.</h3>

              {/* TABLE OF REALMS */}
              <Grid className={classes.GridListRoot}>
                <GridList cols={2} cellHeight={90} className={classes.gridList}>

                  {this.props.realms.map( (realm, index) =>
                    <GridListTile
                      component={RealmTile}
                      key={index}
                      realm={realm}
                      iconIndex={index}
                    />)}

                </GridList>
              </Grid>  {/* End of Table of Realms */}

            </Grid>
          </Grid>
        </>
        :
          ''
        }
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  realms: state.allRealms,
  username: state.user.username,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(HomeMobile));
