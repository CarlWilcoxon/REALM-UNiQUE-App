import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../Question/Question';
import styles from '../../themes/realmHomeTheme';
import {
  withStyles,
  Grid,
  Button,
  // FormControl,
  // TextField,
  // Paper,
} from '@material-ui/core';

class Section extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_SECTION',
      payload: {
        sectionId: this.props.match.params.id,
      },
    });
  }

  saveAndContinue = () => {
    this.props.history.push('/EmotionalSec2')
  };
  saveAndReturn = () => {
    // this.props.dispatch({type : 'SAVE_SECTION'})
    this.props.history.push('/EmotionalHome')
  };

  render() {
    const { classes } = this.props;
    return (
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid
            // className={classes.leftSideFlex}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            {/* <h1>THIS IS SECTION {this.props.match.params.id}</h1> */}
            {this.props.state.section.title !== undefined ? (
              <h3 className={classes.sectionTitle}>
                {this.props.state.section.title}
              </h3>
            ) : (
              'loading'
            )}

            <Grid>
              {this.props.state.section.video_link !== undefined ? (
                <Grid className={classes.sectionVideoContainer}>
                  <iframe
                    title={'section video'}
                    frameborder="0"
                    className={classes.sectionVideo}
                    src={this.props.state.section.video_link.replace("/watch?v=","/embed/")}
                  />
                </Grid>
              ) : (
                'loading'
              )}
            </Grid>

            {this.props.state.section.description !== undefined ? (
              <p>{this.props.state.section.description}</p>
            ) : (
              'loading'
            )}
{/*
            {this.props.state.section !== undefined
              ? JSON.stringify(this.props.state.section)
              : 'loading'} */}

            {this.props.state.section.questions !== undefined ? (
              <Grid
              container
              direction="column"
              alignItems="stretch"
              justify="space-evenly"
              >
                {this.props.state.section.questions.map( (q, i) =>
                <Question question={q} key={i} />)}
              </Grid>
              ) : (
              'loading'
            )}
            <Grid className={classes.realmButtonContainer}>
              <Button
                className={classes.realmButton}
                onClick={this.saveAndContinue}
              >
                Save & Continue
              </Button>
              <Button
                className={classes.realmButton}
                onClick={this.saveAndReturn}
              >
                Save & Exit
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
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(Section));
