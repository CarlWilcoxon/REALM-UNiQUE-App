import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Button, TableCell, TableRow } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';
import styles from '../../../../themes/adminTheme.js';


class ChosenSection extends Component {

removechosen = (section) => (event) =>{
    console.log('addchosen clicked', section)
    this.props.dispatch({type: 'ADD_SECTION_ALLSECTIONS', payload: section})
    this.props.dispatch({type: 'REMOVE_CHOSEN', payload: section})
    }

  render() {
    const { classes } = this.props;
    return (
        <TableRow>
        <TableCell align="left" component="th" scope="row">
          {this.props.section.title}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {this.props.section.type_name === 'image'? <ImageIcon /> : ''}
          {this.props.section.type_name === 'video'? <YouTubeIcon /> : ''}
          {this.props.section.type_name === 'text'? <DescriptionIcon /> : ''}
        </TableCell>
        <TableCell align="right">
          <Button onClick= {this.removechosen(this.props.section)}>Remove Section</Button>
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
