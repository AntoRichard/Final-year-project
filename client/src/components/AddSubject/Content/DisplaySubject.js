import React from 'react'

const DisplaySubject = ({subject, deleteHandler}) => {
    let sno = 1, nos=10134;
    return (
        <div style={{marginTop: '30px', padding: '18px 350px'}}>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">SUBJECT CODE</th>
                    <th scope="col">SUBJECT NAME</th>
                    <th scope="col">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subject.map(sub => (
                            <tr key={nos++}>
                                <th scope="row">{sno++}</th>
                                <td>{sub.code}</td>
                                <td>{sub.name}</td>
                                <td onClick={event => deleteHandler(event)}><i className="fas fa-trash" style={{color: '#C0182A', fontSize: '20px'}}></i></td>
                            </tr>
                        ))
                    }
                    
                </tbody>
                </table>
        </div>
    )
}


export default DisplaySubject;