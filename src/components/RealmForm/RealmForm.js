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

class RealmForm extends Component {


  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_SECTION',
      payload: {
        sectionId: this.props.match.params.section,
      },
    });
  }



  goBack = () => this.props.history.push('/EmotionalFormIntro');
  complete = () => this.props.history.push('/EmotionalFormFinished');

  render() {
    const { classes } = this.props;
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
            <h3 className={classes.realmTitle}>Emotional Realm Form</h3>
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  What do you think about most of the time?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  How many negative thoughts do you think about yourself?{' '}
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  How many positive thoughts do you think about yourself?{' '}
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  List things you are afraid of. Can you control these things?{' '}
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  List some memories. Are they mainly positive or negative?{' '}
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  How much sleep do you get at night?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  What time do you normally go to bed?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  What time do you normally get out of bed?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  Do you take any medication to sleep?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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

            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  Do you look at your phone, watch tv, or work on a computer
                  right before bed?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  How do you face, deal with, and/or overcome responsibilities,
                  problems, or difficulties?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  Do you eat or drink alcohol when upset of celebrating?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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
            <FormControl className={classes.formContainer}>
              <div className={classes.QandAContainer}>
                <div className={classes.formQuestion}>
                  Do you go to the gym when stressed out, or do you get
                  depressed and sleep?
                </div>
                <TextField
                  id="outlined-helperText"
                  // label="What do you think about most of the time?"
                  // helperText="Required"
                  variant="outlined"
                  // multiline
                  // rows={2}
                  className={classes.inputControl}
                  // value={this.state.password}
                  // onChange={this.handleInputChangeFor('password')}
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

            <div className={classes.realmButtonContainer}>
              <Button className={classes.realmButton} onClick={this.complete}>
                Submit
              </Button>{' '}
              <Button className={classes.realmButton} onClick={this.goBack}>
                Back
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
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(RealmForm));
