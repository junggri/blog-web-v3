import {handleActions} from "redux-actions";
import createAsyncAction from "~/core/createAsyncAction";
import {fetcher} from "~/lib/fetcher";
import reducerMap from "~/core/reducerMap";
import produce from "immer";
import {GET_HITS} from "~/core/query";

const HitType = "@data/hit";


export interface Hit {
  getVisitor: {
    __typename: string
    totalsForAllResults: {
      __typename: string
      user: string
      session: string
    }
    rows: string
  }
}


export interface HitInitialState {
  data: null | Hit[]
  loading: boolean
  error: boolean
}


export const HitActions = {
  GET_HIT: createAsyncAction(HitType, () => {
    return fetcher.fetch().query(GET_HITS)
  })
}

const initialValue: HitInitialState = {
  data: null,
  loading: false,
  error: false
}

const reducer = handleActions<HitInitialState, { data: { getVisitor: Hit[] } }>({
  ...reducerMap(HitType, {
    onRequest: (state, action) => {
      return produce(state, (draft: HitInitialState) => {
        draft.data = null
        draft.loading = true;
        draft.error = false
      })
    },
    onSuccess: (state, action) => {
      return produce(state, (draft: HitInitialState) => {
        draft.data = action.payload.data.getVisitor
        draft.error = false
        draft.loading = false
      })
    },
    onFailure: (state, action) => {
      return produce(state, (draft: HitInitialState) => {
        draft.data = state.data
        draft.loading = false
        draft.error = true
      })
    }
  })
}, initialValue)


export default reducer
