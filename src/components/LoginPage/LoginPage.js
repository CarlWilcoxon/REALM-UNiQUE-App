import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  FormControl,
  Grid,
  Link,
  TextField,
  Button,
  Hidden,
} from '@material-ui/core';
// import RegisterPage from '../RegisterPage/RegisterPage';
import styles from '../../themes/loginRegisterTheme';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={0}>
        <img
        alt="a calming ocean view with a rainbow"
          className={
            window.screen.width > 420
              ? classes.videoContainer
              : classes.videoContainerMobile
          }
          src="/images/scenery-2846778.jpg"
        ></img>
        {/* The one at the top only shows up bc I have video speed controller on */}
        {/* <video
          // autoPlay
          playsinline
          preload
          muted
          // controls="false"
          loop
          type="video/mp4"
          className={classes.videoContainer}
          src="https://github.com/brunoreyes/videos/blob/master/goodVideo.mp4?raw=true"
        ></video> */}
        <Hidden xsDown smDown>
          <Grid
            className={classes.leftSideFlex}
            item
            xs={0}
            sm={0}
            md={6}
            lg={6}
          >
            {/* To input video on one side of a page we simply place it in one of the child grids */}
            <div className={classes.infinityControl}>
              {/* <Fade> */}
              <img  alt="logo" className={classes.colorLogo} src="images/logo.png" />
              {/* </Fade> */}
              <p className={classes.infinitytext}>Aspire to Inspire</p>
            </div>
          </Grid>
        </Hidden>
        <Grid
          className={classes.rightSide}
          // backgroundImage="images/scenery-2846778.jpg"
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <div className="loginPage">
            {this.props.errors.loginMessage && (
              <h2 className="alert" role="alert">
                {this.props.errors.loginMessage}
              </h2>
            )}
            <form
              className={classes.formContainer}
              onSubmit={this.login}
              autocomplete="off"
            >
              <h2 className={classes.brandNameControl}>UNiQUE</h2>
              <FormControl className={classes.formControl}>
                <div>
                  <TextField
                    id="outlined-helperText"
                    label="Username"
                    helperText="Required"
                    variant="outlined"
                    className={classes.inputControl}
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        className: classes.floatingLabelFocusStyle,
                      },
                    }}
                    InputProps={{
                      classes: {
                        input: classes.input,
                        root: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    FormHelperTextProps={{
                      classes: { root: classes.helperText },
                    }}
                  />
                </div>
              </FormControl>
              <FormControl className={classes.formControl}>
                <div>
                  <TextField
                    id="outlined-helperText"
                    label="Password"
                    type="password"
                    helperText="Required"
                    variant="outlined"
                    className={classes.inputControl}
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,

                        className: classes.floatingLabelFocusStyle,
                      },
                    }}
                    InputProps={{
                      classes: {
                        input: classes.input,
                        root: classes.cssOutlinedInput,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    FormHelperTextProps={{
                      classes: { root: classes.helperText },
                    }}
                  />
                </div>
              </FormControl>

              <div className={classes.submitButtonContainer}>
                <Button
                  disableElevation
                  className={classes.submitButton}
                  type="submit"
                  name="submit"
                  value="Log In"
                >
                  Login
                </Button>
              </div>
              <Link
                className={classes.register}
                type="button"
                onClick={() => {
                  this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' });
                }}
              >
                Sign Up
              </Link>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default withStyles(styles)(connect(mapStateToProps)(LoginPage));
