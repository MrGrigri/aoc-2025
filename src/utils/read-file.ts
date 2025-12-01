import { readFileSync } from 'node:fs';
import { exit } from 'node:process';

/**
 * Read the file passed. Because Node processes this file based on the file executed,
 * A resolved file name with it's path must be passed.
 *
 * @example
 * import { resolve } from 'node:path';
 * import { readFile } from '$utils/read-file';
 *
 * readFile(resolve(__dirname, './test-data.txt'));
 */
export const readFile = (fileName: string): number[][] => {
  try {
    const data = readFileSync(fileName, 'utf8');
    const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');
    const arrayOfNumberArrays = lines.map((line) => {
      return line
        .split(/\s+/)
        .map(Number)
        .filter((n) => !isNaN(n));
    });

    return arrayOfNumberArrays;
  } catch (err: unknown) {
    if (err instanceof Error && 'code' in err) {
      switch (err.code) {
        case 'ENOENT':
          console.error('Error: No such file or directory.');
          break;
        case 'EACCES':
          console.error('Error: Permission denied to access the file.');
          break;
        case 'EISDIR':
          console.error('Error: Attempted to read a directory as a file.');
          break;
        default:
          console.error('An unexpected error occurred:', err);
          break;
      }
    }
    exit(1);
  }
};
