// import { createStore, applyMiddleware, compose} from "redux";
// import taskReducer from "./reducer";
// import thunkMiddleware from "redux-thunk";

// const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     taskReducer,
//     composeEnhacer(applyMiddleware(thunkMiddleware))
// );

// export default store;  

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import taskReducer from './reducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;