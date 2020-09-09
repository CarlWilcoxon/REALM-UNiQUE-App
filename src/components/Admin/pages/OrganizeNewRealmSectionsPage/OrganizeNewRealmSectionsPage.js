import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  card: {
    width: "60%",
    height: "70px",
    margin: "20px"
  },
};

let id = 0;
function createData(name, type) {
  id += 1;
  return { id, name, type};
}

//SAMPLE DATA - DELETE AFTER NO LONGER NEEDED
const rows = [
  createData("Section One", "Text"),
  createData("Section Two", "Text"),
  createData("Section Three", "Video"),
  createData("Section Four", "Video"),
  createData("Section Five", "Image"),
];

class OrganizeNewRealmSectionsPage extends Component {

    render() {
        const { classes } = this.props;
        return (
          <div>
            <center>
              <h1>Organize Sections for New Realm</h1>
              {rows.map((row) => (
                <Card className={classes.card} key={row.id}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={2}>
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography component="p" gutterBottom>
                          {row.name} {/* Section Name */}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography component="p" gutterBottom>
                          {row.type} {/* Section Type */}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <DeleteIcon className={classes.icon} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </center>
          </div>
        );
    }
}

OrganizeNewRealmSectionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  sections: reduxState.allSections,
  chosenSections: reduxState.chosenSections,
});

export default withStyles(styles)(connect(mapReduxStateToProps)(OrganizeNewRealmSectionsPage));
