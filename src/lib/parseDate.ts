export default function parseDate(input: Date) {
  const year = input.getFullYear();
  const month = input.getMonth() + 1;
  const date = input.getDate();

  return `${year}년 ${month}월 ${date}일`
}
