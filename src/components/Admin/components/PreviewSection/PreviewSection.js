import React, { Component } from 'react';
import { connect } from 'react-redux';

class PreviewSectionPage extends Component {
    render() {
        return (
            <div>
                <h1>Preview</h1>
                
                {this.props.reduxState.section.title !== undefined ? (
                    <h3>{this.props.reduxState.section.title}</h3>
                ) : (
                        'null'
                    )}
                <br/>
                {this.props.reduxState.section.description !== undefined ? (
                    <p>{this.props.reduxState.section.description}</p>
                ) : (
                        'NULL'
                    )}

                <div>
                    {this.props.reduxState.section !== undefined ? (
                        <iframe
                            width="420"
                            title="section video"
                            height="315"
                            src={this.props.reduxState.section.video_link}
                        ></iframe>
                    ) : (
                            'loading'
                        )}
                </div>

                {this.props.reduxState.section !== undefined
                    ? JSON.stringify(this.props.reduxState.section)
                    : 'loading'}

                {/* {this.props.reduxState.section.questions !== undefined ? (
                    <Question question={this.props.reduxState.section.questions} />
                ) : (
                        'loading'
                    )} */}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    user: reduxState.user,
    reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(PreviewSectionPage);
