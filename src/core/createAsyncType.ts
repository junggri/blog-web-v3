export default function createAsyncType(type: string) {
  return {
    REQUEST: type + "/REQUEST",
    SUCCESS: type + "/SUCCESS",
    FAILURE: type + "/FAILURE"
  }
}
