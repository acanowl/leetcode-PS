var merge = function (nums1, m, nums2, n) {

  // let copyArray = Array.from(nums1), n1 = 0, n2 = 0, cur
  // while (n1 < m || n2 < n) {
  //   console.log('n1 => ', n1, 'n2 => ', n2, copyArray[n1] <= nums2[n2], '  m => ', m, ' n => ', n)
  //   if (n1 === m) {
  //     cur = nums2[n2++]
  //   } else if (n2 === n) {
  //     cur = copyArray[n1++]
  //   } else if (copyArray[n1] <= nums2[n2]) {
  //     cur = copyArray[n1++]
  //   } else {
  //     cur = nums2[n2++]
  //   }
  //   console.log(cur, 'cur')
  //   nums1[n1 + n2 - 1] = cur
  // }

  // nums1.splice(m, nums1.length - m, ...nums2)
  // nums1.sort((a, b) => a - b)


  let n1 = m - 1, n2 = n - 1, cur, total = nums1.length - 1
  while (n1 >= 0 || n2 >= 0) {
    // console.log('n1 => ', n1, 'n2 => ', n2, nums1[n1], nums2[n2], nums1[n1] <= nums2[n2])
    if (n1 === -1) {
      cur = nums2[n2--]
    } else if (n2 === -1) {
      cur = nums1[n1--]
    } else if (nums1[n1] <= nums2[n2]) {
      cur = nums2[n2--]
    } else {
      cur = nums1[n1--]
    }
    nums1[total--] = cur
  }
  return nums1
}

// 双指针 前往后
// num1 1 2 3 0 0 0
// copy 1 2 3 0 0 0 // n1 => 0
// num2 2 5 6       // n2 => 0

// 双指针 后往前
// num1 1 2 3 0 0 0 // n1 => m - 1
// num2 2 5 6       // n2 => n - 1

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
console.log(merge(nums1, m, nums2, n), 'to be [1,2,2,3,5,6]')

nums1 = [1], m = 1, nums2 = [], n = 0
console.log(merge(nums1, m, nums2, n), 'to be [1]')

nums1 = [0], m = 0, nums2 = [1], n = 1
console.log(merge(nums1, m, nums2, n), 'to be [1]')
