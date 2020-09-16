import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../Question/Question';
import styles from '../../themes/realmHomeTheme';
import { withStyles, Grid, Button, Typography } from '@material-ui/core';

class Section extends Component {
  state = {};

  handleInputChangeFor = (propertyName) => (event) => {
    // console.log('old state:', this.state);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

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
      type: 'UPDATE_PROGRESS',
      payload: {
        realmId: this.props.match.params.realm,
        sectionId: this.props.match.params.section,
      },
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.section !== prevProps.match.params.section) {
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
        type: 'UPDATE_PROGRESS',
        payload: {
          realmId: this.props.match.params.realm,
          sectionId: this.props.match.params.section,
        },
      });
    }
  }
  // this.forceUpdate();

  saveAndContinue = () => {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth',
    // });
    this.props.dispatch({
      type: 'SUBMIT_RESPONSE',
      payload: {
        state: this.state,
        realmId: this.props.match.params.realm,
        sectionId: this.props.match.params.section,
      },
    });

    const section_order = this.props.realm.section;
    let next_section = -1;

    // loop through the section order array
    for (let i = 0; i < section_order.length; i++) {
      // if there is still a section after this one
      if (
        section_order[i].section_id === parseInt(this.props.match.params.section) &&
        i + 1 < section_order.length
      ) {
        next_section = section_order[i + 1].section_id;
      }
    }

    if (next_section === -1) {
      this.props.history.push(
        `/realm-feedback/${this.props.match.params.realm}`
      );
    } else {
      this.props.history.push(
        `/section/${this.props.match.params.realm}/${next_section}`
      );
    }
  };

  saveAndReturn = () => {
    this.props.dispatch({
      type: 'SAVE_SECTION',
      payload: {
        state: this.state,
        realmId: this.props.match.params.realm,
        sectionId: this.props.match.params.section,
      },
    });
    this.props.history.push(`/realm-home/${this.props.match.params.realm}`);
  };

  render() {
    const { classes, section } = this.props;
    return (
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {section.title !== undefined ? (
            <h3 className={classes.sectionTitle}>{section.title}</h3>
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
                  src={
                    section.video_link.includes('youtube')
                      ? section.video_link.replace('/watch?v=', '/embed/')
                      : section.video_link.includes('ted.com/')
                      ? section.video_link.replace(
                          '//www.ted.com/',
                          '//embed.ted.com/'
                        )
                      : 'invalid video source: only youtube and ted.com are supported'
                  }
                />
              </Grid>
            ) : (
              ''
            )}
          </Grid>
          {section.text_content !== undefined && section.type === 2 ? (
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
            <p className={classes.sectionDescription}>{section.description}</p>
          ) : (
            'loading'
          )}

          {section.questions !== undefined ? (
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="space-evenly"
            >
              {' '}
              <br></br>
              {section.questions.map((q, i) => (
                <Grid
                  item
                  component={Question}
                  question={q}
                  local={this.state}
                  changeHandler={this.handleInputChangeFor}
                  key={i}
                />
              ))}
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
  section: state.section,
  realm: state.realm,
});

export default withStyles(styles)(connect(mapStateToProps)(Section));
