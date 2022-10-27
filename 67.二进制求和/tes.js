var addBinary = function (a, b) {
  let al = a.length, bl = b.length, pos = 0, res = ''

  while (al > 0 || bl > 0) {
    // ~~ === 
    // let sum = ~~a[al - 1] + ~~b[bl - 1] + pos
    let sum = Number(a[al - 1] || 0) + Number(b[bl - 1] || 0) + pos

    res = sum % 2 + res
    // 进位
    pos = pos % 2

    console.log(res, pos)

    al--
    bl--
  }
  res = (pos ? '1' : '') + res
  return res
}

// let a = '11', b = '1'
// console.log(addBinary(a, b), 'to be 100')

// a = '1010', b = '1011'
// console.log(addBinary(a, b), 'to be 10101')

a = '1111', b = '1111'
console.log(addBinary(a, b), 'to be 11110')









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