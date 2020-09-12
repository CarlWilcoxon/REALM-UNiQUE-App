import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PreviewRealm from '../../components/PreviewRealm/PreviewRealm';
// import EditRealm from '../../components/EditRealm/EditRealm';
import styles from '../../../../themes/adminTheme.js';
import { withStyles, Grid, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
// const styles = (theme) => ({
// });

class PreviewRealmPage extends Component {
  // componentDidMount() {
  //     this.props.dispatch({
  //         type: 'FETCH_SECTION',
  //         payload: {
  //             sectionId: this.props.match.params.id,
  //         },
  //     });
  // }

  state = {
    edit: true,
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  // submitHandler = () => {

  // }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <center>
              {/* <h1 className={classes.header}>(section name)</h1> */}
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
                      // onClick={this.toggleEdit}
                    >
                      {/* <EditIcon className={classes.editSectionPreviewIcon} /> */}
                      Back to Realms
                    </Button>
                  </Link>
                </div>
              ) : (
                <div>
                  {/* <EditRealm /> */}

                  <Button
                    variant="contained"
                    className="submit-new-section"
                    // type="submit"
                    // name="submit"
                    // onClick={this.submitSection}
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
