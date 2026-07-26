/**
 * Generates array of numeric scale values:
 * - Every integer from 1 to 500
 * - Round numbers (multiples of 10) from 510 up to 10,000
 */
export function getScaledValues(): number[] {
  const values: number[] = [];

  // 1 to 500 (every integer)
  for (let i = 1; i <= 500; i++) {
    values.push(i);
  }

  // 510 to 10,000 (multiples of 10)
  for (let i = 510; i <= 10000; i += 10) {
    values.push(i);
  }

  return values;
}
