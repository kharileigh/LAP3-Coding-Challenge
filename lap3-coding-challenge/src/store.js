import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './reducers';

const store = configureStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;