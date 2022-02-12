const N = 9;
const A = [5, 15, 100, 31, 39, 0, 0, 3, 26];
const B = [11, 12, 13, 2, 3, 4, 5, 9, 1];

const solution = (n, a, b) => {
  let result = 0;

  for (let i = 0; i < n; i++) {
    const aMin = Math.min(...a);
    const bMax = Math.max(...b);

    result += aMin * bMax;

    a.splice(a.indexOf(aMin), 1);
    b.splice(b.indexOf(bMax), 1);
  }

  console.log(result);
  return result;
};

solution(N, A, B);