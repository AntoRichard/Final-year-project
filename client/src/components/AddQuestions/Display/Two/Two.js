import React, {useState} from 'react'
 
const Two = ({sub, updateTwo}) => {
    const [que, setQue] = useState([]);
    const [key, setKey] = useState('');
    const [code, name] = sub.split('-');
    const [queNo, setQueNo] = useState(1);

    const onSubmitHandler = () => {
        const keys = key.split('\n');
        console.log(keys);
        const value = {
            que,
            keys
        }
        // setQue('');
        updateTwo(value );
        setQueNo(queNo+1);
    }
    return (
        <div >
            <h1 style={{textAlign: 'center', marginBottom: '5%'}}>Add Questions</h1>
            <div>
                <h2 style={{marginBottom: '2%'}}>SUBJECT CODE : {code}</h2>
                <h2 style={{marginBottom: '2%'}}>SUBJECT NAME : {name}</h2>
                <h2 style={{marginBottom: '2%'}}>MARKS : 2</h2>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Enter question {queNo}</label>
                <textarea className="form-control" value={que} onChange={event => setQue(event.target.value)} rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Enter Key values</label>
                <textarea className="form-control" value={key} onChange={event => setKey(event.target.value)} rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={onSubmitHandler} style={{float: 'right', padding: '10px 40px'}}>Add </button>
        </div>
    )
}

export default Two;