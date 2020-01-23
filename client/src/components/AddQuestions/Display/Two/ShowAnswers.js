import React from 'react'

const ShowAnswers = ({two}) => {
    let sno = 1;
    return (
        <div style={{marginTop: '10%'}}>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">QUESION</th>
                    <th scope="col">KEY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        two.map(value => (
                            <tr key={sno}>
                                <th scope="row">{sno++}</th>
                                <td>{value.que}</td>
                                <td>{value.keys}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
        
    )
}

export default ShowAnswers;