import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Intro = ({updateSub}) => {
    const [subject, setSubject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(null);

    async function callback() {
        const response = await axios.get('/subject');
        setSubject(response.data.subjects);
        setLoading(false);
    }

    useEffect(()=>{
       callback();
    },[])

    if(loading) return <p>Loading . . . . </p>

    const submitHandler = event => {
        event.preventDefault();
        updateSub(value)
    }
    let sno=1;
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Add Questions</h1>
            <select className="form-control" onClick={event=>setValue(event.target.value)}>
                {
                    subject.map(sub => <option key={sno++}>{sub.code} - {sub.name}</option>)
                }
                
            </select>
            <button className="btn btn-warning" onClick={submitHandler}>Add Questions</button>
        </div>
    )
}

export default Intro;