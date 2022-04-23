import {combineReducers} from "redux";
import hit from "./hit";
import post from "./post"

const rootReducer = combineReducers({
  post,
  hit
})


export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
