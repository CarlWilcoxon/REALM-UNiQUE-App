import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styles from '../../../../themes/adminTheme.js';
import { withStyles, Grid, Button, Typography } from '@material-ui/core';

class PreviewSectionPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_SECTION',
      payload: {
        sectionId: this.props.match.params.id, //hard-coded, needs to be changed this.props.match.params.section
      },
    });
  }

  render() {
    const { classes, section } = this.props;

    return (
      <div>
        <h1 className={classes.headerView}>Preview</h1>
        {section.title !== undefined ? (
          <p className={classes.sectionTitle}>
            {' '}
            (Name)
            <div className={classes.headerLess}>{section.title}</div> <br></br>
            <br></br>{' '}
          </p>
        ) : (
          'loading'
        )}
        (Content)<br></br>
        <br></br>
        <Grid>
          {section.video_link !== undefined && section.type === 1 ? (
            <Grid className={classes.sectionVideoContainer}>
              <iframe
                title={section.title + ' video'}
                frameborder="0"
                className={classes.sectionVideo}
                src={section.video_link.replace('/watch?v=', '/embed/')}
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
          <p className={classes.sectionDescription}>
            (Description)
            <br></br>
            <br></br>
            {section.description}
          </p>
        ) : (
          'null'
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  section: state.section,
});

export default withRouter(
  withStyles(styles)(connect(mapStateToProps)(PreviewSectionPage))
);
