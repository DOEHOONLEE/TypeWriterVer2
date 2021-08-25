import React, { useEffect, useRef, useState } from 'react';

const startGameStyle = {
    backgroundColor: 'skyblue',
    border: '1px solid grey',
    borderBottom: '2px solid',
    borderRadius: '8px',
    width: '120px',
    height: '30px',
}

function StartGame({ inputFocus, isReady, updateReady }) {
    // const [start, setStart] = useState(true);
    // const [timer, setTimer] = useState(10);
    // let clock;

    const onClick = () => {
        isReady ? updateReady(false) : updateReady(true);
        inputFocus.current.focus();
    }

    return (
        <div>
            <button onClick={onClick} style={startGameStyle}>{isReady ? "START" : "GIVE UP"}</button>
        </div>
    )
}

export default StartGame;
