import { createStore } from 'redux';
import reducer from './reducers/gameState.js'

export default createStore(reducer);