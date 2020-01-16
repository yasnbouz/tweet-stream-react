import { combineReducers } from 'redux';
import { FETCH_TWEETS } from './Types';

const tweets = (tweets = [], action) => {
  if (action.type === FETCH_TWEETS) return action.payload.tweets;
  return tweets;
};

export default combineReducers({
  tweets,
});
