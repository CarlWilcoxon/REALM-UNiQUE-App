import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import { withStyles, Grid, Button } from '@material-ui/core';

class RealmFormFinished extends Component {

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
  }



  // goBack = () => this.props.history.push(`/realm-home/${this.props.match.params.realm}`);
  goBack = () => this.props.history.push(`/home`);
  continue = () => {
    this.props.dispatch({
      type: 'FORM_FINISHED',
      payload: {
        realmId: this.props.match.params.realm,
        sectionId: this.props.match.params.section,
      },
    })

    const section_order = this.props.state.realm.section;
    let next_section = -1;

    // loop through the section order array
    for (let i=0; i < section_order.length; i++) {
      // if there is still a section after this one
      if (section_order[i].section_id === parseInt(this.props.match.params.section) &&
      (i + 1 < section_order.length) ) {
        next_section = section_order[i+1].section_id;
      }
    }

    if (next_section === -1) {
      this.props.history.push(
        `/realm-feedback/${this.props.match.params.realm}`);
    } else {
      this.props.history.push(
        `/section/${this.props.match.params.realm}/${next_section}`);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid
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
  connect(mapStateToProps)(RealmFormFinished)
);
