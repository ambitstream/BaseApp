import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createReactotronStoreEnhancer, createReplacementReducer } from 'reactotron-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import * as reducers from '../reducers';
import rootSaga from '../sagas';


const enhancers = [];
const middlewares = [];
let sagaMonitor = false;

middlewares.push(thunk);

/* ------------- Action Logger Middleware ------------- */
const actionLogger = ({dispatch, getState}) => (next) => (action) => {
  return next(action);
}
middlewares.push(actionLogger);

/* ------------- Reactotron Enhancer ------------- */
if (__DEV__) { // only bring in Reactotron in dev mode

  // create it
  const reactotronEnhancer = createReactotronStoreEnhancer(console.tron, {
    // console.tron - defined into config/reactotron

    // you can flag some of your actions as important by returning true here
    // isActionImportant: action =>
      // action.type === 'STARTUP',

    // you can flag to completely ignore certain types too... especially the chatty ones
    ignore: []
  });
  enhancers.push(reactotronEnhancer);
  sagaMonitor = console.tron.createSagaMonitor();
}

/* ------------- Saga Middleware ------------- */

const sagaMiddleware = createSagaMiddleware( sagaMonitor ? { sagaMonitor } : {} );
middlewares.push(sagaMiddleware);

/* ------------- Assemble Middleware ------------- */

enhancers.push(applyMiddleware(...middlewares));

// const middleware = applyMiddleware(thunk, actionLogger);
const reducer = combineReducers(reducers);
const storeData = {};


// const store = createStore(reducer, storeData, compose(...enhancers, middleware));
const store = createStore(reducer, storeData, compose(...enhancers));

// Start sagas
sagaMiddleware.run(rootSaga);

export default store;
