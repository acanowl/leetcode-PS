## 相同的树

给你两棵二叉树的根节点 `p` 和 `q` ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

**示例1：**
```
输入：p = [1,2,3], q = [1,2,3]
输出：true
```

**示例2：**
```
输入：p = [1,2], q = [1,null,2]
输出：false
```

**示例3：**
```
输入：p = [1,2,1], q = [1,1,2]
输出：false
```

**提示：**

+ 两棵树上的节点数目都在范围 `[0, 100]` 内
+ `-10**4 <= Node.val <= 10**4`

### 解法

解题思路：递归

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }
  if (p.val !== q.val) {
    return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
```

解题思路：递归，解法1优化，内存消耗\执行耗时相差不多

```js
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 如果其中一个为null，返回为false，如果都是null，返回true
  if (p === null || q === null) return p === q
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
```

解题思路：转换为字符串进行对比，内存消耗相差不多，但执行耗时较长，不太推荐

```js
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return JSON.stringify(p) === JSON.stringify(q)
};
```
