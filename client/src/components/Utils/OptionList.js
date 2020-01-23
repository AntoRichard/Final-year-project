import React from 'react'

export const OptionList = ({items, updateDate}) => {
    return (
        <div style={{marginBottom: '30px'}}>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1" >SELECT COLLEGE</label>
                <select className="form-control" onClick={updateDate}>
                    {
                        items.map(item => <option key={item}>{item}</option>)
                    }
                    
                </select>
            </div>
        </div>
    )
}
