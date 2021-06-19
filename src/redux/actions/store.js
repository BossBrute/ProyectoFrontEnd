import {createStore, combineReducers} from "redux";
import authReducer from "./authreducers/authReducer.js";

const appReducer = combineReducers({
    authReducer: authReducer,
});

export default createStore(appReducer);