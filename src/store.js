import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(reducer,
	composeEnhancers(
		applyMiddleware(
			sagaMiddleware
		),
	));

export default store;