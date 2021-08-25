import faker, { random } from 'faker';

const randomWord = faker.random.word().toLowerCase().split(" ")[0];

const initState = {
    randomWord: randomWord,
    correctWords: 0,
    mistakes: 0,
    userInput: "",
    timeRemaining: 60,
    isReady: true,
    histories: []
}

const UPDATE_READY = 'UPDATE_READY';
const UPDATE_CORRECT_WORDS = 'UPDATE_CORRECT_WORDS';
const UPDATE_MISTAKEN_WORDS = 'UPDATE_MISTAKEN_WORDS';
const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';
const UPDATE_WORD = 'UPDATE_WORD';

export const updateReady = (val) => {
    return ({ type: UPDATE_READY, payload: val })
}

export const updateCorrectWords = () => {
    return ({ type: UPDATE_CORRECT_WORDS });
}

export const updateMistakenWords = () => {
    return ({ type: UPDATE_MISTAKEN_WORDS });
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
            return {...state, randomWord: action.payload}
        case UPDATE_CORRECT_WORDS:
            return {...state, correctWords: state.correctWords+=1};
        case UPDATE_MISTAKEN_WORDS:
            return {...state, mistakes: state.mistakes+=1}
        case UPDATE_READY:
            return {...state, isReady: action.payload}
        default:
            return state;
    }
}