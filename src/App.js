import React, { useState, useEffect } from 'react';
import WordDisplay from './WordDisplay';
import UserInput from './UserInput';
import Timer from './Timer';
import StartGame from './StartGame';
import faker, { random } from 'faker';
import './App.css';

function App() {

  const [userInput, setUserInput] = useState('');

  const [counter, setCounter] = useState(0);
  
  const getWord = faker.random.word().toLowerCase().split(" ")[0];

  const [randomWord, setRandomWord] = useState(getWord);

  const [secLeft, setSecLeft] = useState(60);

  const onChange = (e) => {
      setUserInput(e.target.value);
    }
    
  React.useEffect(() => {
    if (secLeft > 0) {
      setTimeout(() => setSecLeft(secLeft - 1), 1000);
    }
  });
  
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

  return (
    <div className="gameBoard">
      <UserInput
        onChange={onChange}
        userInput={userInput}
        counter={counter}
        getWord={getWord}
        randomWord={randomWord}
        handleKeyPress={handleKeyPress}
      />
      <StartGame />
      <Timer
        secLeft={secLeft}
      />
    </div>
  );
};

export default App;
