import React from 'react';
import Search from './Search';
import ViewAllSubject from './ShowAllSubject';

const View = props => {
  return (
    <div className="dashboard-container">
      <Search {...props} />
      <ViewAllSubject {...props} />
    </div>
  );
};

export default View;
