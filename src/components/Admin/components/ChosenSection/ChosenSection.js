import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class ChosenSection extends Component {

  render() {
    return (
        <TableRow>
        <TableCell align="left" component="th" scope="row">
          {this.props.section.title}
        </TableCell>
        <TableCell align="left">{this.props.section.type_name}</TableCell>
        <TableCell align="right"> 
          <Button>Remove Section</Button>
        </TableCell>
      </TableRow>
    );
  }
}


const mapReduxStateToProps = (reduxState) => ({
    sections: reduxState.allSections,
  });


export default withRouter(connect(mapReduxStateToProps)(ChosenSection));