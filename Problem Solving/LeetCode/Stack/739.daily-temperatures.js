/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * concept monotonic stack
 * explanation: https://leetcode.com/problems/daily-temperatures/solution/
 * 
 * complexity: time O(n); space O(n)
 * Time complexity: At first glance, it may look like the time complexity of this algorithm should be O(N^2)
 * because there is a nested while loop inside the for loop. However, each element can only 
 * be added to the stack once, which means the stack is limited to N pops. Every iteration of the while loop uses 1 pop, 
 * which means the while loop will not iterate more than NN times in total, across all iterations of the for loop.
 * An easier way to think about this is that in the worst case, every element will be pushed and popped once. This gives a time complexity of O(2 N) = O(N)
 * 
 * Space complexity: If the input was non-increasing, then no element would ever be popped 
 * from the stack, and the stack would grow to a size of N elements at the end.
 * Note: answer does not count towards the space complexity because space used for the output format does not count.


 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const answer = new Array(temperatures.length);
  answer.fill(0);

  for (let day = 0; day < temperatures.length; day++) {
    const currentTemp = temperatures[day];

    while (stack.length) {
      const stackTop = stack[stack.length - 1];
      if (temperatures[stackTop] < currentTemp) {
        const prevDay = stack.pop();
        answer[prevDay] = day - prevDay;
      } else break;
    }
    stack.push(day);
  }
  return answer;
};
// @lc code=end
