import React, {useState} from 'react'
import Date from '../../Utils/Date';
import {OptionList} from '../../Utils/OptionList';
import {College, University} from '../Data/data';
import axios from 'axios';
import genId from 'react-id-generator';


const Display = () => {
    const [studentName, setStudentName] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [college, setCollege] = useState('');
    const [university, setUniversity] = useState('');

    const onSubmitHandler = async () => {
        const newStudent = {
            id: genId('312316205'),
            name: studentName,
            start: startDate,
            last: endDate,
            college,
            university
        }

        try {
            const response = await axios.post('/add-student', newStudent);
            console.log(response.data);
            setStudentName('');
            setStartDate(null);
            setEndDate(null);
            setCollege('');
            setUniversity('');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div style={{margin: '30px 250px',padding: '20px 100px 70px 100px', border: '2px solid #ccc', borderRadius: '5px', boxShadow: '#eee 7px 7px'}}>
            <h2 style={{marginBottom: '60px', textAlign: 'center'}}>ADD STUDENT</h2>
            <div>   
                <div className="form-group">
                    <label htmlFor="usr"><b>STUDENT NAME:</b></label>
                    <input type="text" style={{marginBottom: '30px'}} onChange={e => setStudentName(e.target.value)} className="form-control" id="usr" />
                    <div style={{display: 'flex', marginBottom:'20px'}}>
                        <Date label="START DTAE" updateDate={e => setStartDate(e.target.value)}/>
                        <Date label="END DTAE" updateDate={e => setEndDate(e.target.value)}/>
                    </div>
                    <OptionList items={College} updateDate={e => setCollege(e.target.value)}/>
                    <OptionList items={University} updateDate={e => setUniversity(e.target.value)}/>
                    <button className="btn btn-primary" style={{float: 'right'}} onClick={onSubmitHandler}>ADD STUDENT</button>
                </div>
                
            </div>
        </div>
    )
}

export default Display;