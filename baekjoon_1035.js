const coordinate1 = [
  [0, 0],
  [4, 0],
  [0, 4],
  [4, 4],
];

const coordinate2 = [
  [2, 1],
  [3, 1],
  [3, 3],
];

const coordinate3 = [
  [0, 4],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 2],
];

const solution = (coo) => {
  const copyCoo = coo.slice();

  let result = 0;
  let distance = 0;
  let targetCoordinate = copyCoo[0];
  let fromIndex = 0;
  let toIndex = 0;
  let matchToIndex = 0;
  let movedIndexes = [];

  while (distance !== 8) {
    distance = 8;

    let zeroCount = 0;

    do {
      targetCoordinate = copyCoo[fromIndex];

      for (let i = fromIndex + 1; i < copyCoo.length; i++) {
        const x1 = targetCoordinate[0];
        const y1 = targetCoordinate[1];
        const x2 = copyCoo[i][0];
        const y2 = copyCoo[i][1];

        let deltX = x1 - x2;
        let deltY = y1 - y2;

        if (deltX < 0) {
          deltX = deltX * -1;
        }

        if (deltY < 0) {
          deltY = deltY * -1;
        }

        let diff = deltX + deltY - 1;

        if (diff === 0) {
          zeroCount++;
        }

        if (0 < diff && diff < distance) {
          if (!movedIndexes.includes(i)) {
            distance = diff;

            toIndex = i;
            matchToIndex = fromIndex;
          }
        }
      }

      fromIndex++;
    } while (fromIndex < copyCoo.length);

    if (zeroCount === copyCoo.length - 1) {
      console.log('zeroCount result:: ', result);
      return result;
    }

    if (distance === 8) {
      console.log('distance result:: ', result);
      return result;
    }

    // 거리가 가장 짧았던 좌표를 찾아서 비교했던 대상과 거리를 바로 옆으로 좌표를 변경한다.
    // 그리고 다시 loop 실행
    const newCoordinate = [];

    console.log('distance:: ', distance);
    const fromX = copyCoo[matchToIndex][0];
    const fromY = copyCoo[matchToIndex][1];
    const toX = copyCoo[toIndex][0];
    const toY = copyCoo[toIndex][1];

    let newX = 0;
    let newY = 0;

    if (fromY === toY) {
      newX = fromX + 1;
    }

    let movedDistance = toX - newX;

    if (movedDistance < 0) {
      movedDistance = movedDistance * -1;
    }

    const leftDistance = distance - movedDistance;

    newY = toY - leftDistance;

    if (!movedIndexes.includes(toIndex)) {
      newCoordinate.push(newX, newY);
      copyCoo[toIndex] = newCoordinate;
      movedIndexes.push(toIndex);
    } else {
      continue;
    }

    console.log('coordinate:: ', copyCoo);

    fromIndex = 0;
    result += distance;
  }

  console.log('last result:: ', result);
  return result;
};

solution(coordinate2);
