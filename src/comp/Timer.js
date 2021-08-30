import React, { useState, useEffect } from 'react';
import { updateCorrectWords } from '../reducers/gameState';

const TimerStyle = {
    display: 'inline-block',
    position: 'absolute',
    top: '10px',
    right: '10px'
}

function Timer({ isReady, userInput, updateReady, correct, mistakes, updateGame }) {
    const [timer, setTimer] = useState(3);

    useEffect(() => {
        const countDown = setInterval(() => {
            if (timer > 0 && !isReady) {
                console.log(timer)
                setTimer(prev => prev - 1);
            }
            else {
                setTimer(10)
                clearInterval(countDown);
                const gameReset = {
                    correctWords: 0,
                    mistakes: 0,
                    userInput: "",
                    timeRemaining: 60,
                    isReady: true,
                }

                const gameRecord = `correct: ${correct} || mistakes: ${mistakes}`

                updateGame(gameReset, gameRecord)
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