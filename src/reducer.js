import { combineReducers } from 'redux';
import { RECEIVE_TWEETS } from './Types';

const tweets = (tweets = [], action) => {
  if (action.type === RECEIVE_TWEETS) return action.payload.tweets;
  return tweets;
};

export default combineReducers({
  tweets,
});
