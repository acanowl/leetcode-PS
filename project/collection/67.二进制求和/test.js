var addBinary = function (a, b) {
  // 1
  // let res = '', pos = 0
  // for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
  //   let sum = pos
  //   sum += i >= 0 ? parseInt(a[i]) : 0
  //   sum += j >= 0 ? parseInt(b[j]) : 0
  //   res = sum % 2 + res
  //   pos = Math.floor(sum / 2)
  // }
  // res = (pos == 1 ? pos : '') + res
  // console.log(res, pos)
  // return res

  // 2
  // let res = '', pos = 0
  // let i = a.length - 1, j = b.length - 1
  // while (i >= 0 || j >= 0) {
  //   let sum = pos
  //   sum += i >= 0 ? parseInt(a[i]) : 0
  //   sum += j >= 0 ? parseInt(b[j]) : 0
  //   res = sum % 2 + res
  //   pos = Math.floor(sum / 2)
  //   i--, j--
  // }
  // res = (pos == 1 ? pos : '') + res
  // return res

  // 3
  let res = '', pos = 0
  const max = Math.max(a.length, b.length)
  if (max === a.length) {
    b = b.padStart(max, 0)
  } else {
    a = a.padStart(max, 0)
  }

  for (let i = max; i > 0; i--) {
    const sum = Number(a[i - 1]) + Number(b[i - 1]) + pos
    res = sum % 2 + res
    pos = Math.floor(sum / 2)
  }
  res = (pos ? '1' : '') + res
  return res
}


let a = '11', b = '1'
console.log(addBinary(a, b), 'to be 100')

// a = '1010', b = '1011'
// console.log(addBinary(a, b), 'to be 10101')

// a = '1111', b = '1111'
// console.log(addBinary(a, b), 'to be 11110')

// a = '0', b = '0'
// console.log(addBinary(a, b), 'to be 0')

/* 
// const max = Math.max(a.length, b.length)
// if (a.length === max) {
//     b = b.padStart(max, 0)
// } else {
//     a = a.padStart(max, 0)
// }
// let res = '', add = false
// for (let i = max - 1; i >= 0; i--) {
//     const total = Number(a[i]) + Number(b[i])
//     if (total === 1) {
//         res = (add ? '0' : '1') + res
//     } else {
//         res = (add ? '1' : '0') + res
//         add = total === 2
//     }
// }
// // 如果add为true需要进一
// res = add ? '1' + res : res
// return res
*/