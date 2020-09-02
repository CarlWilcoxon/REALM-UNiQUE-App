import React, { Component } from 'react';

class ViewClientsPage extends Component {

    render() {
        return (
            <div>
                <h1>Client List</h1>
                <button>+ Add New Client</button>
                <div className="client-table"></div>
            </div>
        );
    }
}

export default ViewClientsPage;
