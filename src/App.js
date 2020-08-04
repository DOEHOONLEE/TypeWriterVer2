import React from 'react';
import faker from 'faker';

function PrintWords({ myword }) {
  return (
    <div>
      <p>myword</p>
    </div>
  )
};

function App() {

  const thousandWords = [];

  for (let i=0; i < 200; i++) {
    thousandWords.push(faker.random.word().split(" ")[0])
  }

  console.log(thousandWords.map(c => c))

  return (
    <div>
      <p>{thousandWords[0]}</p>
      {
        thousandWords.map(
          (word, index) => (
            <p>{word}</p>
          )
        )
      }
    </div>
  );
};

export default App;
