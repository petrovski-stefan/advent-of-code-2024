import readSampleInput from '../utils/read-sample-input';

const main = () => {
  const data = readSampleInput('src/4/input.txt');
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (
        j + 3 < data[i].length &&
        data[i][j] === 'X' &&
        data[i][j + 1] === 'M' &&
        data[i][j + 2] === 'A' &&
        data[i][j + 3] === 'S'
      ) {
        count++; // desno
      }

      if (
        j >= 3 &&
        data[i][j] === 'X' &&
        data[i][j - 1] === 'M' &&
        data[i][j - 2] === 'A' &&
        data[i][j - 3] === 'S'
      ) {
        count++; // levo
      }

      if (
        i >= 3 &&
        j + 3 < data[i].length &&
        data[i][j] === 'X' &&
        data[i - 1][j + 1] === 'M' &&
        data[i - 2][j + 2] === 'A' &&
        data[i - 3][j + 3] === 'S'
      ) {
        count++; // gore desno
      }

      if (
        i >= 3 &&
        j >= 3 &&
        data[i][j] === 'X' &&
        data[i - 1][j - 1] === 'M' &&
        data[i - 2][j - 2] === 'A' &&
        data[i - 3][j - 3] === 'S'
      ) {
        count++; // gore levo
      }

      if (
        i + 3 < data.length &&
        j + 3 < data[i].length &&
        data[i][j] === 'X' &&
        data[i + 1][j + 1] === 'M' &&
        data[i + 2][j + 2] === 'A' &&
        data[i + 3][j + 3] === 'S'
      ) {
        count++; // dole desno
      }

      if (
        i + 3 < data.length &&
        j >= 3 &&
        data[i][j] === 'X' &&
        data[i + 1][j - 1] === 'M' &&
        data[i + 2][j - 2] === 'A' &&
        data[i + 3][j - 3] === 'S'
      ) {
        count++; // dole levo
      }

      if (
        i >= 3 &&
        data[i][j] === 'X' &&
        data[i - 1][j] === 'M' &&
        data[i - 2][j] === 'A' &&
        data[i - 3][j] === 'S'
      ) {
        count++; // gore
      }

      if (
        i + 3 < data.length &&
        data[i][j] === 'X' &&
        data[i + 1][j] === 'M' &&
        data[i + 2][j] === 'A' &&
        data[i + 3][j] === 'S'
      ) {
        count++; // dole
      }
    }
  }
  console.log(count);
};

const mainExtended = () => {
  const data = readSampleInput('src/4/input.txt');
  let count = 0;
  for (let i = 1; i < data.length - 1; i++) {
    for (let j = 1; j < data[i].length - 1; j++) {
      if (data[i][j] === 'A') {
        const neighbours = [
          data[i + 1][j + 1],
          data[i - 1][j + 1],
          data[i + 1][j - 1],
          data[i - 1][j - 1],
        ];

        const neighboursCount = neighbours.reduce(
          (acc, curr) => {
            if (curr === 'M') {
              acc['M']++;
            }
            if (curr === 'S') {
              acc['S']++;
            }
            return acc;
          },
          { M: 0, S: 0 }
        );

        if (
          neighboursCount['M'] === 2 &&
          neighboursCount['S'] === 2 &&
          data[i + 1][j + 1] !== data[i - 1][j - 1] // prevent same char in the same diagonals
        ) {
          count++;
        }
      }
    }
  }
  console.log(count);
};

main();
mainExtended();
