## 二叉树的最小深度

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明：**叶子节点是指没有子节点的节点。

**示例 1：**

```
输入：root = [3,9,20,null,null,15,7]
输出：2

```

**示例 2：**

```
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5

```

**提示：**

- 树中节点数的范围在 `[0, 10**5]` 内
- `-1000 <= Node.val <= 1000`

### 解法

解题思路：迭代，广度优先遍历，类似获取最大深度，每一层遍历一次，越往下层数只会越大，所以当左右子节点为空，则结束遍历

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
var minDepth = function (root) {
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
```

解题思路：递归；分三种情况 1、如果不存在则返回 0 如果都存在则返回 1 ；2、当左节点或右节点有一个为空时，取相反节点深度 + 1；3、左右不为空时，取最小值+1

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  const leftMin = minDepth(root.left)
  const rightMin = minDepth(root.right)
  if (!root.left || !root.right) return leftMin + rightMin + 1
  return Math.min(leftMin, rightMin) + 1
}
```

解题思路：递归 2，基于解法二思路进行方法优化

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  else if (!root.left) return minDepth(root.right) + 1
  else if (!root.right) return minDepth(root.left) + 1
  else return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}
```
