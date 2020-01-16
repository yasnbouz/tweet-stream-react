import { call, takeLatest, all, put } from 'redux-saga/effects';
import { REQUEST_TWEETS, RECEIVE_TWEETS } from './Types';

const endpoint = 'http://tweet-stream.glitch.me/api/tweets';

export default function* rootSaga() {
  yield all([watchFetchTweets()]);
}

function* fetchTweets() {
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  const { tweets } = yield data;
  yield put({ type: RECEIVE_TWEETS, payload: { tweets } });
}
function* watchFetchTweets() {
  yield takeLatest(REQUEST_TWEETS, fetchTweets);
}
