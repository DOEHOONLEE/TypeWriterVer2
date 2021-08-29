import React, { useEffect } from 'react';

function WordDisplay({ isSpellCorrect, getRandomWord }) {
    
    return (
        <div>
            {isSpellCorrect ? <h1>{getRandomWord}</h1> : <h1 style={{color: "hotpink"}}>{getRandomWord}</h1>}
        </div>
    );
};

export default WordDisplay;