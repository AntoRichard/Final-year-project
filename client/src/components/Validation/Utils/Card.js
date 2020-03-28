import React, { useState } from 'react';
import Table from './Table';

const Card = ({ title, questions, id }) => {
  const [hide, setHide] = useState(false);
  return (
    <div
      style={{
        border: '2px solid #eee',
        width: '100%',
        borderRadius: '10px',
        marginTop: '50px'
      }}
    >
      <div style={{ padding: '50px' }}>
        <h3 style={{ float: 'left', display: 'inline' }}>{title}</h3>
        {hide ? (
          <i
            class="fa fa-caret-down"
            style={{ float: 'right', fontSize: '24px', display: 'inline' }}
            onClick={() => setHide(!hide)}
          ></i>
        ) : (
            <i
              class="fa fa-caret-up"
              style={{ float: 'right', fontSize: '24px', display: 'inline' }}
              onClick={() => setHide(!hide)}
            ></i>
          )}
      </div>
      <div>
        {hide ? null : (
          <React.Fragment>
            {questions.map((ques, index) => (
              <Table ques={ques} id={id} index={index} />
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Card;
