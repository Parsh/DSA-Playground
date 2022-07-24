/**
 * Problem Statement:
 * Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position
 * and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
 *
 * Example 1:
 * Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
 * Output: [[1,3], [4,7], [8,12]]
 * Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7]. */

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
  // merge sorted intervals(repeatedly)
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

/**
 * complexity:
 * - time O(n)
 * - space O(n)
 * @param  {} intervals
 * @param  {} intervalToInsert
 */
const insertInterval = (intervals, intervalToInsert) => {
  // we can insert the new interval in the intervals array and sort it(w/ complexity O(nlogn)), however,
  // as the intervals are already sorted, we can insert the new interval using binary search(w/ complexity O(n))

  let low = 0;
  let high = intervals.length;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (intervals[mid].start < intervalToInsert.start) low = mid + 1;
    else high = mid;
  }

  intervals.splice(high, 0, intervalToInsert);
  return mergeIntervals(intervals);
};

// SMOKE TEST
// const intervals = [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)];
// const intervalToInsert = new Interval(4, 6);
// const mergedIntervals = insertInterval(intervals, intervalToInsert);
// mergedIntervals.forEach((interval) => {
//   interval.printInterval();
// });
