import React from 'react';
import WordDisplay from './WordDisplay';
import UserInput from './UserInput';
import Timer from './Timer';
import './App.css';

function App() {

  return (
    <div className="gameBoard">
      <UserInput />
      <Timer />
    </div>
  );
};

export default App;
