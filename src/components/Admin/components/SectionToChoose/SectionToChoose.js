import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from '../../../../themes/adminTheme.js';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';


class SectionToChoose extends Component {

addchosen = (section) => (event) =>{
    console.log('addchosen clicked', section)
    this.props.dispatch({type: 'ADD_CHOSEN', payload: section})
    this.props.dispatch({type: 'REMOVE_SECTION_ALLSECTIONS', payload: section})
}

  render() {
    const { classes } = this.props;
    return (
        <TableRow>
          <TableCell align="left" component="th" scope="row">
            {this.props.section.title}
          </TableCell>
          <TableCell className={classes.tableCell} align="left">
            {this.props.section.type_name === 'Image'? <ImageIcon /> : ''}
            {this.props.section.type_name === 'Video'? <YouTubeIcon /> : ''}
            {this.props.section.type_name === 'Text'? <DescriptionIcon /> : ''}
          </TableCell>
          <TableCell align="right">
            <Button onClick = {this.addchosen(this.props.section)}>Add Section</Button>
          </TableCell>
      </TableRow>
    );
  }
}


const mapReduxStateToProps = (reduxState) => ({
    sections: reduxState.allSections,
  });


export default withRouter(connect(mapReduxStateToProps)(SectionToChoose));