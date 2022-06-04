import {YouTubeItem} from "../../pages/youtube/type";
import createAsyncAction from "~/core/createAsyncAction";
import {fetcher} from "~/lib/fetcher";
import {GET_VIDEOS} from "~/core/query";
import {handleActions} from "redux-actions";
import reducerMap from "~/core/reducerMap";
import produce from "immer";

const youtubeType = "@data/youtube";


export interface YoutubeInitialState {
  data: [] | YouTubeItem[]
  nextPageToken: string | null
  loading: boolean
  error: boolean
}

export const YoutubeActions = {
  GET_VIDEOS: createAsyncAction(youtubeType, (nextPageToken: null | string) => {
    return fetcher.fetch().query(GET_VIDEOS, {
      data: {
        nextPageToken: nextPageToken
      }
    })
  })
}

const initialValue: YoutubeInitialState = {
  data: [],
  nextPageToken: null,
  loading: false,
  error: false
}

interface Return {
  data: {
    getVideos: {
      data: string
      nextPageToken: string
    }
  }
}

const reducer = handleActions<YoutubeInitialState, Return>({
  ...reducerMap(youtubeType, {
    onRequest: (state, action) => {
      return produce(state, draft => {
        draft.data = state.data
        draft.loading = true
        draft.error = false
      })
    },
    onSuccess: (state, action) => {
      return produce(state, draft => {
        draft.nextPageToken = action.payload.data.getVideos.nextPageToken
        draft.data = [...state.data, ...JSON.parse(action.payload.data.getVideos.data)];
        draft.loading = false
        draft.error = false
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
