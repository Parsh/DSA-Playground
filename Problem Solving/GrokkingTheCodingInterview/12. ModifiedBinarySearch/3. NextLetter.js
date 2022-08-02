/**
 * Problem Statement:
 * Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.
 *
 * Assume the given array is a circular list, which means that the last letter
 * is assumed to be connected with the first letter. This also means that the smallest letter
 * in the given array is greater than the last letter of the array and is also the first letter of the array.
 *
 * Write a function to return the next letter of the given ‘key’.
 */

const findNextLetter = (characters, key) => {
  let low = 0;
  let high = characters.length;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);

    // even if mid === target(jumps over duplicates as well),
    // we would like to skip ahead to the next greater character
    if (characters[mid] <= key) low = mid + 1;
    else high = mid;
  }

  return characters[high % characters.length];
};

// SMOKE TEST
const characters = ["a", "c", "f", "h"];
const key = "g";
console.log(findNextLetter(characters, key));
