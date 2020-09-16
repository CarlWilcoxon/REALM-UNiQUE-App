import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../../../themes/adminTheme.js';
import {
  withStyles,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { CSVLink } from 'react-csv';

class StatisticsPage extends Component {

  state = {
    openCurriculum: false,
    openDemographics: false,
    openFeedback: false,
  };


  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_CURRICULUM',
    });
  }
  getCurriculum = () => {
    this.props.dispatch({ type: 'FETCH_CURRICULUM' });
  };
  getDemographics = () => {
    this.props.dispatch({ type: 'FETCH_DEMOGRAPHICS' });
  };
  getFeedback = () => {
    this.props.dispatch({ type: 'FETCH_FEEDBACK' });
  };

  handleSectionsClick = () => {
    this.props.history.push(`/view-sections`);
  };

  handleRealmsClick = () => {
    this.props.history.push(`/view-realms`);
  };
  handleClickOpenCurriculum = () => {
    this.props.dispatch({ type: 'FETCH_CURRICULUM' });
    this.setState({ openCurriculum: true });
  };

  handleCloseCurriculum = () => {
    this.setState({ openCurriculum: false });
  };
  handleClickOpenDemographics = () => {
    this.props.dispatch({ type: 'FETCH_DEMOGRAPHICS' });
    this.setState({ openDemographics: true });
  };

  handleCloseDemographics = () => {
    this.setState({ openDemographics: false });
  };
  handleClickOpenFeedback = () => {
    this.props.dispatch({ type: 'FETCH_FEEDBACK' });
    this.setState({ openFeedback: true });
  };

  handleCloseFeedback = () => {
    this.setState({ openFeedback: false });
  };
  render() {
    const { classes } = this.props;
    const date = new Date().toDateString();

    return (
      <div>
        {' '}
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            {' '}
            <h1 className={classes.statisticsHeader} id="welcome">
              Statistics
            </h1>
            <Button
              variant="contained"
              className={classes.downloadButtonExtended}
              onClick={this.handleClickOpenCurriculum}
            >
              <GetAppIcon className={classes.downloadIcon} />
              <span className={classes.paddingLR}>Curriculum</span>
            </Button>
            <Dialog
              open={this.state.openCurriculum}
              onClose={this.handleCloseCurriculum}
            >
              <DialogTitle className={classes.dialogContent}>
                {'  Are you sure you want to download the curriculum?'}
              </DialogTitle>
              <DialogActions>
                <Button
                  className={classes.adminButtonDialog}
                  onClick={this.handleCloseCurriculum}
                  color="primary"
                >
                  Later
                </Button>
                <CSVLink
                  data={this.props.reduxState.statistics}
                  className={classes.downloadButtonLink}
                  target="_blank"
                  filename={'Curriculum ' + date + '.csv'}
                >
                  <Button
                    onClick={this.handleCloseCurriculum}
                    className={classes.adminButtonDialog}
                    color="primary"
                    autoFocus
                  >
                    Download
                  </Button>
                </CSVLink>
              </DialogActions>
            </Dialog>
            <Button
              variant="contained"
              className={classes.downloadButtonExtended}
              onClick={this.handleClickOpenDemographics}
            >
              <GetAppIcon className={classes.downloadIcon} />
              <span className={classes.paddingLR}>Demographics</span>
            </Button>
            <Dialog
              open={this.state.openDemographics}
              onClose={this.handleCloseDemographics}
            >
              <DialogTitle className={classes.dialogContent}>
                {'  Are you sure you want to download demographics?'}
              </DialogTitle>
              <DialogActions>
                <Button
                  className={classes.adminButtonDialog}
                  onClick={this.handleCloseDemographics}
                  color="primary"
                >
                  Later
                </Button>
                <CSVLink
                  data={this.props.reduxState.statistics}
                  className={classes.downloadButtonLink}
                  target="_blank"
                  filename={'Demographics ' + date + '.csv'}
                >
                  <Button
                    onClick={this.handleCloseDemographics}
                    className={classes.adminButtonDialog}
                    color="primary"
                    autoFocus
                  >
                    Download
                  </Button>
                </CSVLink>
              </DialogActions>
            </Dialog>
            <Button
              variant="contained"
              className={classes.downloadButtonExtended}
              onClick={this.handleClickOpenFeedback}
            >
              <GetAppIcon className={classes.downloadIcon} />
              <span className={classes.paddingLR}>Feedback</span>
            </Button>
            {/* {this.props.reduxState !== undefined
                ? JSON.stringify(this.props.reduxState)
                : 'loading'} */}
            <Dialog
              open={this.state.openFeedback}
              onClose={this.handleCloseFeedback}
            >
              <DialogTitle className={classes.dialogContent}>
                {'  Are you sure you want to download user feedback?'}
              </DialogTitle>
              <DialogActions>
                <Button
                  className={classes.adminButtonDialog}
                  onClick={this.handleCloseFeedback}
                  color="primary"
                >
                  Later
                </Button>
                <CSVLink
                  data={this.props.reduxState.statistics}
                  className={classes.downloadButtonLink}
                  target="_blank"
                  filename={'User Feedback ' + date + '.csv'}
                >
                  <Button
                    onClick={this.handleCloseFeedback}
                    className={classes.adminButtonDialog}
                    color="primary"
                    autoFocus
                  >
                    Download
                  </Button>
                </CSVLink>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(
  connect(mapReduxStateToProps)(StatisticsPage)
);

{
  /* <CSVLink
                data={'data'}
                className={classes.downloadButtonLink}
                target="_blank"
                filename={'Curriculum ' + date + '.csv'}
                onClick={this.getCurriculum}
              >
                {/* src={
                              this.state.videoLink
                                .replace('watch?v=', 'embed/')
                                .split('&feature=emb_title')[0]
                            } */

  /* <Button
                  variant="contained"
                  className={classes.downloadButtonExtended}
                >
                  <GetAppIcon className={classes.downloadIcon} />
                  <span className={classes.paddingLR}>Curriculum</span>
                </Button>
              </CSVLink> */

  /* <div> */
}