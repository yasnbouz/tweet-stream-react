import React from 'react';
import { connect } from 'react-redux';
import { REQUEST_TWEETS } from './Types';

const FetchTweets = ({ fetchTweets }) => {
  return <button onClick={fetchTweets}>Fetch Tweets</button>;
};
const mapDispatchToProps = dispatch => {
  return { fetchTweets: () => dispatch({ type: REQUEST_TWEETS }) };
};

export default connect(null, mapDispatchToProps)(FetchTweets);
