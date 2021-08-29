import React from 'react';
import faker, { random } from 'faker';

const userInputStyle = {
    border: '2px solid grey',
    borderBottom: '3px solid black',
    borderRadius: '9px',
    height: '32px',
    width: '200px',
    fontSize: '21px',
    autoCapitalize: 'none'
};

function UserInput({ inputFocus, props }) {
    
    const { getRandomWord, userInput, updateUserInput, updateWord, updateCorrectWords, updateMistakenWords } = props;

    const updateInput = (e) => {
        updateUserInput(e.target.value);
    }

    const onKeyPress = (e) => {
        if (e.charCode === 13) {
            if (getRandomWord === userInput) {
                updateCorrectWords();
            } else {
                updateMistakenWords();
            }
            const newRandom = faker.random.word().toLowerCase().split(" ")[0];
            
            updateUserInput("");
            updateWord(newRandom);
        }
    }

    return(
        <input
            style={userInputStyle}
            placeholder='click START to play'
            onChange={updateInput}
            onKeyPress={onKeyPress}
            value={userInput}
            ref={inputFocus}
        />
    );
};

export default UserInput;