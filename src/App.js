import React, { useState, useRef } from 'react';
import UserInput from './UserInput';
import StartGame from './StartGame';
import History from './History';
import faker, { random } from 'faker';
import Switch2 from './switch2.ogg';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [userInput, setUserInput] = useState('');

  const [counter, setCounter] = useState(0);
  
  const getWord = faker.random.word().toLowerCase().split(" ")[0];

  const [randomWord, setRandomWord] = useState(getWord);

  const [histories, setHistories] = useLocalStorage("records", []);

  const { date, record } = histories;

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

  const setData = (wpm) => {
    const today = new Date();

    const date = `${today.getFullYear()}.${today.toLocaleString('default', { month: 'short' })}.${today.getDate()}-${today.getHours()}:${today.getMinutes()}`;
    const record = wpm;
    const nextId = histories.length > 0 ? Math.max(...histories.map(c => c.id)) + 1 : 0;

    const newRecord = {
      id: nextId,
      date: date,
      record: wpm,
    };

    setHistories([...histories, newRecord]);
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
        histories={histories}
      />
    </div>
  );
};

export default App;