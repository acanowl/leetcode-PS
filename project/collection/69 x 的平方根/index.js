export const mySqrt_1 = x => {
  const mid = Math.floor(x / 2) + 1
  for (let i = 0; i <= mid; i++) {
    if (i * i > x) {
      return i - 1
    }
    if (i * i === x) {
      return i
    }
  }
}

export const mySqrt_2 = x => {
  let left = 0, right = x
  while (left <= right) {
    console.log(left, right, Math.floor((right - left) / 2))
    const mid = left + Math.floor((right - left) / 2)
    if (mid * mid <= x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}
