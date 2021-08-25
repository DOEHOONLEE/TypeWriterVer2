import React from 'react';
import faker, { random } from 'faker';

function WordDisplay({ randomWord, userInput }) {
        
    return (
        <div>
            {!randomWord.includes(userInput) ? <h1 style={{color: "hotpink"}}>{randomWord}</h1> : <h1>{randomWord}</h1>}
        </div>
    );
};

export default WordDisplay;