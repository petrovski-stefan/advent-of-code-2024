import readWholeInput from '../utils/read-whole-input';

const multiply = (str: string) => {
  const [firstNum, secondNum] = str.replace('mul(', '').replace(')', '').split(',').map(Number);

  return firstNum * secondNum;
};

const main = () => {
  const data = readWholeInput('src/3/input.txt');
  const reg = new RegExp(/mul\(\d{1,3},\d{1,3}\)/, 'g');
  const matches = [...data.matchAll(reg)].map((match) => match[0]);

  console.log(matches.reduce((acc, curr) => acc + multiply(curr), 0));
};

const mainExtended = () => {
  const data = readWholeInput('src/3/input.txt');
  const reg = new RegExp(/(mul\(\d{1,3},\d{1,3}\))|(don't\(\))|(do\(\))/, 'g');
  const matches = [...data.matchAll(reg)].map((match) => match[0]);

  let canMultiply = true;
  let sum = 0;

  for (const match of matches) {
    if (match.startsWith("don't")) {
      canMultiply = false;
      continue;
    }

    if (match.startsWith('do')) {
      canMultiply = true;
      continue;
    }

    if (match.startsWith('mul') && canMultiply) {
      sum += multiply(match);
    }
  }

  console.log(sum);
};

main();
mainExtended();
