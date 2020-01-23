import React from 'react'
import {Link} from 'react-router-dom';

const Option = props => {
    const {name, url, icon} = props.option;
    return (
        <Link to={url} style={{padding: '20px', color: '#878787', listStyle: 'none'}}>
            <h5><i className={icon} style={{color: '#000', paddingRight: '5px'}}/> {name}</h5>
            <hr />
        </Link>
    )
}

export default Option;