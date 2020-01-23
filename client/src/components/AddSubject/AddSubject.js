import React, {useEffect, useState} from 'react'
import axios from 'axios';
import InputField from './Content/InputField';
import DisplaySubject from './Content/DisplaySubject';

const AddSubject = () => {

    const [subject, setSubject] = useState(null);
    const [loading, setLoading] = useState(true);
    const callback = async () => {
        try {
            const response = await axios.get('/subject');
            setSubject(response.data.subjects);
            setLoading(false);
        } catch (err) {
            console.log(err.message);
        }
    } 
    useEffect(()=> {
        callback();
    }, []);

    const updateSubject = (name, code) => setSubject([...subject, {name, code}]);
    const deleteHandler = event => {
        const value = event.target.parentNode.parentNode.childNodes[1].innerHTML;
        // console.log(value);
        const updatedSubject = subject.filter(sub=> sub.code !== value);
        setSubject(updatedSubject);
    }
    if(loading) {
        return <p>Loading . . . . </p>
    }
    return (
        <div className="dashboard-container">
            <InputField updateSubject={updateSubject}/>
            <DisplaySubject subject={subject} deleteHandler ={deleteHandler}/>
        </div>
    )
}

export default AddSubject;