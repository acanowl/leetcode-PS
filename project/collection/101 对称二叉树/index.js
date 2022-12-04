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
  let arr = []
  arr.push(root.left, root.right)

  while (arr.length) {
    let leftNode = arr.shift(),
      rightNode = arr.shift()

    if (leftNode === null && rightNode === null) continue
    if (leftNode === null || rightNode === null) return false
    if (leftNode.val !== rightNode.val) return false

    arr.push(leftNode.left, rightNode.right)
    arr.push(leftNode.right, rightNode.left)
  }
  return true
}

// 递归
export const inorderTraversal_2 = root => {
  if (!root) return false
  const isMirror = (leftNode, rightNode) => {
    if (leftNode === null && rightNode === null) return true
    if (leftNode === null || rightNode === null) return false
    if (leftNode.val !== rightNode.val) return false

    return (
      isMirror(leftNode.left, rightNode.right) &&
      isMirror(leftNode.right, rightNode.left)
    )
  }
  return isMirror(root.left, root.right)
}
