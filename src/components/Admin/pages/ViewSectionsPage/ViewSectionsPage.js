import React, { Component } from 'react';

class ViewSectionsPage extends Component {

    render() {
        return (
            <div>
                <h1>View Sections</h1>
                <button>+ Add New Section</button>
                <div className="all-sections-table"></div>
            </div>
        );
    }
}

export default ViewSectionsPage;
