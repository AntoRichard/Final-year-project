import React, {useState} from 'react'
import axios from 'axios';
import { Loader } from './Loader';

const Table = () => {

    const [progress, setProgress] = useState(false);

    const onImageUploadHandler = async event => {
        console.log(event.target.files[0].name);
        setProgress(true);
        const response  = await axios.post('/validate', {
            fileName: event.target.files[0].name
        });
        console.log(response.data);
        setProgress(false);
    }

    return (
        <div style={{border: '1px solid #ccc', width: '100%', borderRadius: '20px', display: 'flex'}}>
            <h2 style={{padding: '5px 50px', width: '60%'}}>1</h2>
            {
                progress ? (
                    <React.Fragment>
                        <Loader /><span style={{marginTop: '16px'}}> PROCESSING . . . </span>
                    </React.Fragment>
                ) : null
            }
            
            <input type="file" style={{float: 'right', margin: 'auto'}} className="btn btn-default" onChange={onImageUploadHandler}/>
        </div>
    )
}

export default Table;