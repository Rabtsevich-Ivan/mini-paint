import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from './index';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose();
/* eslint-enable */

// const configureStore = (preloadedState: Object) => createStore( rootReducer, preloadedState, composeEnhancers(),);
const configureStore = (preloadedState: Object) =>
  createStore(
    rootReducer,
    //preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)), 
  );

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;
