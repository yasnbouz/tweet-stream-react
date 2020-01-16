import { createStore, applyMiddleware, compose } from 'redux';

import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducer';
import rootEpic from './TweetsEpic';

const epic = createEpicMiddleware();
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const middlware = [epic];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlware)),
);

epic.run(rootEpic);
export default store;
