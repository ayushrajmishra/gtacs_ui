import { applyMiddleware, createStore } from "redux";
import rootReducer from "../services/reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

// import rootsaga from '../services/userSaga'
import rootsaga from '../services/saga'
const sagaMiddleware = createSagaMiddleware()
const middlewares=[sagaMiddleware]
middlewares.push(logger)
const store = createStore(rootReducer,applyMiddleware(...middlewares))
sagaMiddleware.run(rootsaga)
export default store;