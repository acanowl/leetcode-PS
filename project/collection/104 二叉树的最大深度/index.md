## 二叉树的最大深度

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

**说明:** 叶子节点是指没有子节点的节点。

**示例 1：**

给定二叉树 `[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

### 解法

解题思路：迭代，将 `null` 当成一个标识，每循环完一层就在后面添加 `null`，计数加一

```js
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
var maxDepth = function (root) {
	let arr = [],
		count = 0
	if (!root) return count

	arr.push(root, null)
	while (arr.length) {
		const cur = arr.shift()
		if (!cur) {
			count++
			// 避免出现死循环
			if (!arr.length) break
			arr.push(null)
			continue
		}
		cur.left && arr.push(cur.left)
		cur.right && arr.push(cur.right)
	}
	return count
}
```

解题思路：递归

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (!root) return 0
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
```
