import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import rootSaga from './saga';

const saga = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const middlware = [saga];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlware)),
);

saga.run(rootSaga);
export default store;
