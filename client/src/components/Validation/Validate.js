import React, { Component } from 'react';
import Display from './Display/Display';
import axios from 'axios';

class Validate extends Component {

    state = {
        student: null,
        loading: true
    }

    UNSAFE_componentWillMount = async () => {
        const { id } = this.props.match.params;
        const response = await axios.get(`/student/${id}`);
        const { student } = response.data;
        this.setState({student, loading: false});
    }
    render() {
        const { student, loading } = this.state;

        if(loading) return <p>Loading . . . </p>
        return (
            <div className="dashboard-container">
                <Display student={student}/>
            </div>
        )
    }
}

export default Validate;