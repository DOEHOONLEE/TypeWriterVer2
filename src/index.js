import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { bindActionCreators } from 'redux';
import { updateReady, updateCorrectWords, updateMistakenWords, updateUserInput, updateWord } from './reducers/gameState'
import store from './store.js';
import { Provider } from 'react-redux';

const actions = bindActionCreators({ updateReady, updateCorrectWords, updateMistakenWords, updateUserInput, updateWord }, store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
        updateReady={actions.updateReady}
        updateCorrectWords={actions.updateCorrectWords}
        updateMistakenWords={actions.updateMistakenWords}
        updateUserInput={actions.updateUserInput}
        updateWord={actions.updateWord}
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
