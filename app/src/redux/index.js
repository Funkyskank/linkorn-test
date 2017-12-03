import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import clientReducer from './modules/client';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const rootReducer = combineReducers({
  clients: clientReducer,
});

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);
export default configureStore;
