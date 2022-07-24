/**
 * Problem Statement:
 * Given a list of intervals, merge all the overlapping intervals to produce a list
 * that has only mutually exclusive intervals.
 *
 * Example 1:
 * Intervals: [ [2,5], [1,4], [7,9]]
 * Output: [[1,5], [7,9]]
 * Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].
 */

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  printInterval = () => {
    console.log(`[${this.start}, ${this.end}]`);
  };
}

const mergeIntervals = (intervals) => {
  // sort the intevals(based on their starting value)
  intervals.sort((a, b) => a.start - b.start);

  // merge the intervals(repeatedly)
  const mergedIntervals = [];
  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const subsequentInterval = intervals[i];
    if (subsequentInterval.start <= end) {
      // overlapping interval found; adjusting the end pointer
      end = Math.max(end, subsequentInterval.end);
    } else {
      // non-overlapping interval, add the previous interval and reset the pointers
      mergedIntervals.push(new Interval(start, end));
      start = subsequentInterval.start;
      end = subsequentInterval.end;
    }
  }

  // add the last interval
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
};

// SMOKE TEST
// const intervals = [new Interval(2, 5), new Interval(1, 4), new Interval(7, 9)];
// const mergedIntervals = mergeIntervals(intervals);
// mergedIntervals.forEach((interval) => {
//   interval.printInterval();
// });
