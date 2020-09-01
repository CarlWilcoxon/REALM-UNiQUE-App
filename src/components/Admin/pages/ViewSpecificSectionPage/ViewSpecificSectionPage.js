import React, { Component } from 'react';

class ViewSpecificSectionPage extends Component {

    render() {
        return (
            <div>
                <h1>[SECTION NAME]</h1>
                <h5>Type:</h5>
                <p>[TYPE]</p>
                <h5>Description:</h5>
                <p>[DESCRIPTION]</p>
                <h5>Content:</h5>
                <p>[Content]</p>
                <h5>Questions:</h5>
                <p>[Questions]</p>
                <button>Edit Section</button>
            </div>
        );
    }
}

export default ViewSpecificSectionPage;
