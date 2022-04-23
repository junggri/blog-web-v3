import {PaginatedPost, PaginationInput} from "~/core/schema";
import createAsyncAction from "~/core/createAsyncAction";
import {fetcher} from "~/lib/fetcher";
import {GET_PAGINATED_POST} from "~/core/query";
import {handleActions} from "redux-actions";
import reducerMap from "~/core/reducerMap";
import produce from "immer";

const postType = "@data/post"

export interface PostInitialState {
  data: null | PaginatedPost
  loading: boolean,
  error: boolean
}

export const PostAction = {
  GET_PAGINATED_POST: createAsyncAction(postType, (first, after, filter) => {
    return fetcher.fetch().query(GET_PAGINATED_POST, {
      data: {
        first: first,
        after: after,
        filter: filter
      }
    })
  })
}

const initialValue: PostInitialState = {
  data: null,
  loading: false,
  error: false
}

const reducer = handleActions<PostInitialState, { data: { getPaginationPost: PaginatedPost } }>({
  ...reducerMap(postType, {
    onRequest: (state, action) => {
      return produce(state, draft => {
        draft.data = null
        draft.error = false
        draft.loading = true
      })
    },
    onSuccess: (state, action) => {
      return produce(state, draft => {
        console.log(action.payload)
        draft.data = action.payload.data.getPaginationPost
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
