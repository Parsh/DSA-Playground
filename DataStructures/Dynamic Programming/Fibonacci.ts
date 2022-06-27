/*
Dynamic Programming:
Paradigm for solving complex problems by breaking them down into a collection
of simpler subproblems, solving each of those sub problems exactly once,
and storing their solution

Dynamic Programming works on problems having the following two attributes:
- Overlapping Subproblems: 
  A problem is said to have overlapping subproblems if it can be broken down
  into subproblems, solutions to which can be reused multiple times
- Optimal Substructure:
  A problem is said to have optimal substructure if an optimal solution can be
  constructed from optimal solutions of its subproblems
*/

/**
 * calculates the fibonacci number at the supplied index(non-dynamic programming)
 * @param  {number} n
 * @returns any
 */
const fibonacci = (n: number): any => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.time("fib");
console.log(fibonacci(45));
console.timeEnd("fib");
// execution time: 7 sec, complexity O(2^n)

/**
 * calculates the fibonacci number at the supplied index
 * DP: memoization technique, top-down
 * @param  {number} n
 * @returns any
 */
const memo: any = {};
const fibonacciMemo = (n: number): any => {
  if (memo[n]) return memo[n];
  if (n <= 1) return n;

  const res = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  memo[n] = res;
  return res;
};

console.time("fib-memo");
console.log(fibonacciMemo(45));
console.timeEnd("fib-memo");
// execution time: < 0.1 sec, complexity O(n)

/**
 * calculates the fibonacci number at the supplied index
 * DP: tabulation technique(bottom up), iterative, better space complexity as compared to recursive solution
 * @param  {number} n
 * @returns any
 */
const fibonacciTable = (n: number): any => {
  if (n <= 1) return n;
  const fibTable = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
  }
  return fibTable[n];
};

console.time("fib-tb");
console.log(fibonacciTable(45));
console.timeEnd("fib-tb");
// execution time: < 0.1 sec, complexity O(n)
