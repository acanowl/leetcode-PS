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
 * @return {number}
 */
export const maxDepth_1 = root => {
	let arr = [],
		count = 0
	if (!root) return count

	arr.push(root, null)
	while (arr.length) {
		const cur = arr.shift()
		if (!cur) {
			count++
			if (!arr.length) break
			arr.push(null)
			continue
		}
		cur.left && arr.push(cur.left)
		cur.right && arr.push(cur.right)
	}
	return count
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth_2 = root => {
	if (!root) return 0
	return 1 + Math.max(maxDepth_2(root.left), maxDepth_2(root.right))
}
