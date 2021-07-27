import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { applicationState, StoreType } from './reducers';
import { root } from './sagas';

export const newStore = (): StoreType => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(applicationState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(root);

  return store;
};
