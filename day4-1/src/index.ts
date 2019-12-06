const assert = require("assert");

const range = [353096, 843212];

function hasAdjacentDigits(list: string[]): boolean {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === list[i + 1]) {
      return true;
    }
  }

  return false;
}

function digitsIncrease(list: string[]): boolean {
  for (let i = 0; i < list.length; i++) {
    if (parseInt(list[i]) > parseInt(list[i + 1])) {
      return false;
    }
  }

  return true;
}

let validPasswordCount = 0;

for (let i = range[0] + 1; i < range[1]; i++) {
  const charArray = i.toString().split("");

  if (charArray.length !== 6) {
    continue;
  }

  if (!hasAdjacentDigits(charArray)) {
    continue;
  }

  if (!digitsIncrease(charArray)) {
    continue;
  }

  validPasswordCount++;
}

assert.strictEqual(
  hasAdjacentDigits(["1", "2", "3", "4"]),
  false,
  "Array with no adjescent numbers should return false"
);
assert.strictEqual(
  hasAdjacentDigits(["1", "2", "2", "3"]),
  true,
  "Array with adjescent numbers should return true"
);

assert.strictEqual(
  digitsIncrease(["1", "2", "3"]),
  true,
  "Array with only increasing digits should return true"
);
assert.strictEqual(
  digitsIncrease(["1", "2", "2"]),
  true,
  "Array with increasing or equal digits should return true"
);
assert.strictEqual(
  digitsIncrease(["1", "2", "1"]),
  false,
  "Array with decreasing digits should return false"
);

console.log(validPasswordCount);
