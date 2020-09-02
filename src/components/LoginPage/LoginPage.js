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

const styles = (theme) => ({
  allContainer: {},

  videoContainer: {
    position: 'absolute',
    height: '765px',
    width: '100%',
    overflow: 'hidden',
    'object-fit': 'cover',
  },
  infinityControl: {
    'text-align': 'center',
    position: 'relative',
    width: '100%',
    margin: 'auto',
  },
  colorLogo: {
    width: '40%',
    // filter: 'grayscale(100%)',
    filter: 'brightness(0) invert(1)',
  },
  infinitytext: {
    font: '300 40px Poppins, sans-serif',
    color: '#fff',
    padding: '80px 0px 0px 0px',
  },
  leftSideFlex: {
    flexGrow: 1,
    height: '765px',
    display: 'flex',
  },
  leftSide: {
    flexGrow: 1,
    height: '765px',
    display: 'none',
  },
  rightSide: {
    flexGrow: 1,
    height: '765px',
  },
  formContainer: {
    margin: '40px auto 20px auto',
    'background-color': 'transparent',
    'text-align': 'center',
    position: 'relative',
    color: '#f1f1f1',
    width: '50%',
    padding: '40px 0px 0px 0px',
  },
  brandNameControl: {
    font: '600 50px Poppins, sans-serif',
    position: 'relative',
    width: '100%',
  },
  formControl: {
    margin: '0px 0px 15px 0px',
    width: '70%',
  },
  inputControl: {
    margin: '0px 0px 15px 0px',
    width: '100%',
    font: '500 10px Poppins, sans-serif',
    color: '#fff',
  },
  cssLabel: {
    color: 'white',
    '&.Mui-focused': {
      color: 'white',
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: `white !important`,
        color: 'white',
      },
    },
  },
  input: {
    color: 'white',
  },
  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important',
  },
  helperText: {
    color: 'white',
  },
  submitButtonContainer: { width: '100%', position: 'relative' },
  submitButton: {
    color: { opacity: 0 },
    // 'mix-blend-mode': 'color-burn',
    'mix-blend-mode': 'screen',
    'background-color': 'white',
    font: '600 16px Poppins, sans-serif',
    'text-transform': 'capitalize',
    border: '#fff solid 2px',
    margin: '10px auto 60px auto',
    padding: '10px auto 0px auto',
    'border-radius': '25px',
    '&:hover': {
      'background-color': { opacity: 0 },
      border: '#fff solid 2px',
      color: '#fff',
    },
    width: '70%',
    position: 'relative',
  },
  register: {
    'text-align': 'center',
    font: '500 15px Poppins, sans-serif',
    color: '#fff',
    width: '100%',
    position: 'relative',
  },
});

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
        <div>
          <img
            className={classes.videoContainer}
            src="/images/scenery-2846778.jpg"
          ></img>
          {/* <video className={classes.videoContainer} autoPlay muted loop> */}
          {/* <source src=" */}
          {/* <iframe
            className={classes.videoContainer}
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/video/454034298"
          ></iframe> */}
          {/* <iframe
            className={classes.videoContainer}
            src="https://player.vimeo.com/video/454034298"
            width="640"
            height="480"
            frameborder="0"
            autoplay="1"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe> */}
          {/* " type="video/mp4" /> */}
          {/* </video> */}
        </div>
        <Hidden xsDown smDown>
          <Grid
            // className={classes.leftSide}
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
              <img className={classes.colorLogo} src="images/logo.png" />
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
                  Submit
                </Button>
              </div>
              <Link
                className={classes.register}
                type="button"
                onClick={() => {
                  this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' });
                }}
              >
                Register
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
