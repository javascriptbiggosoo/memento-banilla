function solution(n, words) {
  let curr = words[0][0];
  const obj = {};
  let i = 0;

  for (const el of words) {
    i++;
    console.log(curr.at(-1), el[0]);
    if (el in obj || curr.at(-1) !== el[0]) {
      return [i % n || n, Math.ceil(i / n)];
    }

    obj[el] = true;
    curr = el;
  }

  return [0, 0];
}
