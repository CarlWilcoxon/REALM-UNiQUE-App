import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { CSVLink } from 'react-csv';
import './Nav.css';
import styles from '../../themes/adminTheme';
import GetAppIcon from '@material-ui/icons/GetApp';

import { withStyles, Button } from '@material-ui/core';
import SimpleMenu from '../DownloadData/DownloadData';
const Nav = (props) => (
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
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.admin ? (
        <>
          <Link className="nav-link" to="/view-realms">
            Realms
          </Link>
          <Link className="nav-link" to="/view-sections">
            Sections
          </Link>
          <Link className="nav-link" to="/statistics">
            Statistics
          </Link>
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
