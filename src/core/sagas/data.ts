import { auth } from '../firebase/firebase';
import { fetchImagesFailed, fetchImagesSuccess } from './../actions/data';
import { getData } from '../services/data';
import { put, call, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { ImagesActionTypes } from './../actions/data';
import { Action } from '../interfaces/action';
import { saveData } from '../services/save';
import { notifySuccess, notifyFailed } from '../toasts/toasts';
import { closeModal } from './../actions/modal';

function* fetchImagesWorker() {
  try {
    const data: SagaReturnType<typeof getData> = yield call(
      getData,
      auth.currentUser
    );
    yield put(fetchImagesSuccess(data));
  } catch (error) {
    yield put(fetchImagesFailed(error.message));
  }
}

function* saveImageWorker(action: Action<ImagesActionTypes>) {
  try {
    yield call(
      saveData,
      action.payload.imageName,
      action.payload.blob,
      action.payload.currentUser
    );
    yield put(closeModal());
    yield notifySuccess('Your image was successfully saved!!!');
  } catch (error) {
    yield notifyFailed(
      'Unfortunately, your image was not saved. Try again, please!'
    );
  }
}

export function* imagesWatcher(): Generator {
  yield takeLatest(ImagesActionTypes.FETCH_IMAGES, fetchImagesWorker);
  yield takeLatest(ImagesActionTypes.SAVE_IMAGE, saveImageWorker);
}
