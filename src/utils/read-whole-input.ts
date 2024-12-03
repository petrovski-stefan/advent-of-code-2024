import { readFileSync } from 'fs';

const readWholeInput = (fileName: string) => {
  const data = readFileSync(fileName, 'utf-8');

  return data;
};

export default readWholeInput;
