/**
 * Binary search
 * @param  {number[]} sortedArray
 * @param  {number} toSearch
 */
const binarySearch = (sortedArray: number[], toSearch: number) => {
  let left: number = 0, right: number = sortedArray.length - 1

  while(left <= right) {
      let mid: number = Math.floor((left+right)/2)

      if(sortedArray[mid] === toSearch) return mid
      else if(sortedArray[mid] < toSearch) left = mid + 1
      else if(sortedArray[mid] > toSearch) right = mid - 1
  }

  return -1
}

// SMOKE TEST
// const sortedArr = [1, 2, 5, 64, 234, 666, 2000]
// console.log(binarySearch(sortedArr, 2000))