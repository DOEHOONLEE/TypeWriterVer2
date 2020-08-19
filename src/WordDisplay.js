import React from 'react';
import UserInput from './UserInput';

function WordDisplay({ word }) {
    
    return (
        <div>
            <h1>
                {word}
            </h1>
        </div>
    );
};

export default WordDisplay;