import React from 'react';
import WordGenerator from './WordGenerator';
import UserInput from './UserInput';
import faker from 'faker';
import './App.css';

function App() {
  const WordContainer = [];

  for (let i=0; i < 10; i++) {
      WordContainer.push(
          faker.random.word().toLowerCase().split(" ")[0]
      );
  };

  console.log(WordContainer);

  const onChange = (e) => {
    console.log(e.target.value);
    const { UserInputValue } = e.target.value;
  }

  return (
    <div className="gameBoard">
      <WordGenerator
        WordList={WordContainer[0]}
        userInput={UserInputValue}
      />
      <UserInput
        onChange={onChange}
      />
    </div>
  );
};

export default App;
