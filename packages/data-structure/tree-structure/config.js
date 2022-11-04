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
