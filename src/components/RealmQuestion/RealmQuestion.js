import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, TextField, FormControl } from '@material-ui/core';
import styles from '../../themes/realmHomeTheme';

class Question extends Component {
  componentWillMount() {
    console.log(this.props.question);
    this.setState({
      answer: '',
    });
  }


  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
    console.log('state:', this.state);
    console.log('this.props', this.props);
  };

  render() {
    // Deconstructing more props
    const { classes, question } = this.props;
    return (
      <>
        <FormControl className={classes.formContainer}>
          <div className={classes.QandAContainer}>
            <div className={classes.formQuestion}>
              { question.content }
            </div>
            <TextField
              variant="outlined"
              multiline
              rows={2}
              className={classes.inputControl}
              value={this.props.local[`answer${question.id}`]}
              onChange={this.props.changeHandler(`answer${question.id}`)}
              InputProps={{
                classes: {
                  input: classes.input,
                  root: classes.cssOutlinedInput,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </div>
        </FormControl>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(Question));
