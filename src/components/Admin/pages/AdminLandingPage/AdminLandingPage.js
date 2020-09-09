import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '/Users/brunoreyes/Desktop/REALM-UNiQUE-App/src/themes/adminTheme.js';
import {
  withStyles,
  FormControl,
  Grid,
  TextField,
  Button,
  MenuItem,
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

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
              <Button
                variant="contained"
                // color="primary"
                // size="large"
                className={classes.rectangleButton}
                // className={classes.button}
                //   startIcon={<GetAppIcon className={classes.downloadIcon} />}
                //
              >
                Download Public Data
              </Button>
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
