import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from './index';
import { fbConfig } from '../firebase/firebase';
import firebase from 'firebase';

const sagaMiddleware = createSagaMiddleware();

/****************************************
  Configuration for a browser extension
****************************************/
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose();
/* eslint-enable */

// const configureStore = (preloadedState: Object) => createStore( rootReducer, preloadedState, composeEnhancers(),);
const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const store = configureStore();

export const rrfProps = {
  firebase,
  config: fbConfig,
  attachAuthIsReady: true,
  dispatch: store.dispatch,
};

sagaMiddleware.run(rootSaga);

export default store;
