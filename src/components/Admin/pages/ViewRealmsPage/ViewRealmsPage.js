import React, { Component } from 'react';

class ViewRealmsPage extends Component {

    render() {
        return (
            <div>
                <h1>View Realms</h1>
                <button>+ Add New Realm</button>
                <div className="all-realms-table"></div>
            </div>
        );
    }
}

export default ViewRealmsPage;
