const assert = require("assert");

const program = [1002, 4, 3, 4, 33];

function formatOpcode(opcode: number): number[] {
  const opcodeArray = Array.from(opcode.toString());

  opcodeArray[opcodeArray.length - 2] =
    opcodeArray[opcodeArray.length - 2] + opcodeArray[opcodeArray.length - 1];

  opcodeArray.pop();

  return opcodeArray.map(Number).reverse();
}

assert.deepEqual(formatOpcode(1002), []);

function executeInstruction(address: number, program: number[]): number[] {
  const opcode = formatOpcode(program[address]);

  console.log(opcode);

  switch (opcode[0]) {
    case 1: {
      const param1 = program[address + 1];
      const param2 = program[address + 2];
      const param3 = program[address + 3];

      program[param3] = program[param1] + program[param2];

      executeInstruction(address + 4, program);
      break;
    }
    case 2: {
      const param1 = program[address + 1];
      const param2 = program[address + 2];
      const param3 = program[address + 3];

      program[param3] = program[param1] * program[param2];

      executeInstruction(address + 4, program);
      break;
    }
    case 3: {
      const param1 = program[address + 1];
      const input = 1;
      program[param1] = input;

      executeInstruction(address + 2, program);
      break;
    }
    case 4: {
      const param1 = program[address + 1];
      const output = program[param1];

      console.log("output: ", output);

      executeInstruction(address + 2, program);
      break;
    }
    case 99: {
      return program;
    }
    default: {
      throw new Error("unknown instruction");
    }
  }

  return program;
}

function executeProgram(program: number[]) {
  return executeInstruction(0, program);
}

assert.deepEqual(executeProgram([1002, 4, 3, 4, 33]), [1002, 4, 3, 4, 99]);

const executedProgram = executeProgram(program);
console.log(executedProgram);
console.log(executedProgram[0]);
