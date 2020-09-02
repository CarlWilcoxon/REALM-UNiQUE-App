import React, { Component } from 'react';

class AdminDashboard extends Component {
    
    render() {
        return (
            <div>
                <h1>Welcome [USERNAME]!</h1>
                <div>
                    <h2>Projects</h2>
                    <button>View</button>
                </div>
                <div>
                    <h2>Realms</h2>
                    <button>View</button>
                </div>
                <div>
                    <h2>Public Data</h2>
                    <button>Download</button>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;
