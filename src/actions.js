import { FETCH_TWEETS } from './Types';
const endpoint = 'http://tweet-stream.glitch.me/api/tweets';

// action creator
export const fetchTweets = () => dispatch => {
  fetch(endpoint)
    .then(response => response.json())
    .then(({ tweets }) => {
      dispatch({ type: FETCH_TWEETS, payload: { tweets } });
    });
};
