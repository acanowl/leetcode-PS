
/* var mySqrt = function (x) {
  const len = Math.floor(x / 2)
  for (let i = 0; i <= len + 1; i++) {
    console.log(i)
    if (i * i > x) {
      return i - 1
    }
    if (i * i === x) {
      return i
    }
  }
} */

var mySqrt = function (x) {
  let i = 0

  let left = 0, right = x

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (mid * mid < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}

// console.log(mySqrt(2), 'tobe 1')
console.log(mySqrt(4), 'tobe 2')
// console.log(mySqrt(8), 'tobe 2')
// console.log(mySqrt(82), 'tobe 9')
// console.log(mySqrt(120), 'tobe 10')
// console.log(mySqrt(0), 'tobe 0')
console.log(mySqrt(1346261032), 'tobe 36691')