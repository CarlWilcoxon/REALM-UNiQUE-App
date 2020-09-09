import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button,
  TableCell,
  TableRow,
  IconButton,
} from '@material-ui/core';
import styles from '../../../../themes/adminTheme.js';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';
import AddIcon from '@material-ui/icons/Add';

class SectionToChoose extends Component {
  addchosen = (section) => (event) => {
    console.log('addchosen clicked', section);
    this.props.dispatch({ type: 'ADD_CHOSEN', payload: section });
    this.props.dispatch({
      type: 'REMOVE_SECTION_ALLSECTIONS',
      payload: section,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <TableRow>
        <TableCell align="left" component="th" scope="row">
          {this.props.section.title}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {this.props.section.type_name === 'image' ? <ImageIcon /> : ''}
          {this.props.section.type_name === 'video' ? <YouTubeIcon /> : ''}
          {this.props.section.type_name === 'text' ? <DescriptionIcon /> : ''}
        </TableCell>
        <TableCell align="right">
          <IconButton
            variant="contained"
            color="primary"
            size="large"
            onClick={this.addchosen(this.props.section)}
            aria-label="delete"
            className={classes.margin}
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  sections: reduxState.allSections,
  chosenSections: reduxState.chosenSections,
});

SectionToChoose.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  connect(mapReduxStateToProps)(SectionToChoose)
);
