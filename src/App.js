import React, { useState, useEffect } from 'react';
import WordDisplay from './WordDisplay';
import UserInput from './UserInput';
import Timer from './Timer';
import './App.css';

function App() {

  const [secLeft, setSecLeft] = useState(60);

  React.useEffect(() => {
    if (secLeft > 0) {
      setTimeout(() => setSecLeft(secLeft - 1), 1000);
    }
  });

  return (
    <div className="gameBoard">
      <UserInput />
      <Timer timeleft={secLeft} />
    </div>
  );
};

export default App;
