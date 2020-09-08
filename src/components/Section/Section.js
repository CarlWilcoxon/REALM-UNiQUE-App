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

class Section extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_SECTION',
      payload: {
        sectionId: this.props.match.params.section,
      },
    });
  }

  saveAndContinue = () => {
    if (this.props.match.params.section === this.props.state.section.)
    this.props.history.push('/EmotionalSec2')
  };
  saveAndReturn = () => {
    // this.props.dispatch({type : 'SAVE_SECTION'})
    this.props.history.push('/EmotionalHome')
  };

  render() {
    const { classes, section } = this.props;
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
            {section.title !== undefined ? (
              <h3 className={classes.sectionTitle}>
                {section.title}
              </h3>
            ) : (
              'loading'
            )}

            <Grid>
              {section.video_link !== undefined && section.type === 1 ? (
                <Grid className={classes.sectionVideoContainer}>
                  <iframe
                    title={section.title + ' video'}
                    frameborder="0"
                    className={classes.sectionVideo}
                    src={section.video_link.replace("/watch?v=","/embed/")}
                  />
                </Grid>
              ) : (
                ''
              )}
            </Grid>

            {section.image_link !== undefined && section.type === 2 ? (
              <Typography className={classes.sectionDescription}>
                {section.text_content}
              </Typography>
            ) : (
              ''
            )}


            {section.image_link !== undefined && section.type === 3 ? (
              <Grid className={classes.sectionCoverContainer}>
                <img
                  className={classes.realmCover}
                  src={section.image_link}
                  alt={section.title + ' image'}
                  />
              </Grid>
            ) : (
              ''
            )}

            {section.description !== undefined ? (
              <p>{section.description}</p>
            ) : (
              'loading'
            )}
{/*
            {section !== undefined
              ? JSON.stringify(section)
              : 'loading'} */}

            {section.questions !== undefined ? (
              <Grid
              container
              direction="column"
              alignItems="center"
              justify="space-evenly"
              >
                {section.questions.map( (q, i) =>
                <Grid item component={Question} question={q} key={i} />)}
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
