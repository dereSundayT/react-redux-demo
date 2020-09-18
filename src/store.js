import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
//store takes in 3 paramaters rootReducer,initialState,Middleware
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
