import React from 'react';

const UserHome = () => {
    return (
        <div>
            <h2>Hi welcome</h2>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default UserHome;