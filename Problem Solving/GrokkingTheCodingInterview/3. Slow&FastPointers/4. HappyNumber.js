/**
 * Problem Statement:
 * Any number will be called a happy number if, after repeatedly replacing it with a
 * number equal to the sum of the square of all of its digits, leads us to number ‘1’.
 * All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck
 * in a cycle of numbers which does not include ‘1’.
 *
 * Example:
 * Input: 23
 * Output: true (23 is a happy number)
 * Explanations: Here are the steps to find out that 23 is a happy number
 */

const calculateSquareSum = (num) => {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
};

const isHappyNumber = (num) => {
  let slow = num;
  let fast = num;

  while (true) {
    slow = calculateSquareSum(slow);
    fast = calculateSquareSum(calculateSquareSum(fast));
    console.log({ slow, fast });
    if (slow === fast) break;
  }
  return slow === 1 ? true : false;
};

// SMOKE TEST
// console.log(isHappyNumber(23));
// console.log(isHappyNumber(12));
