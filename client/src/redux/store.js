import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // to handle any async actions

//---- redux middleware ----
const middlewares = [thunk];

//---- create a new store ----
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

//---- export the store ----
export default store;
