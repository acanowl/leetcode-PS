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
 * @param {*} arr
 * @returns
 */
export const createBinaryTree = arr => {
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

/**
 * TODO
 * 克隆
 * @param {*} root
 * @returns
 */
export const deepCloneBinaryTree = root => {
	if (!root) return root

	let arr = [root]
	while (arr.length) {
		let cur = arr.shift()
		if (cur.left) {
			arr.push(cur.left)
		}
		if (cur.right) {
			arr.push(cur.right)
		}
	}
	// return newRoot
}
