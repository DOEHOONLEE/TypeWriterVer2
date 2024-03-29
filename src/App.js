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

const randomWord = faker.random.word().toLowerCase().split(" ")[0];

function App(props) {

  const inputFocus = useRef();

  return (
    <div className="gameBoard">
      <WordDisplay
        randomWord={props.randomWord}
        userInput={props.userInput} />
      <UserInput
        inputFocus={inputFocus}
        props={props} />
      <Record
        correct={props.correctWords}
        mistakes={props.mistakes} />
      <Timer
        isReady={props.isReady}
        userInput={props.userInput}
        updateReady={props.updateReady} />
      <StartGame
        inputFocus={inputFocus}
        isReady={props.isReady}
        updateReady={props.updateReady} />
      {/* <History /> */}
    </div>
  );
};

const mapStateToProps = (state) => state;
const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;