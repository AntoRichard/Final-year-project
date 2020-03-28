import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../../context/GlobalContext';
import { Loader } from './Loader';

let SNO = 0;

const Table = ({ ques, id, index }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [progress, setProgress] = useState(false);

  const onImageUploadHandler = async event => {
    setProgress(true);
    const response = await axios.post('/validate', {
      fileName: event.target.files[0].name,
      SNO,
      ques,
      id
    });
    dispatch({ type: 'SET_MARK', payload: response.data.totalMarks });
    setProgress(false);
  };

  console.log(ques);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        width: '100%',
        borderRadius: '20px',
        display: 'flex'
      }}
    >
      <h2 style={{ padding: '5px 50px', width: '60%' }}>{`${index + 1}) ${
        ques.question
        }`}</h2>
      {progress ? (
        <React.Fragment>
          <Loader />
          <span style={{ marginTop: '16px' }}> PROCESSING . . . </span>
        </React.Fragment>
      ) : null}

      <input
        type="file"
        style={{ float: 'right', margin: 'auto' }}
        className="btn btn-default"
        onChange={onImageUploadHandler}
      />
    </div>
  );
};

export default Table;
