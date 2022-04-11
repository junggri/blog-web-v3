import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, createStore} from "redux";
import rootReducer from "~/reducer";
import rootSaga from "~/saga";

const sagaMiddleWare = createSagaMiddleware()

export default function configure() {
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(sagaMiddleWare)
  )

  sagaMiddleWare.run(rootSaga)
  return store
}
