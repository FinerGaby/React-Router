import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {};

const middleware = [thunk];

const mw= window.__REDUX_DEVTOOLS_EXTENSION__ ? 
	compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__())
	: applyMiddleware(...middleware);

export const store = createStore(reducers, initialState, mw);

