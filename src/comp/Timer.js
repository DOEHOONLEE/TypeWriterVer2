import React, { useState, useEffect } from 'react';
import { updateCorrectWords } from '../reducers/gameState';

const TimerStyle = {
    display: 'inline-block',
    position: 'absolute',
    top: '10px',
    right: '10px'
}

function Timer({ isReady, userInput, UpdateCorrectWords, updateMistakenWords, updateReady }) {
    const [timer, setTimer] = useState(3);
    
    const tick = () => {
        if (!isReady) {
            setTimer(prev => prev-=1);
        }
        else {
            updateReady(true);
        }
    }

    useEffect(() => {
        const countDown = setInterval(() => {
            if (timer > 0 && !isReady) {
                console.log(timer)
                setTimer(prev => prev - 1);
            }
            else {
                setTimer(10)
                clearInterval(countDown);
                updateReady(true);
                updateCorrectWords("reset");
                updateMistakenWords("reset");
            }
        }, 1000);
        return () =>  clearInterval(countDown);
    }, [isReady, timer])

    return (
        <div style={TimerStyle}>
            {timer} sec left
        </div>
    );
}

export default Timer;