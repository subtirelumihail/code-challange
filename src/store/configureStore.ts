import { createBrowserHistory } from 'history';
import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux-dynamic-modules';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

// rehydrate state on app start
const initialState = {};

// create the root reducer map
export const rootReducerMap = {
  router: connectRouter(history),
};

// create the startup module
const startupModule = (): any => ({
  id: 'root',
  reducerMap: rootReducerMap as any,
});

// create the enhancers
const enhancers = compose(applyMiddleware(routerMiddleware(history)));

// create the store
const store = createStore(initialState, [enhancers], [], startupModule());

export default store;
