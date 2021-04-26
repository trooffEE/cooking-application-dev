import {createStore, applyMiddleware} from 'redux';
import combinedReducers from './reducers/index.js';
import thunk from 'redux-thunk';

const store = createStore(combinedReducers, applyMiddleware(thunk));

window.store = store;

export default store;