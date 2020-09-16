import React, { Component } from 'react';
import { connect } from 'react-redux';

import PreviewSection from '../../components/PreviewSection/PreviewSection';
import EditSection from '../../components/EditSection/EditSection';
import styles from '../../../../themes/adminTheme.js';
import { withStyles, Grid, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

class PreviewSectionPage extends Component {
  state = {
    edit: false,
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
              {!this.state.edit ? (
                <div>
                  <PreviewSection />
                  <Button
                    variant="contained"
                    id="submit-new-section-btn"
                    className={classes.adminButtonPreview}
                    onClick={this.toggleEdit}
                  >
                    <EditIcon className={classes.editSectionPreviewIcon} />
                    Section
                  </Button>
                </div>
              ) : (
                <div>
                  <EditSection />

                  <Button
                    variant="contained"
                    id="submit-new-section-btn"
                    className={classes.adminButtonAddMarginLess}
                    onClick={this.toggleEdit}
                  >
                    <VisibilityIcon
                      className={classes.previewSectionPreviewIcon}
                    />
                    Section
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
  withStyles(styles)(PreviewSectionPage)
);
