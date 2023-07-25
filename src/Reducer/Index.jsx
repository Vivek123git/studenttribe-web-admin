import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { EventReducer } from "./EventReducer";

const rootReducer = combineReducers({
    auth:AuthReducer,
    event:EventReducer
});

export default rootReducer;