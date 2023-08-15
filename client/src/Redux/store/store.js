import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../reducer/reducer';

const composed=composeWithDevTools(applyMiddleware(thunk));
const store=createStore(rootReducer,composed);

export default store;