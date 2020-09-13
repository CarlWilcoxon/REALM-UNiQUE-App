import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../../../themes/adminTheme.js';
import {
  withStyles,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

class ViewSectionsPage extends Component {
  componentDidMount = () => {
    this.getAllSections();
  };

  getAllSections = () => {
    this.props.dispatch({ type: "FETCH_ALL_SECTIONS" });
  };

  handleClick = (sectionId) => {
    this.props.history.push(`preview/section/${sectionId}`);
  };

  handleNewSectionClick = () => {
    this.props.history.push(`/add-section`);
  };
  handleDeleteSectionClick = (sectionId) => {
    console.log('delete was clicked!', sectionId);
    this.props.dispatch({
      type: 'DELETE_SECTION',
      payload: sectionId,
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <center>
          <h1 className={classes.headerView}>Sections</h1>
          {/* {JSON.stringify(this.props.sections)} */}
          <div>
            <Button
              variant="contained"
              className="submit-new-section"
              className={classes.adminButtonPreview}
              onClick={this.handleNewSectionClick}
            >
              <AddIcon className={classes.addSectionViewIcon} /> New Section
            </Button>
          </div>
          {/* <AppBar position="static">
                        <Toolbar>
                            <div className={classes.grow} />
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search Sections…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                        </Toolbar>
                    </AppBar> */}
          <Paper className={classes.paperView}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    width="40%%"
                    className={classes.tableHeader}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="left"
                    width="20%"
                    className={classes.tableHeader}
                  >
                    Type
                  </TableCell>
                  <TableCell
                    align="left"
                    width="20%"
                    className={classes.tableHeader}
                  ></TableCell>
                  <TableCell width="15%"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.sections.map((section) => (
                  <TableRow key={section.id}>
                    <TableCell
                      className={classes.tableCell}
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {section.title}
                    </TableCell>
                    <TableCell align="left">
                      {section.type_name === "image" ? (
                        <ImageIcon className={classes.addSectionResourceIcon} />
                      ) : (
                        ""
                      )}
                      {section.type_name === "video" ? (
                        <YouTubeIcon
                          className={classes.addSectionResourceIcon}
                        />
                      ) : (
                        ""
                      )}
                      {section.type_name === "text" ? (
                        <DescriptionIcon
                          className={classes.addSectionResourceIcon}
                        />
                      ) : (
                        ""
                      )}

                    </TableCell>{' '}
                    <TableCell>
                      <IconButton
                        variant="contained"
                        size="large"
                        onClick={() => this.handleClick(section.id)}
                        // onClick={(event) => this.handleClick(section.id)}
                        aria-label="delete"
                        className={classes.viewSectionIcon}
                      >
                        <VisibilityIcon fontSize="large" />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        variant="contained"
                        size="large"
                        // onClick={this.handleDeleteClick}
                        aria-label="delete"
                        className={classes.viewSectionIcon}
                        onClick={(event) =>
                          this.handleDeleteSectionClick(section.id)
                        }
                      >
                        <DeleteIcon fontSize="large" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </center>
      </div>
    );
  }
}

ViewSectionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  sections: reduxState.allSections,
});

export default connect(mapReduxStateToProps)(
  withStyles(styles)(ViewSectionsPage)
);
