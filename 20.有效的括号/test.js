var isValid = function (s) {
  const maps = { ')': '(', ']': '[', '}': '{' }
  let stack = []
  // 如果长度只有1，则无法形成完整的括号
  if (s.length === 1) return false
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === '(' || cur === '{' || cur === '[') {
      stack.push(cur)
    } else {
      if (stack[stack.length - 1] === maps[cur]) {
        stack.pop()
      } else {
        // "([)]"
        return false
      }
    }
  }
  return stack.length === 0
};

// const res = isValid("([]){}")
// const res = isValid("}")
// const res = isValid(")(){}")
// console.log(res, 'res')