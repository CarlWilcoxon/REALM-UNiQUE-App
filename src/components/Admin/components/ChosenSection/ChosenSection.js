import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withStyles,
  TableCell,
  TableRow,
  IconButton,
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';
import styles from '../../../../themes/adminTheme.js';
import RemoveIcon from '@material-ui/icons/Remove';

// This component renders the table of chosen sections for AddSectionsToNewRealm
class ChosenSection extends Component {
  removechosen = (section) => (event) => {
    // console.log('addchosen clicked', section);
    this.props.dispatch({ type: 'ADD_SECTION_ALLSECTIONS', payload: section });
    this.props.dispatch({ type: 'REMOVE_CHOSEN', payload: section });
  };

  render() {
    const { classes } = this.props;
    return (
      <TableRow>
        <TableCell
          align="left"
          component="th"
          scope="row"
          className={classes.tableCell}
        >
          {this.props.section.title}
        </TableCell>
        <TableCell className={classes.tableCellType} align="left">
          {this.props.section.type_name === 'image' ? (
            <ImageIcon className={classes.addSectionResourceIcon} />
          ) : (
            ''
          )}
          {this.props.section.type_name === 'video' ? (
            <YouTubeIcon className={classes.addSectionResourceIcon} />
          ) : (
            ''
          )}
          {this.props.section.type_name === 'text' ? (
            <DescriptionIcon className={classes.addSectionResourceIcon} />
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="right">
          <IconButton
            variant="contained"
            color="primary"
            size="large"
            onClick={this.removechosen(this.props.section)}
            aria-label="delete"
            className={classes.margin}
          >
            <RemoveIcon
              fontSize="large"
              className={classes.removeSectionResourceIcon}
            />
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

ChosenSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapReduxStateToProps)(ChosenSection));
