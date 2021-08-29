import React, { useState, useRef } from 'react';
import UserInput from './comp/UserInput';
import History from './comp/History';
import faker, { random } from 'faker';
import Switch2 from './switch2.ogg';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import WordDisplay from './comp/WordDisplay';
import Record from './comp/Record';
import Timer from './comp/Timer';
import StartGame from './comp/StartGame';
import { connect } from 'react-redux'
import { updateReady } from './reducers/gameState';

function App(props) {

  const inputFocus = useRef();

  const { getRandomWord, userInput, correctWords, mistakes, updateReady, isReady, updateCorrectWords, updateMistakenWords } = props;

  const isSpellCorrect = getRandomWord.includes(userInput) ? true : false;

  return (
    <div className="gameBoard">
      <WordDisplay
        getRandomWord={getRandomWord}
        isSpellCorrect={isSpellCorrect} />
      <UserInput
        inputFocus={inputFocus}
        props={props} />
      <Record
        correct={correctWords}
        mistakes={mistakes} />
      <Timer
        isReady={isReady}
        userInput={userInput}
        updateCorrectWords={updateCorrectWords}
        updateMistakenWords={updateMistakenWords}
        updateReady={updateReady} />
      <StartGame
        inputFocus={inputFocus}
        isReady={isReady}
        updateReady={updateReady} />
      {/* <History /> */}
    </div>
  );
};

const mapStateToProps = (state) => state;
const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;