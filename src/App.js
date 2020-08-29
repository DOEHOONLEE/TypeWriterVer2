import React, { useState, useEffect, useRef } from 'react';
import WordDisplay from './WordDisplay';
import UserInput from './UserInput';
import Timer from './Timer';
import StartGame from './StartGame';
import faker, { random } from 'faker';
import Switch2 from './switch2.ogg';
import './App.css';

function App() {

  const [userInput, setUserInput] = useState('');

  const [counter, setCounter] = useState(0);
  
  const getWord = faker.random.word().toLowerCase().split(" ")[0];

  const [randomWord, setRandomWord] = useState(getWord);

  const [secLeft, setSecLeft] = useState(60);

  const inputFocus = useRef();

  const onChange = (e) => {
      setUserInput(e.target.value);
      const typingSound = new Audio (Switch2);
      typingSound.play();
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
  };
  
  const emptyUserInput = () => {
      setRandomWord(getWord);
      setUserInput('');
  };

  const counterReset = () => {
    setCounter(0);
  };

  const onStart = () => {
    emptyUserInput();
    counterReset();
    inputFocus.current.focus();
  };
  
  return (
    <div className="gameBoard">
      <UserInput
        onChange={onChange}
        userInput={userInput}
        counter={counter}
        getWord={getWord}
        randomWord={randomWord}
        handleKeyPress={handleKeyPress}
        inputFocus={inputFocus}
      />
      <StartGame
        onStart={onStart}
        setSecLeft={setSecLeft}
        empty={emptyUserInput}
      />
    </div>
  );
};

export default App;
