import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import { withStyles, Grid, Button } from '@material-ui/core';

class RealmFormIntro extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_SECTION',
      payload: {
        sectionId: this.props.match.params.section,
      },
    });
    this.props.dispatch({
      type: 'FETCH_REALM',
      payload: {
        realmId: this.props.match.params.realm,
      },
    });
    this.props.dispatch({
      type: 'FETCH_REALM',
      payload: {
        realmId: this.props.match.params.realm,
      },
    });

  }

  saveAndContinue = (event) => {
    // Go to this realm's form
    // /section/:realm/:section
    this.props.history.push(
      `/section/${
        this.props.match.params.realm
      }/${
        ( ( this.props.realm !== undefined )
         ?
        this.props.realm.section[0].section_id : '' )}`)
  };

  // goBack = () => this.props.history.push('/home');

  goBack = () => this.props.history.push('/realm-home');
  start = () => this.props.history.push('/realm-form');

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid
            // className={classes.leftSideFlex}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <h3 className={classes.realmTitle}>Realm Form Introduction</h3>
            <div className={classes.formDescriptionContainer}>
              <p className={classes.formDescription}>
                Please fill out these preliminary questions regarding emotional
                wellness before beginning the realm course.
              </p>
              <p className={classes.estimatedTimeOfCompletion}>
                Estimated time to complete:{' '}
                <span className={classes.boldTOC}>5-8 minutes</span>
              </p>
            </div>
          </Grid>{' '}
          <div className={classes.bottomNav}>
            <Button className={classes.realmButton} onClick={this.start}>
              Start Form
            </Button>{' '}
            <Button className={classes.realmButton} onClick={this.goBack}>
              Back
            </Button>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(RealmFormIntro));
