const program = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  1,
  10,
  19,
  2,
  9,
  19,
  23,
  1,
  9,
  23,
  27,
  2,
  27,
  9,
  31,
  1,
  31,
  5,
  35,
  2,
  35,
  9,
  39,
  1,
  39,
  10,
  43,
  2,
  43,
  13,
  47,
  1,
  47,
  6,
  51,
  2,
  51,
  10,
  55,
  1,
  9,
  55,
  59,
  2,
  6,
  59,
  63,
  1,
  63,
  6,
  67,
  1,
  67,
  10,
  71,
  1,
  71,
  10,
  75,
  2,
  9,
  75,
  79,
  1,
  5,
  79,
  83,
  2,
  9,
  83,
  87,
  1,
  87,
  9,
  91,
  2,
  91,
  13,
  95,
  1,
  95,
  9,
  99,
  1,
  99,
  6,
  103,
  2,
  103,
  6,
  107,
  1,
  107,
  5,
  111,
  1,
  13,
  111,
  115,
  2,
  115,
  6,
  119,
  1,
  119,
  5,
  123,
  1,
  2,
  123,
  127,
  1,
  6,
  127,
  0,
  99,
  2,
  14,
  0,
  0
];

function executeProgram(program: number[]): number {
  for (let i = 0; i <= program.length; i += 4) {
    if (program[i] === 99) {
      break;
    }

    const firstValue = program[i + 1];
    const secondValue = program[i + 2];
    const target = program[i + 3];

    if (
      typeof firstValue === "undefined" ||
      typeof secondValue === "undefined" ||
      typeof target === "undefined"
    ) {
      throw new Error("parameter is undefined");
    }

    if (
      typeof program[firstValue] === "undefined" ||
      typeof program[secondValue] === "undefined" ||
      typeof program[target] === "undefined"
    ) {
      throw new Error("value out of reach");
    }

    switch (program[i]) {
      case 1: {
        program[target] = program[firstValue] + program[secondValue];
        break;
      }
      case 2: {
        program[target] = program[firstValue] * program[secondValue];
        break;
      }
      default: {
        throw new Error("unknown instruction");
      }
    }
  }

  return program[0];
}

for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    const newProgram = [...program];
    newProgram[1] = noun;
    newProgram[2] = verb;

    const outcome = executeProgram(newProgram);
    if (outcome === 19690720) {
      console.log(noun, verb);
      console.log(100 * noun + verb);
    }
  }
}
