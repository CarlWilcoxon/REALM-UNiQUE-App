import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import { withStyles, Grid, Button } from '@material-ui/core';

class EmotionalFormFinished extends Component {

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
    })
    this.props.dispatch({
      type: 'FETCH_PROGRESS',
      payload: {
        realmId: this.props.match.params.realm,
      },
    })

  }



  // goBack = () => this.props.history.push(`/realm-home/${this.props.match.params.realm}`);
  goBack = () => this.props.history.push(`/home`);
  continue = () => {
    // this.props.dispatch({
    //   type: 'UPDATE_PROGRESS',
    //   payload: {
    //     realmId: this.props.match.params.realm,
    //     sectionId: this.props.match.params.section,
    //   },
    // })
    if (this.props.state.progress.index !== undefined ){
    this.props.history.push(
    `/section/${this.props.match.params.realm}/${
      this.props.state.realm.section[(this.props.state.progress.index+1)].section_id
    }`)};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          // direction="column"
        >
          <Grid
            // className={classes.leftSideFlex}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <h3 className={classes.realmTitle}>Thank You!</h3>
            <div className={classes.formDescriptionContainerThankYou}>
              <p className={classes.formDescription}>
                We appreciate your participation in filling out our realm form.
                Your answers have been saved. Click continue to start the realm
                course.
              </p>
            </div>
          </Grid>{' '}
          <div className={classes.bottomNav}>
            <Button className={classes.realmButton} onClick={this.continue}>
              Start Realm Course
            </Button>{' '}
            <Button className={classes.realmButton} onClick={this.goBack}>
              Back to Realms
            </Button>
          </div>
          {/*end container */}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(
  connect(mapStateToProps)(EmotionalFormFinished)
);
