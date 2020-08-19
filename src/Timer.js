import React, { useState } from 'react';

function Timer({ timeleft }) {

    return (
        <div>
            
            {timeleft > 0 ? <h1>Time Remaining : {timeleft}</h1> : <h1>Game Finished</h1>}
            
        </div>
    );
}

export default Timer;