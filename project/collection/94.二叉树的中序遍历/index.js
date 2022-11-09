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
 * @return {number[]}
 */
export const inorderTraversal_1 = root => {
  let arr = [], res = []
  if (!root) return res
  while (root || arr.length) {
    while (root) {
      arr.push(root)
      root = root.left
    }
    root = arr.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}

export const inorderTraversal_2 = root => {
  let arr = []
  const traversal = root => {
    if (!root) return
    root.left && traversal(root.left)
    arr.push(root.val)
    root.right && traversal(root.right)
  }
  traversal(root)
  return arr
}
