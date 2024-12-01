import readSampleInput from '../utils/read-sample-input';

const main = () => {
  const data = readSampleInput('src/1/sample-input.txt');

  const firstList: Array<number> = [];
  const secondList: Array<number> = [];
  data
    .map((line) => line.split(/\s+/))
    .forEach(([first, second]) => {
      firstList.push(Number(first));
      secondList.push(Number(second));
    });

  firstList.sort((a, b) => a - b);
  secondList.sort((a, b) => a - b);

  const differences: Array<number> = [];

  for (let i = 0; i < firstList.length; i++) {
    differences.push(Math.abs(firstList[i] - secondList[i]));
  }

  console.log(differences.reduce((acc, curr) => acc + curr, 0));
};

const mainExtended = () => {
  const data = readSampleInput('src/1/sample-input.txt');
  const firstList: Array<number> = [];
  const secondList: Array<number> = [];
  data
    .map((line) => line.split(/\s+/))
    .forEach(([first, second]) => {
      firstList.push(Number(first));
      secondList.push(Number(second));
    });

  const numbersByCount = secondList.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {} as Record<number, number>);

  console.log(
    firstList.reduce((acc, curr) => {
      const increase = curr in numbersByCount ? numbersByCount[curr] : 0;
      return acc + curr * increase;
    }, 0)
  );
};

main();
mainExtended();
