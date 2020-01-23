import React from 'react'
import UserLogo from '../../Images/user.png';

export const User = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={UserLogo} alt="" height="80" width="80" />
            <h2>Admin</h2>
        </div>
    )
}
