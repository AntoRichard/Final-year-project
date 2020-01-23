import React from 'react'

export const Form = ({value, placeholder, name, onChangeHandler, inputValue}) => {

    return (
        <div className="form-group" style={{paddingBottom: '20px'}}>
            <label htmlFor="Subject CODE">{value}</label>
            <input className="form-control" type="text" name={name} placeholder={placeholder} value={inputValue} onChange={onChangeHandler} required />
        </div>
    )
}
