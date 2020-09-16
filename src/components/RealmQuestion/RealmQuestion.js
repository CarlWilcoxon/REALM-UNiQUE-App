import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, TextField, FormControl } from '@material-ui/core';
import styles from '../../themes/realmHomeTheme';

class Question extends Component {
  componentWillMount() {
    // console.log(this.props.question);
    this.setState({
      answer: '',
    });
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

  render() {
    // Deconstructing more props
    const { classes, question } = this.props;

    return (
      <>
        <FormControl className={classes.formContainer}>
          <div className={classes.QandAContainer}>
            <div className={classes.formQuestion}>{question.content}</div>

            <TextField
              className={classes.inputControl}
              value={this.props.local[`answer${question.id}`]}
              onChange={this.props.changeHandler(`answer${question.id}`)}
              multiline
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
