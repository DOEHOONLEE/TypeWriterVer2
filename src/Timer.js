import React, { useState, useEffect } from 'react';

function Timer({secLeft}) {

    return (
        <div>
            
            {secLeft > 0 ? <h1>Time Remaining : {secLeft}</h1> : <h1>Game Finished</h1>}
            
        </div>
    );
}

export default Timer;