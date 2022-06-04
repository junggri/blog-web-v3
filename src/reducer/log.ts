import {PaginatedPost} from "~/core/schema";
import createAsyncAction from "~/core/createAsyncAction";
import {log} from "util";
import {fetcher} from "~/lib/fetcher";
import {GET_LOG_POST, GET_PAGINATED_POST} from "~/core/query";
import {handleActions} from "redux-actions";
import reducerMap from "~/core/reducerMap";
import produce from "immer";

const logType = "@data/log"

export interface LogInterface {
  data: null | PaginatedPost
  loading: boolean,
  error: boolean
}

export const LogAction = {
  GET_PAGINATED_LOG: createAsyncAction(logType, (first, after, filter, type = "log") => {
    return fetcher.fetch().query(GET_LOG_POST, {
      data: {
        first: first,
        after: after,
        filter: filter,
        type: type
      }
    })
  })
}

const initialValue: LogInterface = {
  data: null,
  loading: true,
  error: false
}

const reducer = handleActions<LogInterface, { data: { getPaginationPost: PaginatedPost } }>({
  ...reducerMap(logType, {
    onRequest: (state, action) => {
      return produce(state, draft => {
        draft.data = state.data
        draft.loading = true
        draft.error = false
      })
    },
    onSuccess: (state, action) => {
      return produce(state, draft => {
        draft.data = action.payload.data.getPaginationPost

        let newData = []

        if (state.data) {
          newData = [...state.data.edges, ...action.payload.data.getPaginationPost.edges]
        } else {
          newData = action.payload.data.getPaginationPost.edges
        }
        draft.data.edges = newData

        draft.loading = false;
        draft.error = false
      })
    },
    onFailure: (state, action) => {
      return produce(state, draft => {
      })
    }
  }),
}, initialValue);

export default reducer
