import {combineReducers} from "redux";
import hit from "./hit";

const rootReducer = combineReducers({
  hit
})


export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
