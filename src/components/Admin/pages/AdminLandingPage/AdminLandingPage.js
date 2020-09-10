import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../../../themes/adminTheme.js';
import {
  withStyles,
  FormControl,
  Grid,
  TextField,
  Button,
  MenuItem,
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { CSVLink } from 'react-csv';

class AdminLandingPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {' '}
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid
            // className={classes.leftSideFlex}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            {' '}
            <h1 className={classes.welcomeMessage} id="welcome">
              Welcome First Name!
              <span className={classes.userName}>
                {/* {this.props.user.username} */}
              </span>{' '}
              <div>
                <Button className={classes.squareButtons}> Projects</Button>
                <Button className={classes.squareButtons}>Realms</Button>
              </div>
              <CSVLink
                data={'data'}
                className={classes.downloadButtonLink}
                target="_blank"
              >
                <Button variant="contained" className={classes.downloadButton}>
                  <GetAppIcon className={classes.downloadIcon} />
                  <span>Public Data</span>
                </Button>
              </CSVLink>
            </h1>
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
  connect(mapReduxStateToProps)(AdminLandingPage)
);
