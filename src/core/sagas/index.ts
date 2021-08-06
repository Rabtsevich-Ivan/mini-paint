import { imagesWatcher } from './data';
import { authWatcher } from './auth';
import { all, fork } from '@redux-saga/core/effects';

export default function* rootSaga(): Generator {
  yield all([fork(imagesWatcher)]);
  yield all([fork(authWatcher)]);
}
