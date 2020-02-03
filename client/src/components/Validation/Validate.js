import React, { Component } from 'react';
import Display from './Display/Display';
import Evaluate from './Display/Evaluate';
import axios from 'axios';

class Validate extends Component {

    state = {
        student: null,
        loading: true,
        subject: null
    }

    UNSAFE_componentWillMount = async () => {
        const { id, code } = this.props.match.params;
        const response = await axios.get(`/student/${id}`);
        const { student } = response.data;
        const response2 = await axios.get(`/subject/${code}`)
        const{ subject } = response2.data;
        this.setState({student, loading: false, subject});
    }
    render() {
        const { student, loading, subject } = this.state;

        if(loading) return <p>Loading . . . </p>
        return (
            <div className="dashboard-container">
                <Display student={student}/>
                <Evaluate subject={subject}/>
            </div>
        )
    }
}

export default Validate;