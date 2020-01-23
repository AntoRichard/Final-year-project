import React from 'react';
import { User } from './User';
import Options from './Options/Options';

const Dashboard = () => {

    return (
        <div style={{height: '100vh', width: '17vw', borderRight: '2px solid #ddd', paddingTop: '20px', position:'fixed'}}>
            <User />
            <Options />
        </div>
    );
}

export default Dashboard;
