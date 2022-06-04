import {combineReducers} from "redux";
import hit from "./hit";
import post from "./post"
import youtube from "./youtube"
import log from "./log"

const rootReducer = combineReducers({
  post,
  hit,
  youtube,
  log
})


export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
