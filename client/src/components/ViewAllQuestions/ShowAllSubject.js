import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './Utils/Card';

const ShowAllSubject = props => {

    const [questions, setQuestions] = useState([]);
    const [subject, setSubject] = useState([]);
    const [card, setCard] = useState(false);

    const callback = async () => {
        const res1 = await axios.get('/subject');
        setSubject(res1.data.subjects);
        const res2 = await axios.get('/questions');
        setQuestions(res2.data.questions);
    }
    useEffect(() => {
        callback();
    }, []);
    return (
        <div style={{ margin: '8vh 100px' }}>
            {
                subject.map((sub, index) => <Card subject={sub} question={questions} index={index} />)
            }
        </div>
    )
}

export default ShowAllSubject;