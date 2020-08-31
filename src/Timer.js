import React from 'react';

function Timer({secLeft}) {

    return (
        <div>
            <h1>
                    Time Remaining : {secLeft}
            </h1>
        </div>
    );
}

export default Timer;