import React, { Component } from 'react'
import UserDetails from './Display/UserDetails';

class Evaluate extends Component {

    render() {
        return (
            <div className="dashboard-container">
                <UserDetails history={this.props.history}/>
            </div>
        )
    }
}

export default  Evaluate;