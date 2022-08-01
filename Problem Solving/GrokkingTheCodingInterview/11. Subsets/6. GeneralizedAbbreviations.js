/**
 * Problem Statement:
 * Given a word, write a function to generate all of its unique generalized abbreviations.
 *
 * A generalized abbreviation of a word can be generated by replacing each substring
 * of the word with the count of characters in the substring. Take the example
 * of “ab” which has four substrings: “”, “a”, “b”, and “ab”. After replacing
 * these substrings in the actual word by the count of characters, we get all
 * the generalized abbreviations: “ab”, “1b”, “a1”, and “2”.
 *
 * Note: All contiguous characters should be considered one substring, e.g.,
 * we can’t take “a” and “b” as substrings to get “11”; since “a” and “b” are
 * contiguous, we should consider them together as one substring to get an abbreviation “2”.
 *
 * Example:
 * Input: "BAT"
 * Output: "BAT", "BA1", "B1T", "B2", "1AT", "1A1", "2T", "3"
 */

class AbbreviationWord {
  constructor(str, start, count) {
    this.str = str;
    this.start = start;
    this.count = count;
  }
}

/**
 * approach: BFS
 * illustration: https://designgurus.org/path-player?courseid=grokking-the-coding-interview&unit=grokking-the-coding-interview_1628744084164_72Unit
 * @param  {} word
 */
const generateGeneralizedAbbreviation = (word) => {
  const wordLength = word.length;
  const abbreviations = [];
  const queue = [new AbbreviationWord("", 0, 0)];

  while (queue.length) {
    const abWord = queue.shift();

    if (abWord.start === wordLength) {
      // if has _, abbreviate
      if (abWord.count !== 0) {
        abWord.str = abWord.str + abWord.count;
        abWord.count = 0;
      }
      abbreviations.push(abWord.str);
    } else {
      // case 1: continue abbreviating, skip adding letter
      queue.push(
        new AbbreviationWord(abWord.str, abWord.start + 1, abWord.count + 1)
      );

      // case 2: skip abbreviating

      // if already has _, restart abbreviation
      if (abWord.count !== 0) {
        abWord.str = abWord.str + abWord.count;
        abWord.count = 0;
      }

      // append the next letter
      const newWord = abWord.str + word[abWord.start];
      queue.push(new AbbreviationWord(newWord, abWord.start + 1, abWord.count));
    }
  }

  return abbreviations;
};

const generateGeneralizedAbbreviationRecursive = (word) => {
  const abbreviations = [];

  const helper = (word, str, start, count, abbreviations) => {
    if (start === word.length) {
      if (count !== 0) {
        // if has _, abbreviate
        str = str + count;
        count = 0;
      }
      abbreviations.push(str);
      return;
    }

    // case 1: continue abbreviating, skip adding letter
    helper(word, str, start + 1, count + 1, abbreviations);

    // if already has _, restart abbreviation
    if (count !== 0) {
      str = str + count;
      count = 0;
    }

    // append the next letter
    const newWord = str + word[start];
    helper(word, newWord, start + 1, count, abbreviations);
  };
  helper(word, "", 0, 0, abbreviations);
  return abbreviations;
};

// SMOKE TEST
// const word = "BAT";
// console.log(generateGeneralizedAbbreviation(word));
// console.log(generateGeneralizedAbbreviationRecursive(word));
