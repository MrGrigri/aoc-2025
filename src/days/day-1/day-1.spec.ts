import { describe, expect, it } from 'vitest';
import { part1, part2 } from './day-1';

describe('day 1', () => {
  it('Should return x for test data', () => {
    expect(part1(true)).toEqual([[3, 4]]);
  });

  it('Should return 31 for test data', () => {
    expect(part2(true)).toEqual([[3, 4]]);
  });
});
