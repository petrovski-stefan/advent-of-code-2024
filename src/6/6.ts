import readSampleInput from '../utils/read-sample-input';

type Left = '<';
type Right = '>';
type Up = '^';
type Down = 'v';

type Direction = Left | Right | Up | Down;

const obstacle = '#';

const checkCanMoveInDirection = (data: Array<string>, nextPosition: Array<number>) => {
  const [i, j] = nextPosition;

  return data[i][j] !== obstacle;
};

const checkEndOfTravel = (data: Array<string>, currPosition: Array<number>) => {
  const [i, j] = currPosition;

  if (
    (i === 0 || i === data.length - 1 || j === 0 || j === data[i].length - 1) &&
    data[i][j] !== obstacle
  ) {
    return true;
  }
  return false;
};

const travel = (
  data: Array<string>,
  startingPosition: Array<number>,
  startingDirection: Direction
) => {
  const visitedPositions = new Set<string>();

  let [i, j] = startingPosition;
  let currDirection = startingDirection;
  visitedPositions.add(`${i}--${j}`);

  while (true) {
    visitedPositions.add(`${i}--${j}`);

    if (checkEndOfTravel(data, [i, j])) {
      return visitedPositions;
    }

    if (currDirection === '<') {
      //left

      if (checkCanMoveInDirection(data, [i, j - 1])) {
        j = j - 1;
      } else {
        i = i - 1;
        currDirection = '^';
      }
    } else if (currDirection === '>') {
      //right

      if (checkCanMoveInDirection(data, [i, j + 1])) {
        j = j + 1;
      } else {
        i = i + 1;
        currDirection = 'v';
      }
    } else if (currDirection === '^') {
      //up

      if (checkCanMoveInDirection(data, [i - 1, j])) {
        i = i - 1;
      } else {
        j = j + 1;
        currDirection = '>';
      }
    } else if (currDirection === 'v') {
      //down

      if (checkCanMoveInDirection(data, [i + 1, j])) {
        i = i + 1;
      } else {
        j = j - 1;
        currDirection = '<';
      }
    }
  }
};

const main = () => {
  const data = readSampleInput('src/6/input.txt');

  let start: Array<number> = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === 'v' || data[i][j] === '^' || data[i][j] === '<' || data[i][j] === '>') {
        start = [i, j];

        break;
      }
    }
  }

  const [i, j] = start;
  const visitedPositions = travel(data, [i, j], data[i][j] as Direction);

  console.log(visitedPositions.size);
};

main();
