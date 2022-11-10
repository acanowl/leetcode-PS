export const minDepth_1 = root => {
  if (!root) return 0
  let arr = [root, null],
    count = 0
  while (arr.length) {
    let cur = arr.shift()
    if (!cur) {
      count++
      if (!arr.length) break
      arr.push(null)
      continue
    }
    // 左右都为空则中断
    if (!cur.left && !cur.right) break

    cur.left && arr.push(cur.left)
    cur.right && arr.push(cur.right)
  }
  return count + 1
}

export const minDepth_2 = root => {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  const leftMin = minDepth_2(root.left)
  const rightMin = minDepth_2(root.right)
  if (!root.left || !root.right) return leftMin + rightMin + 1
  return Math.min(leftMin, rightMin) + 1
}

export const minDepth_3 = root => {
  if (!root) return 0
  else if (!root.left) return minDepth_3(root.right) + 1
  else if (!root.right) return minDepth_3(root.left) + 1
  else return Math.min(minDepth_3(root.left), minDepth_3(root.right)) + 1
}
