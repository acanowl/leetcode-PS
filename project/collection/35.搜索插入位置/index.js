// 题解1 => 0.113ms
export const searchInsert_1 = (nums, target) => {
  let start = 0, end = nums.length - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return start
}

// 题解2 => 0.118ms
export const searchInsert_2 = (nums, target) => {
  let slow = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      slow++
    } else {
      break
    }
  }
  return slow
}

// 题解3 => 0.102ms
export const searchInsert_3 = (nums, target) => {
  let i = 0
  while (i < nums.length) {
    if (nums[i] < target) {
      i++
    } else {
      break
    }
  }
  return i
}

console.time('start')
const index1 = searchInsert_1([1, 3, 5, 6], 2)
console.timeEnd('start')
const index2 = searchInsert_1([1, 3, 5, 6], 5)
const index3 = searchInsert_1([1, 3, 5, 6], 7)
console.log(index1, ' tobe 1')
console.log(index2, ' tobe 2')
console.log(index3, ' tobe 4')
