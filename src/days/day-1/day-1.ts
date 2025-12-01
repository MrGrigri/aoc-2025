import { resolve } from 'node:path';
import { readFile } from '../../utils/read-file';

export const part1 = (useTestData: boolean = false) => {
  const data = readFile(
    resolve(__dirname, useTestData ? './test-data.txt' : './data.txt')
  );

  return data;
};

export const part2 = (useTestData: boolean = false) => {
  const data = readFile(
    resolve(__dirname, useTestData ? './test-data.txt' : './data.txt')
  );

  return data;
};
