import React, { useState, useRef } from 'react';
import UserInput from './UserInput';
import StartGame from './StartGame';
import History from './History';
import faker, { random } from 'faker';
import Switch2 from './switch2.ogg';
import './App.css';

function App() {

  const [userInput, setUserInput] = useState('');

  const [counter, setCounter] = useState(0);
  
  const getWord = faker.random.word().toLowerCase().split(" ")[0];

  const [randomWord, setRandomWord] = useState(getWord);

  // const [secLeft, setSecLeft] = useState(60);

  const inputFocus = useRef();

  const nextID = useRef(1);

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

  const setData = (wpm) => {
    const today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const currentDate = (
        today.getFullYear()
        + '-'
        + monthNames[today.getMonth()-1]
        + '-'
        + today.getDate()
    );

    let scoreInfo = {
      date: currentDate,
      record: wpm
    }

    localStorage.setItem(nextID.current, JSON.stringify(scoreInfo));
    
    nextID.current++;
  };
  
  const emptyUserInput = () => {
      setRandomWord(getWord);
      setUserInput('');
  };

  const counterReset = () => {
    setCounter(0);
  };

  const onStart = () => {
    inputFocus.current.focus();
    emptyUserInput();
    counterReset();
  };
  
  const onReset = () => {
    emptyUserInput();
    counterReset();
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
        onReset={onReset}
        empty={emptyUserInput}
        setData={setData}
        counter={counter}
      />
      <History
        counter={counter}
        nextID={nextID}
      />
    </div>
  );
};

export default App;