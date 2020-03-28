import React from 'react';

const Search = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <input type="text" style={{ width: '500px', height: 40, fontSize: 24, borderRadius: '20px 0px 0px 20px', outline: 'none', boxShadow: 'none', paddingLeft: 16 }} />
      <button style={{borderRadius: '0px 20px 20px 0px'}}>Search</button>
    </div>
  );
};

export default Search;
