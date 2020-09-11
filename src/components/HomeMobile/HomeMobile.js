import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Grid,
  GridList,
  GridListTile,
} from '@material-ui/core';

import styles from '../../themes/homeTheme';
import RealmTile from '../RealmTile/RealmTile';



class HomeMobile extends Component {

  componentDidMount() {
    this.props.dispatch( { type: "FETCH_ALL_REALMS" } );
  }

  goRealm = (realmId) => this.props.history.push(`/realm-home/${realmId}`);

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const { classes } = this.props;
    return (
      <div>
        { this.props.realms[ 0 ] !== undefined ?
        <>
          <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Grid
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
                    // component={Button}
                    key={index}
                    onClick={()=>this.goRealm(realm.id)}
                    className={classes.gridListTile}
                  >
                      <RealmTile
                        realm={realm}
                        iconIndex={index}
                      />
                  </GridListTile>)}

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
