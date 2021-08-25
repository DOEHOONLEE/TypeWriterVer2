import React, { useState, useEffect } from 'react';

const TimerStyle = {
    display: 'inline-block',
    position: 'absolute',
    top: '10px',
    right: '10px'
}

function Timer({ isReady, userInput, updateReady }) {
    const [timer, setTimer] = useState(10);
    
     const tick = () => {
        if (timer > 0) {
            setTimer(prev => prev-=1);
        }
        else {
            updateReady(true);
        }
    }

    useEffect(() => {
        if (!isReady) {
            const clock = setInterval(() => tick(), 1000);
            return () => clearInterval(clock);
        }
    })

    console.log("NOT WORKING??")
    useEffect(() => {
        setTimer(10);
    }, [isReady])

    useEffect(() => {
        
    }, [userInput])

    return (
        <div style={TimerStyle}>
            {timer} sec left
        </div>
    );
}

export default Timer;