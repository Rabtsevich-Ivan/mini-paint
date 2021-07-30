import { auth } from '../firebase/firebase';
import { fetchImages, fetchImagesSuccess } from './../actions/data';
import { getData } from '../services/data';
import { put, call, takeEvery } from '@redux-saga/core/effects';
import { FETCH_IMAGES } from '../constants/constants';
import { projectFirestore } from '../firebase/firebase';

//changeCompanySaga(company)
export function* fetchImagesWorker(): Generator {
  try {
    //const data = yield call(getData, auth.currentUser);
    const data:any = yield call([
      projectFirestore
        .collection('images')
        .orderBy('createdAt', 'desc')
        .where('user', '==', auth.currentUser.email),
      projectFirestore.collection('images').get,
    ]);
    console.log(data);

    let daf: any = [];
    data.forEach((el: any) => {
        daf.push(el.data());
    });
    console.log(daf)

    if (!daf) {
      yield put(fetchImagesSuccess(['something is wrong']));
    } else {
      yield put(fetchImagesSuccess(daf));
    }
  } catch (e) {
    yield alert('error at fetching images');
  }
}

export function* imagesWatcher() {
  //keep track of dispatch(action) and runs worker
  yield takeEvery(FETCH_IMAGES, fetchImagesWorker);
}
