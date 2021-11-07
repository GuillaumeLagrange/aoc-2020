import { test, readInput } from '../utils/index';

const prepareInput = (rawInput: string) => {
  return rawInput
    .slice(0, -1)
    .split('\n')
    .map((entry) => {
      const splittedEntry = entry.split(' ');
      return {
        min: Number(splittedEntry[0].split('-')[0]),
        max: Number(splittedEntry[0].split('-')[1]),
        letter: splittedEntry[1][0],
        password: splittedEntry[2],
      };
    });
};

const input = prepareInput(readInput());

const goA = (input: any[]) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let letterCount = 0;
    for (let j = 0; j < input[i].password.length; j++) {
      if (input[i].letter === input[i].password[j]) {
        letterCount += 1;
      }
    }

    if (input[i].min <= letterCount && input[i].max >= letterCount) {
      count += 1;
    }
  }

  return count;
};

const goB = (input: any[]) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const minChar = input[i].password[input[i].min - 1];
    const maxChar = input[i].password[input[i].max - 1];
    const letter = input[i].letter;
    if (
      (minChar === letter && maxChar !== letter) ||
      (minChar !== letter && maxChar === letter)
    ) {
      count += 1;
    }
  }

  return count;
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
