import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Grid,
  Button,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { CSVDownload, CSVLink } from 'react-csv';

const styles = (theme) => ({
  realmCoverContainer: {
    'text-align': 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  navLinkCsv: {
    // float: 'left',
    color: '#1f3556',
    /* background-color: #1f3556; */
    backgroundColor: '#fff',
    'text-align': 'center',
    margin: '-20px 0px 0px 50px',
    padding: '20px 24px 24px 0px',
    'text-decoration': 'none',
    'text-transform': 'capitalize',
    font: '500 15px Poppins, sans-serif',

    /* these last two make the logout button in
        the nav bar look like another link */
    border: 'none',
    cursor: 'pointer',
    outline: '0',
  },
  //   nav-link-csv:hover {
  //     color: #a8dadc;
  //   }

  //   nav-link:hover {
  //     color: #a8dadc;
  //   }
});

class SimpleMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, realm } = this.props;
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.navLinkCsv}
        >
          Statistics
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {' '}
          <MenuItem>
            {' '}
            <CSVLink
              data={'data'}
              className={classes.navLinkCsv}
              target="_blank"
              filename={'my-file.csv'}
            >
              Curriculum{' '}
            </CSVLink>
          </MenuItem>
          <CSVLink data={'data'} className={classes.navLinkCsv} target="_blank">
            Curriculum{' '}
          </CSVLink>
          {/* // onClick={this.handleClose}> */}
          <MenuItem onClick={this.handleClose}>Demographics</MenuItem>
          <MenuItem onClick={this.handleClose}>Feedback</MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // realm: state.realm,
});

export default withStyles(styles)(connect(mapStateToProps)(SimpleMenu));
