import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Search } from '../../Utils/Search';

const UserDetails = props => {
    const [loading, setLoading] = useState(true);
    const [studentsDetails, setStudentsDetails] = useState(null);
    const [curStudent, setCurStudent] = useState('');
    const [subjects, setSubjects] = useState(null);
    const [curSubject, setCurSubject] = useState('')
    
    useEffect(()=> {
        const getStudents = async () => {
            try {
                const response = await axios.get('/student');
                const { students } = response.data;
                setStudentsDetails(students);
                const response2 = await axios.get('/subject');
                const { subjects } = response2.data;
                setSubjects(subjects);
                setLoading(false);
            } catch (err) {
                console.log(err.message);
            }
        }
        getStudents();
    }, []);

    if(loading) return <p>Loading . . . </p>
    const toShow = Search(curStudent, studentsDetails, 'id');
    const showSubjects = Search(curSubject, subjects, 'code');
    console.log(props.history)
    return (
        <div style={{margin: '40px 350px'}}>
            <h1>EXAM EVALUATION</h1>
            <div id="myDropdown" className="dropdown-content" style={{marginTop: '20px'}}>
                <label htmlFor="exampleInputEmail1">STUDENT ID</label>
                <input type="email" className="form-control" value={curStudent} onChange={e => setCurStudent(e.target.value)} placeholder="Enter Register Number" />
                <div style={{backgroundColor: '#eee'}}>
                    {
                        curStudent!=='' ? toShow.map(show => (
                            <div>
                                <p style={{padding: '12px 5px 0px 8px'}} onClick={e => setCurStudent(e.target.innerHTML.split('-')[0])}>{show.id} - {show.name}</p>
                                <hr />
                            </div>
                        )) : null
                    }
                </div>
            </div>
            <div id="myDropdown" className="dropdown-content" style={{marginTop: '20px'}}>
                <label htmlFor="exampleInputEmail1">SUBJECT CODE</label>
                <input type="email" className="form-control" value={curSubject} onChange={e => setCurSubject(e.target.value)} placeholder="Enter subject code" />
                <div style={{backgroundColor: '#eee'}}>
                    {
                        curSubject!=='' ? showSubjects.map(show => (
                            <div>
                                <p style={{padding: '12px 5px 0px 8px'}} onClick={e => setCurSubject(e.target.innerHTML.split('-')[0])}>{show.code} - {show.name}</p>
                                <hr />
                            </div>
                        )) : null
                    }
                </div>
            </div>
            <button style={{float: 'right', border: '1px solid #2D69D9', color: '#2D69D9', marginTop: '20px'}}  className="btn btn-default" onClick={()=>props.history.push(`/validate/${curStudent}/${curSubject}`)}>SUBMIT</button>
        </div>
    )
}

export default UserDetails;