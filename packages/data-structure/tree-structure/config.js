/**
 * @description: 创建二叉树节点类
 * @param {*} val 节点值
 * @param {*} left 左节点值
 * @param {*} right 右节点值
 * @return {*}
 */
export class BinaryTreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/**
 * 数组转换成二叉树
 * @param  {...any} arg 
 * @returns 
 */
export const createBinaryTree = (...arg) => {
  const createFn = arr => {
    if (arr.length === 0 || !Array.isArray(arr)) return null

    let root = new BinaryTreeNode(arr.shift())
    let nodeQueue = [root]

    while (arr.length) {
      const cur = nodeQueue.shift()

      if (!arr.length) break

      const left = arr.shift()
      if (left) {
        const leftNode = new BinaryTreeNode(left)
        cur.left = leftNode
        nodeQueue.push(leftNode)
      }

      if (!arr.length) break

      const right = arr.shift()
      if (right) {
        const rightNode = new BinaryTreeNode(right)
        cur.right = rightNode
        nodeQueue.push(rightNode)
      }
    }
    return root
  }

  let binaryTreeLists = []
  for (let i = 0; i < arg.length; i++) {
    binaryTreeLists.push(createFn(arg[i]))
  }
  return binaryTreeLists.length === 1 ? binaryTreeLists[0] : binaryTreeLists
}

/**
 * 二叉树转换成数组
 * @param {*} root
 * @returns
 */
export const binaryTreeToArray = root => {
  if (!root) return null
  let arr = [root],
    res = []
  while (arr.length) {
    let cur = arr.shift()
    if (!cur) {
      res.push(null)
      continue
    }
    res.push(cur.val)
    if (cur.left || cur.right) {
      arr.push(cur.left)
      arr.push(cur.right)
    }
  }
  return res
}

/**
 * 二叉树深拷贝
 * @param  {...any} arg 
 * @returns 
 */
export const deepCloneBinaryTree = (...arg) => {
  const cloneFn = root => {
    const dpClone = root => {
      if (!root) return null
      let cur = new BinaryTreeNode(root.val)
      cur.left = dpClone(root.left)
      cur.right = dpClone(root.right)
      return cur
    }
    return dpClone(root)
  }

  let binaryTreeLists = []
  for (let i = 0; i < arg.length; i++) {
    binaryTreeLists.push(cloneFn(arg[i]))
  }
  return binaryTreeLists.length === 1 ? binaryTreeLists[0] : binaryTreeLists
}
