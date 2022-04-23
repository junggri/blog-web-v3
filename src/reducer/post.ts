import {PaginatedPost, PaginationInput} from "~/core/schema";
import createAsyncAction from "~/core/createAsyncAction";
import {fetcher} from "~/lib/fetcher";
import {GET_PAGINATED_POST} from "~/core/query";
import {handleActions} from "redux-actions";
import reducerMap from "~/core/reducerMap";
import produce from "immer";
import {act} from "react-dom/test-utils";

const postType = "@data/post"

export interface PostInitialState {
  data: {
    post: null | PaginatedPost,
    log: null | PaginatedPost
  }
  loading: boolean,
  error: boolean
}

export const PostAction = {
  GET_PAGINATED_POST: createAsyncAction(postType, (first, after, filter, type) => {
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
  data: {
    post: null,
    log: null
  },
  loading: false,
  error: false
}

const reducer = handleActions<PostInitialState, { data: { getPaginationPost: PaginatedPost } }>({
  ...reducerMap(postType, {
    onRequest: (state, action) => {
      return produce(state, draft => {
        draft.data = {
          post: null,
          log: null
        }
        draft.error = false
        draft.loading = true
      })
    },
    onSuccess: (state, action) => {
      return produce(state, draft => {
        const type: string = action.payload.data.getPaginationPost.pageInfo.type
        if (type === "post" || type === "log") {
          draft.data[type] = action.payload.data.getPaginationPost
        }
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
