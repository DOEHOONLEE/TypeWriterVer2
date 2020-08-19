import React, { useState } from 'react';
import WordsPerMin from './WordsPerMin';
import WordDisplay from './WordDisplay';
import faker, { random } from 'faker';

function UserInput() {

    const [userInput, setUserInput] = useState('');

    const [counter, setCounter] = useState(0);
    
    const getWord = faker.random.word().toLowerCase().split(" ")[0];

    const [randomWord, setRandomWord] = useState(getWord);

    const onChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            if (userInput === randomWord) {
                setCounter(counter + 1);
                emptyUserInput();
            }
            else {
                emptyUserInput();
            }
        }
    }
    
    const emptyUserInput = () => {
        setRandomWord(getWord);
        setUserInput('');
    }

    return(
        <div>
            <WordDisplay
                word={randomWord}
                userInput={userInput}
            />
            <input
                type="text"
                onChange={onChange}
                value={userInput}
                onKeyPress={handleKeyPress}
            />
            <WordsPerMin
                count={counter}
            />
        </div>
    );
};

export default UserInput;