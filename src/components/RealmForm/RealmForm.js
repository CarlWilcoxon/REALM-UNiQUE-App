import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../../themes/realmHomeTheme';
import {
  withStyles,
  Grid,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import RealmQuestion from '../RealmQuestion/RealmQuestion';

class RealmForm extends Component {

  state = {};

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };


  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_SECTION',
      payload: {
        sectionId: this.props.match.params.section,
      },
    });
    this.props.dispatch({
      type: 'FETCH_REALM',
      payload: {
        realmId: this.props.match.params.realm,
      },
    })
    // this.props.dispatch({
    //   type: 'UPDATE_PROGRESS',
    //   payload: {
    //     realmId: this.props.match.params.realm,
    // sectionId: this.props.match.params.section,
      // },
    // })

  }



  goBack = () => {

    this.props.dispatch({
      type: 'SAVE_PROGRESS',
      payload: {
        ...this.state,
        sectionId: this.props.match.params.section,
      },
    });

    this.props.history.push(`/realm-home/${this.props.match.params.realm}`)
  };

  complete = () => {

    this.props.history.push(
      `/realm-form-finished/${
        this.props.match.params.realm}/${
          this.props.match.params.section}`)
  };

  render() {
    const {
      classes,
      section,
      realm,
    } = this.props;

    return (
      <div>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid
            // className={classes.leftSideFlex}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <h3 className={classes.realmTitle}> {realm.realm_name} Realm Form</h3>

            {section.questions !== undefined ? (
              <Grid
              container
              direction="column"
              alignItems="center"
              justify="space-evenly"
              >
                {section.questions.map( (q, i) =>
                <Grid
                item
                component={RealmQuestion}
                question={q}
                local={this.state}
                changeHandler={this.handleInputChangeFor}
                key={i}
                />)}
              </Grid>
              ) : (
              'loading'
            )}

            <div className={classes.realmButtonContainer}>
              <Button className={classes.realmButton} onClick={this.complete}>
                Submit
              </Button>
              <Button className={classes.realmButton} onClick={this.goBack}>
                Save & Return
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
  realm: state.realm,
  section: state.section,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(RealmForm));
