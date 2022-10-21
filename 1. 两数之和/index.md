## 两数之和

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例1：**
```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**示例2：**
```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

**示例3：**
```
输入：nums = [3,3], target = 6
输出：[0,1]
```

**提示：**

+ 2 <= nums.length <= 104
+ -109 <= nums[i] <= 109
+ -109 <= target <= 109
+ 只会存在一个有效答案

**进阶：** 你可以想出一个时间复杂度小于 O(n2) 的算法吗？

### 解法

解题思路：哈希表，判断target - nums[i]是否存在，存在则返回target - nums[i] 和 i；不存在则把当前键值存入Map

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let maps = new Map()
  for (let i = 0; i < nums.length; i++) {
    const tar = target - nums[i]
    if (maps.has(tar)) {
      return [maps.get(tar), i]
    }
    maps.set(nums[i], i)
  }
  return [-1, -1]
};
```

解题思路：暴力循环

```js
var twoSum = function(nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
};
```
