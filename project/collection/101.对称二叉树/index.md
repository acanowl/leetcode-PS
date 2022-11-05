## 对称二叉树

给你一个二叉树的根节点 `root` ， 检查它是否轴对称。

**示例 1：**

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

**示例 2：**

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

**提示：**

- 树中节点数目在范围 `[1, 1000]` 内
- `-100 <= Node.val <= 100`

**进阶：** 你可以运用递归和迭代两种方法解决这个问题吗？

### 解法

解题思路：迭代

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
var isSymmetric = function (root) {
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
```

解题思路：递归

```js
var isSymmetric = function (root) {
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
```
