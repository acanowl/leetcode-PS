## 将有序数组转换为二叉搜索树

给你一个整数数组 `nums` ，其中元素已经按 **升序** 排列，请你将其转换为一棵 **高度平衡** 二叉搜索树。

**高度平衡** 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

**示例 1：**

```
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
```

**示例 2：**

```
输入：nums = [1,3]
输出：[3,1]
解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
```

**提示：**

- `1 <= nums.length <= 10**4`
- `-10**4 <= nums[i] <= 10**4`
- `nums` 按 **严格递增** 顺序排列

### 解法

解题思路：递归；二叉搜索树所有左子节点都小于根节点，右子节点都大于根节点，获取中间值当 `root`，拆分除 `root` 外的两个数组， 重复此操作

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null

  const mid = Math.floor(nums.length / 2)
  let root = new TreeNode(nums[mid])

  let leftNums = nums.slice(0, mid)
  let rightNums = nums.slice(mid + 1, nums.length)

  if (leftNums.length !== 0) {
    root.left = sortedArrayToBST(leftNums)
  }
  if (rightNums.length !== 0) {
    root.right = sortedArrayToBST(rightNums)
  }
  return root
}
```
