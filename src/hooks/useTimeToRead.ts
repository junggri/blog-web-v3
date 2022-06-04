function useTimeToRead(content: string) {
  // if (!content) {
  //   return [0];
  // }
  if (!content) return 0
  const contentLen = (content.replace(/ /g, "")).length;
  const average = 4;
  const charPerMinute = 275;

  const timeToRead = Math.ceil(contentLen / (average * charPerMinute));
  return [timeToRead];
}

export default useTimeToRead;
