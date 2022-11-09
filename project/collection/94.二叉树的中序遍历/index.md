## 二叉树的中序遍历

给定一个二叉树的根节点 `root` ，返回 它的 **中序** 遍历 。

**示例 1：**

```
输入：root = [1,null,2,3]
输出：[1,3,2]
```

**示例 2：**

```
输入：root = []
输出：[]
```

**示例 3：**

```
输入：root = [1]
输出：[1]
```

**提示：**

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

**进阶：** 递归算法很简单，你可以通过迭代算法完成吗？

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let arr = [], res = []
  if (!root) return res
  while (root || arr.length) {
    while (root) {
      arr.push(root)
      root = root.left
    }
    root = arr.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}
```

解题思路：递归

```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let arr = []
  const traversal = root => {
    if (!root) return
    root.left && traversal(root.left)
    arr.push(root.val)
    root.right && traversal(root.right)
  }
  traversal(root)
  return arr
}
```
