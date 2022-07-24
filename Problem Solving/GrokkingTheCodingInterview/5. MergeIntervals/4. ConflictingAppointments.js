/**
 * Problem Statement:
 * Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
 *
 * Example 1:
 * Intervals: [[1,4], [2,5], [7,9]]
 * Output: false
 * Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
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

const canAttendAppointments = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);
  let start = intervals[0].start;
  let end = intervals[0].end;
  for (let i = 1; i < intervals.length; i++) {
    const subsequentInterval = intervals[i];
    if (subsequentInterval.start <= end) {
      // overlapping interval found;
      return false;
    } else {
      // non-overlapping interval
      start = subsequentInterval.start;
      end = subsequentInterval.end;
    }
  }

  return true;
};

// SMOKE TEST
// const intervals = [new Interval(6, 7), new Interval(2, 4), new Interval(8, 12)];
// console.log(canAttendAppointments(intervals));
