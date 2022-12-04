## 检查数组是否经排序和轮转得到

给你一个数组 `nums` `。nums` 的源数组中，所有元素与 `nums` 相同，但按非递减顺序排列。

如果 `nums` 能够由源数组轮转若干位置（包括 0 个位置）得到，则返回 `true` ；否则，返回 `false` 。

源数组中可能存在 **重复项** 。

**注意：**我们称数组 `A` 在轮转 `x` 个位置后得到长度相同的数组 `B` ，当它们满足 `A[i] == B[(i+x) % A.length]` ，其中 `%` 为取余运算。

**示例 1：**

```
输入：nums = [3,4,5,1,2]
输出：true
解释：[1,2,3,4,5] 为有序的源数组。
可以轮转 x = 3 个位置，使新数组从值为 3 的元素开始：[3,4,5,1,2] 。
```

**示例 2：**

```
输入：nums = [2,1,3,4]
输出：false
解释：源数组无法经轮转得到 nums 。
```

**示例 3：**

```
输入：nums = [1,2,3]
输出：true
解释：[1,2,3] 为有序的源数组。
可以轮转 x = 0 个位置（即不轮转）得到 nums 。
```

**提示：**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

### 解法

解题思路：循环

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let index = 0,
    len = nums.length
  for (let i = 1; i < len; i++) {
    if (nums[i] < nums[i - 1]) {
      index = i
      break
    }
  }
  // 如果为递减数组，则index没有赋值，直接返回
  if (index === 0) return true
  // 如果为非递减数组，则从上一步索引位置做相同操作
  for (let j = index + 1; j < len; j++) {
    if (nums[j] < nums[j - 1]) return false
  }
  // 如果都是递减数组，最后则判断数组第一个值是不是小于最后一个值，是则为false
  // 例如 2 1 3 4 如果轮转，则会变成 1 3 4 2，则不是递减数组
  return nums[0] >= nums[len - 1]
}
```

解题思路：循环；优化解法一，根据中断次数来判断

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  // 根据中断次数来判断
  let count = 0,
    len = nums.length
  for (let i = 0; i < len; i++) {
    // 由于需要满足递减和轮转，中断最多1次
    if (nums[i] > nums[i + 1]) count++
  }
  // 如果是递减数组则count为0，直接返回
  if (count === 0) return true
  // 如果第一个值小于最后一个值，则表示不是递减，中断次数加1
  if (nums[0] < nums[len - 1]) count++
  return count <= 1
}
```
