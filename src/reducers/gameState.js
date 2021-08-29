import faker, { random } from 'faker';

const randomWord = faker.random.word().toLowerCase().split(" ")[0];

const initState = {
    getRandomWord: randomWord,
    correctWords: 0,
    mistakes: 0,
    userInput: "",
    timeRemaining: 60,
    isReady: true,
    histories: []
}

const UPDATE_READY = 'UPDATE_READY';
const UPDATE_CLOCK = 'UPDATE_CLOCK';
const UPDATE_CORRECT_WORDS = 'UPDATE_CORRECT_WORDS';
const UPDATE_MISTAKEN_WORDS = 'UPDATE_MISTAKEN_WORDS';
const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';
const UPDATE_WORD = 'UPDATE_WORD';

export const updateReady = (val) => {
    return ({ type: UPDATE_READY, payload: val })
}

export const updateClock = (val) => {
    return ({ type: UPDATE_READY, payload: val })
}

export const updateCorrectWords = (val) => {
    console.log("???", val)
    return ({ type: UPDATE_CORRECT_WORDS, payload: val });
}

export const updateMistakenWords = (val) => {
    return ({ type: UPDATE_MISTAKEN_WORDS, payload: val });
}

export const updateUserInput = (val) => {
    return ({ type: UPDATE_USER_INPUT, payload: val });
}

export const updateWord = (val) => {
    return ({ type: UPDATE_WORD, payload: val });
}

export default (state = initState, action) => {
    switch(action.type) {
        case UPDATE_USER_INPUT:
            return {...state, userInput: action.payload};
        case UPDATE_WORD:
            return {...state, getRandomWord: action.payload}
        case UPDATE_CORRECT_WORDS:
            return {...state, correctWords: (action.payload === "reset") ? 0 : state.correctWords+=1};
        case UPDATE_MISTAKEN_WORDS:
            return {...state, mistakes: (action.payload === "reset") ? 0 : state.mistakes+=1}
        case UPDATE_READY:
            return {...state, isReady: action.payload}
        case UPDATE_CLOCK:
            return {...state, updateClock: action.payload}
        default:
            return state;
    }
}