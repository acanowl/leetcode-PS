## 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

**请必须使用时间复杂度为 `O(log n)` 的算法。**

**示例 1：**

```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

**示例 2：**

```
输入: nums = [1,3,5,6], target = 2
输出: 1
```

**示例 3：**

```
输入: nums = [1,3,5,6], target = 7
输出: 4
```

**提示：**

- `1 <= nums.length <= 10**4`
- `-10**4 <= nums[i] <= 10**4`
- `nums` 为 **无重复元素** 的 **升序** 排列数组
- `-10**4 <= target <= 10**4`

### 解法

解题思路：题目要求时间复杂度为 `O(log n)` 的算法，所以考虑用二分查法。根据`if`判断可知, `start` 左边值一直小于 `target`，`end` 右边值一直大于 `target`，`mid` 为中间线，当 `nums[mid]` 小于等于 `target` 时，`start = mid + 1`，所以 `start` 为最终答案

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] <= target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return start
}
```

解题思路：不考虑时间复杂度为 `O(log n)` 的算法，可以用快慢指针

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let slow = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      slow++
    } else {
      break
    }
  }
  return slow
}
```

解题思路：不考虑时间复杂度为 `O(log n)` 的算法，直接 `while` 循环

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] < target) {
      i++
    } else {
      break
    }
  }
  return i
}
```
