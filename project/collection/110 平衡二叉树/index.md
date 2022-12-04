## 平衡二叉树

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

> 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

**示例 1：**

```
输入：root = [3,9,20,null,null,15,7]
输出：true
```

**示例 2：**

```
输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
```

**示例 3：**

```
输入：root = []
输出：true
```

**提示：**

- 树中的节点数在范围 `[0, 5000]` 内
- `-10**4 <= Node.val <= 10**4`

### 解法

解题思路：递归；利用后序遍历，获取左子树高度与右子树高度进行对比，Math.abs() > 1 则返回 false

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const OVER_NUM = -1
  const getHeight = root => {
    if (!root) return 0
    let leftHeight = getHeight(root.left)
    if (leftHeight === OVER_NUM) return OVER_NUM
    let rightHeight = getHeight(root.right)
    if (rightHeight === OVER_NUM) return OVER_NUM

    if (Math.abs(leftHeight - rightHeight) > 1) return OVER_NUM
    else return 1 + Math.max(leftHeight, rightHeight)
  }
  return !(getHeight(root) === OVER_NUM)
}
```

解题思路：迭代，TODO

```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {}
```
