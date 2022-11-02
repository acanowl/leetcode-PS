// 1
// var mySqrt = function (x) {
//   const mid = Math.floor(x / 2) + 1
//   for (let i = 0; i <= mid; i++) {
//     if (i * i > x) {
//       return i - 1
//     }
//     if (i * i === x) {
//       return i
//     }
//   }
// }

var mySqrt = function (x) {
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

// console.log(mySqrt(0), 'to be 0')
// console.log(mySqrt(4), 'to be 2')
console.log(mySqrt(8), 'to be 2')
// console.log(mySqrt(99), 'to be 9')