/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const triplets = []
    if(nums.length < 3) return triplets

	// having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
	nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
    let target = 0

    for(let left = 0; left < nums.length - 2; left++){
        // `left` represents the index of the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
		if (nums[left] > target) break

        // we don't want repeats, so skip numbers we've already seen
		if (left > 0 && nums[left] === nums[left - 1]) continue

        // `mid` represents the "middle" element between `left` and `right`.
		// we will increment this up through the array while `left' and `right`
		// are anchored to their positions. we will decrement `right` for
		// for each pass through the array, and finally increment `left`
		// once `mid` and `right` meet.
		let mid = left + 1


		// `right` represents the "right" most element
		let right = nums.length - 1

		
		// to summarize our setup, we have `left` that starts at the beginning,
		// `right` that starts at the end, and `mid` that races in between the two.
		//
		// note that `left` is controlled by our outer for-loop and will move the slowest.
		// in the meantime, `mid` and `right` will take turns inching towards each other depending
		// on some logic we'll set up below. once they collide, `left` will be incremented up
		// and we'll repeat the process.

        // with left anchored, the problem reduces to a two sum problem
        while(mid < right){
            let sum = nums[left] + nums[mid] + nums[right]

            // if we find the target sum, increment `mid` and decrement `right` for
			// other potential combos where `left` is the anchor
            if(sum === target){
                // store the valid threesum
				triplets.push([nums[left], nums[mid], nums[right]])
                

                // this is important! we need to continue to increment `mid` and decrement `right`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
				//
				// (not a fan of this part because we're doing a while loop as we're
				// already inside of another while loop...)
				while (nums[mid] === nums[mid + 1]) mid++
				while (nums[right] === nums[right - 1]) right--


                // finally, we need to actually move `mid` forward and `right` backward to the
				// next unique elements. the previous while loops will not handle this.
				mid++
				right--
            } else if (sum < target) mid++
            else right--
        }
    }
    
    return triplets
};
// @lc code=end

