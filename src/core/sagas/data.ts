import { auth } from '../firebase/firebase';
import { fetchImagesFailed, fetchImagesSuccess } from './../actions/data';
import { getData } from '../services/data';
import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { ImagesActionTypes } from '../constants/actionTypes';

function* fetchImagesWorker() {
  try {
    const data: SagaReturnType<typeof getData> = yield call(
      getData,
      auth.currentUser
    );
    yield put(fetchImagesSuccess(data));
  } catch (e) {
    yield put(fetchImagesFailed(e.message));
  }
}

export function* imagesWatcher(): Generator {
  yield takeEvery(ImagesActionTypes.FETCH_IMAGES, fetchImagesWorker);
}
