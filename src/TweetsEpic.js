import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { RECEIVE_TWEETS, REQUEST_TWEETS } from './Types';
const endpoint = 'http://tweet-stream.glitch.me/api/tweets';

const tweetsEpic = action$ =>
  action$.pipe(
    ofType(REQUEST_TWEETS),
    mergeMap(action =>
      ajax
        .getJSON(endpoint)
        .pipe(
          map(({ tweets }) => ({ type: RECEIVE_TWEETS, payload: { tweets } })),
        ),
    ),
  );

export default combineEpics(tweetsEpic);
