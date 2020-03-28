import React from 'react';
import Card from '../Utils/Card';

const Evaluate = ({ subject, questions, id }) => {
  return (
    <div style={{ margin: `8%` }}>
      <div style={{ textAlign: 'center' }}>
        <h2>UPLOAD ANSWERS</h2>
      </div>
      <h4>
        SUBJECT CODE : <span style={{ color: 'grey' }}> {subject.code}</span>
      </h4>
      <h4>
        SUBJECT NAME : <span style={{ color: 'grey' }}> {subject.name}</span>
      </h4>
      <div>
        <Card
          title="2 MARKS"
          questions={questions.filter(ques => ques.marks === 2)}
          id={id}
        />
        <Card
          title="15 MARKS"
          questions={questions.filter(ques => ques.marks === 15)}
          id={id}
        />
      </div>
    </div>
  );
};

export default Evaluate;
