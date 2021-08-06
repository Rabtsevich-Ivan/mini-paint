import { auth } from '../firebase/firebase';
import { fetchImagesFailed, fetchImagesSuccess } from './../actions/data';
import { getData } from '../services/data';
import { put, call, takeEvery } from '@redux-saga/core/effects';
import { ImagesActionTypes } from '../constants/actionTypes';
import { ImageInterface } from '../interfaces/image';
import { Observable } from 'redux';

export function* fetchImagesWorker(): Generator {
  try {
    //const data: ImageInterface[] = yield call(getData, auth.currentUser);
    const data = yield call(getData, auth.currentUser);
    console.log(data)
    yield put(fetchImagesSuccess(data));
  } catch (e) {
    yield put(fetchImagesFailed(e.message));
  }
}

export function* imagesWatcher(): Generator {
  //keep track of dispatch(action) and runs worker
  yield takeEvery(ImagesActionTypes.FETCH_IMAGES, fetchImagesWorker);
}
