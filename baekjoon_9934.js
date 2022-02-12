const K = 2;
const ORDER = [2, 1, 3];

const solution = (k, order) => {
  // 1. get middle index of order
  // 2. put middle value into result array
  // 3. return result array sliced with 2^1, 2^2, 2^3 ... 2^k
  const result = [];

  let cycle = 0;
  let sequence = order.slice();

  let temp = [sequence];

  while(cycle < k) {
    let middleIndex;

    temp.forEach(seq => {
      middleIndex = Math.floor(seq.length / 2);
      const parentNode = seq[middleIndex]
  
      result.push(parentNode);
    });

    temp = [];

    cycle++;

    for (let i = 0; i < cycle; i++) {
      const start = middleIndex * i;
      const end = start * (i + 1);
      const sliced = sequence.slice(start, end);
      temp.push(sliced);
    }
  }
}

const patternSolution = (k, order) => {
  const sequence = [];

  for (let i = 0; i < k; i++) {
    sequence.push(i);
  }
}
