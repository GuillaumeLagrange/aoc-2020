import { test, readInput } from '../utils/index';

const prepareInput = (rawInput: string) => {
  const parsedInput = rawInput.split('\n').map(Number);
  return parsedInput;
};

const input = prepareInput(readInput());

const goA = (input: number[]) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        return input[i] * input[j];
      }
    }
  }
};

const goB = (input: number[]) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] < 2020) {
        for (let k = j + 1; k < input.length; k++) {
          if (input[i] + input[j] + input[k] === 2020) {
            return input[i] * input[j] * input[k];
          }
        }
      }
    }
  }
};

/* Tests */

// test()

/* Results */

console.time('Time');
const resultA = goA(input);
const resultB = goB(input);
console.timeEnd('Time');

console.log('Solution to part 1:', resultA);
console.log('Solution to part 2:', resultB);
