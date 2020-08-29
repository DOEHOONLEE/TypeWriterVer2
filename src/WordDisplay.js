import React from 'react';
import UserInput from './UserInput';

function WordDisplay({ word, userInput }) {
    
    return (
        <div>
                {!word.includes(userInput) ? <h1 style={{color: "hotpink"}}>{word}</h1> : <h1>{word}</h1>}
        </div>
    );
};

export default WordDisplay;