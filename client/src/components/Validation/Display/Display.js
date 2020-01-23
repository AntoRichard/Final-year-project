import React from 'react'

const Display = ({student}) => {
    return (
        <div style={{}}>
            <h1 style={{textAlign: 'center'}}><b>PAPER EVALUATION</b></h1>
            <div style={{margin: '50px 100px'}}>
                <h3 style={{marginBottom: '30px'}}>NAME: <span style={{color: '#87878B'}}>{student.name}</span></h3>
                <h3 style={{marginBottom: '30px'}}>ROLL NUMBER: <span style={{color: '#87878B'}}>{student.id}</span></h3>
                <h3 style={{marginBottom: '30px'}}>COLLEGE: <span style={{color: '#87878B'}}>{student.college}</span></h3>
                <h3 style={{marginBottom: '30px'}}>UNIVERSITY: <span style={{color: '#87878B'}}>{student.university}</span></h3>
            </div>
        </div>
    )
}

export default Display;