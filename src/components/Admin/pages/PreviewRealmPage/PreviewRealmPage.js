import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PreviewRealm from '../../components/PreviewRealm/PreviewRealm';
import styles from '../../../../themes/adminTheme.js';
import { withStyles, Grid, Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

class PreviewRealmPage extends Component {
  state = {
    edit: true,
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <center>
              {this.state.edit ? (
                <div>
                  <PreviewRealm />
                  <Link
                    to="/view-realms"
                    className={classes.downloadButtonLink}
                  >
                    <Button
                      variant="contained"
                      className={classes.adminButtonAdd}
                    >
                      Back to Realms
                    </Button>
                  </Link>
                </div>
              ) : (
                <div>
                  <Button
                    variant="contained"
                    id="submit-new-section-btn"
                    className={classes.adminButtonPreviewAgain}
                    onClick={this.toggleEdit}
                  >
                    <VisibilityIcon
                      className={classes.previewSectionPreviewIcon}
                    />
                    Realm
                  </Button>
                </div>
              )}
            </center>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  user: reduxState.user,
  reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(
  withStyles(styles)(PreviewRealmPage)
);
