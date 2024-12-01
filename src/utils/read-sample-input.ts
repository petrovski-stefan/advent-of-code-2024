import { readFileSync } from 'fs';

const readSampleInput = (fileName: string) => {
  const data = readFileSync(fileName, 'utf-8');

  return data.split('\n').map((line) => line.replace('\r', ''));
};

export default readSampleInput;
