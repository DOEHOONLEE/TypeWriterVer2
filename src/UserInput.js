import React from 'react';
import WordsPerMin from './WordsPerMin';
import WordDisplay from './WordDisplay';

function UserInput({ onChange, userInput, counter, getWord, randomWord, handleKeyPress, inputFocus }) {

    return(
        <div>
            <WordDisplay
                word={randomWord}
                userInput={userInput}
            />
            <input
                className="userInput"
                type="text"
                placeholder="click START to play"
                onChange={onChange}
                value={userInput}
                onKeyPress={handleKeyPress}
                ref={inputFocus}
                autoCapitalize="none"
            />
            <WordsPerMin
                count={counter}
            />
        </div>
    );
};

export default UserInput;