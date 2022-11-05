/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
export const hasPathSum_1 = (root, targetSum) => {
  if (!root) return false

  let arr = [root]
  while (arr.length) {
    let cur = arr.pop()
    if (cur.left === null && cur.right === null) {
      // 成功直接返回，失败则继续查找
      if (cur.val === targetSum) return true
      continue
    }
    if (cur.left) {
      cur.left.val = cur.val + cur.left.val
      arr.push(cur.left)
    }
    if (cur.right) {
      cur.right.val = cur.val + cur.right.val
      arr.push(cur.right)
    }
  }
  // 所有情况都对比完没有结果则返回false
  return false
}

export const hasPathSum_2 = (root, targetSum) => {
  if (!root) return false
  root.val = targetSum - root.val

  const dpmut = root => {
    if (!root) return false
    if (root.left === null && root.right === null) {
      return root.val === 0
    }
    if (root.left) {
      root.left.val = root.val - root.left.val
    }
    if (root.right) {
      root.right.val = root.val - root.right.val
    }
    return dpmut(root.left) || dpmut(root.right)
  }
  return dpmut(root)
}
