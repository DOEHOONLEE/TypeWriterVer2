import React, { useState } from 'react';

function UserInput({ onChange }) {

    return(
        <div>
            <input
                type="text"
                onChange={onChange}
            />
        </div>
    );
};

export default UserInput;