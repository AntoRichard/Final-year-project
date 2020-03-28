import React, { useState, useEffect } from 'react'

export const Card = ({ subject, question, index }) => {
    const [show, setShow] = useState(false);
    const [sorted, setSorted] = useState(question.filter(que => ` ${subject.name}` === `${que.name}`))

    useEffect(() => {
        setSorted(question.filter(que => ` ${subject.name}` === `${que.name}`))
    }, [question, subject]);

    return (
        <div style={{ width: '100%', height: 'inherit', boxShadow: '5px 7px #eee', border: '2px solid #eee', padding: '8px 15px', borderRadius: '20px', display: 'flex' }}>
            <div>
                <h3>{subject.name}</h3>
                <p>{subject.code}</p>
                {
                    show ? (
                        <div>
                            {
                                sorted.map((obj, index) => <p>{index + 1}) {obj.question}</p>)
                            }
                        </div>
                    ) : null
                }
            </div>
            <div style={{ paddingLeft: 860, paddingTop: 20 }}>
                <i class="fa fa-caret-down" aria-hidden="true" syle={{ fontSize: 24 }} onClick={() => setShow(!show)}></i>

            </div>
        </div>
    )
}
