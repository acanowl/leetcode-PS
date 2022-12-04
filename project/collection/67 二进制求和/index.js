export const addBinary_1 = (a, b) => {
  let res = '', pos = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = pos
    sum += i >= 0 ? parseInt(a[i]) : 0
    sum += j >= 0 ? parseInt(b[j]) : 0
    res = (sum % 2) + res
    pos = Math.floor(sum / 2)
  }
  res = (pos == 1 ? pos : '') + res
  console.log(res, pos)
  return res
}

export const addBinary_2 = (a, b) => {
  let res = '', pos = 0
  let i = a.length - 1, j = b.length - 1
  while (i >= 0 || j >= 0) {
    let sum = pos
    sum += i >= 0 ? parseInt(a[i]) : 0
    sum += j >= 0 ? parseInt(b[j]) : 0
    res = (sum % 2) + res
    pos = Math.floor(sum / 2)
    i--, j--
  }
  res = (pos == 1 ? pos : '') + res
  return res
}

export const addBinary_3 = (a, b) => {
  let res = '', pos = 0
  const max = Math.max(a.length, b.length)
  if (max === a.length) {
    b = b.padStart(max, 0)
  } else {
    a = a.padStart(max, 0)
  }

  for (let i = max; i > 0; i--) {
    const sum = Number(a[i - 1]) + Number(b[i - 1]) + pos
    res = (sum % 2) + res
    pos = Math.floor(sum / 2)
  }
  res = (pos ? '1' : '') + res
  return res
}
