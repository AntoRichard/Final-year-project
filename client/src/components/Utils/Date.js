import React from 'react'

const Date = ({label, updateDate}) => {
  return (
      <div className="form-group" style={{width: '200px', display: 'inline', marginRight: '50px'}}>
        <label >{label}</label>
        <input type="date" name="bday" max="3000-12-31" 
                min="1000-01-01" className="form-control" onChange={updateDate}/>
      </div>
  )
}

export default Date;