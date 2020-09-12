import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { CSVLink } from 'react-csv';
import './Nav.css';
import styles from '../../themes/adminTheme';
import GetAppIcon from '@material-ui/icons/GetApp';

import {
  withStyles,
  // FormControl,
  // Grid,
  // TextField,
  Button,
  // MenuItem,
} from '@material-ui/core';
// const { classes }
const Nav = (props) => (
  // const { classes } = props;

  <div className="nav">
    {props.user.admin ? (
      <Link to="/home">
        <h2 className="nav-title-admin">
          <img alt="logo" className="logo" src="/images/logo.png"></img>
        </h2>
      </Link>
    ) : (
      <Link to="/home">
        <h2 className="nav-title">
          <img alt="logo" className="logo" src="/images/logo.png"></img>
        </h2>
      </Link>
    )}
    <div className="nav-right">
      {/* <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {/* {props.user.id ? ( */}
      {/* // <img className="logo" src="/images/logo.png"></img>
          <span></span>
        ) : (
          'Login / Register'
        )}
      </Link> */}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.admin ? (
        <>
          <Link className="nav-link" to="/view-realms">
            Realms
          </Link>
          <Link className="nav-link" to="/view-sections">
            Sections
          </Link>
          <Link className="nav-link" to="/data">
            Statistics
          </Link>
          {/* <CSVLink data={'data'} className="nav-link-csv" target="_blank"> */}
          {/* <CSVLink data={'data'} className="nav-link" target="_blank">
            {/* <Button variant="contained" className={this.props.downloadButton}> */}
          {/* <GetAppIcon></GetAppIcon> */}
          {/* <br className="download"></br> */}
          {/* Data
          </CSVLink> */}
          {/* <SimpleMenu /> */}
          <LogOutButton className="nav-link" />
        </>
      ) : (
        <>
          <span></span>
          <span></span>
          <LogOutButton className="nav-user-logout" />
        </>
      )}

      {/* Always show this link since the about page is not protected */}
      {/* <Link className="nav-link" to="/about">
        About
      </Link> */}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

// export default connect(mapStateToProps)(Nav);
export default withStyles(styles)(connect(mapStateToProps)(Nav));
