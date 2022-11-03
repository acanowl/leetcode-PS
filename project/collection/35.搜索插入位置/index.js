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
