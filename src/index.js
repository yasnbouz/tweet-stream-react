import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import FetchTweets from './FetchTweets';
import Tweets from './Tweets';

import './styles.scss';

const Application = () => {
  return (
    <div className="Application">
      <h1>Tweet Stream</h1>
      <FetchTweets />
      <Tweets />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement,
);
