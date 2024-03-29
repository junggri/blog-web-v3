import {Maybe, PageEdge, PageInfo, PaginatedPost, PaginationInput, Scalars} from "~/core/schema";
import createAsyncAction from "~/core/createAsyncAction";
import {fetcher} from "~/lib/fetcher";
import {GET_PAGINATED_POST} from "~/core/query";
import {handleActions} from "redux-actions";
import reducerMap from "~/core/reducerMap";
import produce from "immer";
import {act} from "react-dom/test-utils";

const postType = "@data/post"

export interface PostInitialState {
  data: null | PaginatedPost
  loading: boolean,
  error: boolean
}

export const PostAction = {
  GET_PAGINATED_POST: createAsyncAction(postType, (first, after, filter, type = "post") => {
    return fetcher.fetch().query(GET_PAGINATED_POST, {
      data: {
        first: first,
        after: after,
        filter: filter,
        type: type
      }
    })
  }),
}

const initialValue: PostInitialState = {
  data: null,
  loading: true,
  error: false
}

const reducer = handleActions<PostInitialState, { data: { getPaginationPost: PaginatedPost } }>({
  ...reducerMap(postType, {
    onRequest: (state, action) => {
      return produce(state, draft => {
        draft.data = state.data
        draft.error = false
        draft.loading = true
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
        draft.error = false
        draft.loading = false
      })
    },
    onFailure: (state, action) => {
      return produce(state, draft => {
        draft.data = state.data
        draft.error = true
        draft.loading = false
      })
    }
  })
}, initialValue)

export default reducer
