import React from 'react'
import Option from './Option';
import { OptionsArr } from '../Data';

const Options = () => {
    let sno = 1;
    return (
        <div style={{marginLeft: '20px', marginTop: '40px'}}>
            <hr />
            { 
                OptionsArr.map(option => <Option key={sno++}   option={option}/>)
            }
        </div>
    )
}


export default Options;