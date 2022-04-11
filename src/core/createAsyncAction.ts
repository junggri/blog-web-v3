import createAsyncType from "~/core/createAsyncType";

export default function createAsyncAction(action: string, func: (...arg: any) => void) {
  const {REQUEST, SUCCESS, FAILURE} = createAsyncType(action)

  return (...arg: any) => {
    return {
      type: REQUEST,
      payload: [() => func(...arg), SUCCESS, FAILURE]
    }
  }
}
