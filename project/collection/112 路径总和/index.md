## 路径总和

给你二叉树的根节点 `root` 和一个表示目标和的整数 `targetSum` 。判断该树中是否存在 **根节点到叶子节点** 的路径，这条路径上所有节点值相加等于目标和 `targetSum` 。如果存在，返回 `true` ；否则，返回 `false` 。

叶子节点 是指没有子节点的节点。

**示例 1：**

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
解释：等于目标和的根节点到叶节点路径如上图所示。
```

**示例 2：**

```
输入：root = [1,2,3], targetSum = 5
输出：false
解释：树中存在两条根节点到叶子节点的路径：
(1 --> 2): 和为 3
(1 --> 3): 和为 4
不存在 sum = 5 的根节点到叶子节点的路径。
```

**示例 3：**

```
输入：root = [], targetSum = 0
输出：false
解释：由于树是空的，所以不存在根节点到叶子节点的路径。
```

**提示：**

- 树中节点的数目在范围 `[0, 5000]` 内
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

### 解法

解题思路：迭代，如果有子节点， 则把自身值加在子节点上，从头加到尾，如果匹配则返回true，没有则继续匹配，结束循环还没有结果则返回false

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
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
```

解题思路：递归，思路同解法一，两种方法均可用相加或相减的方式来获取

```js
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
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
```
