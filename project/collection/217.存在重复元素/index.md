## 存在重复元素

给你一个整数数组 `nums` 。如果任一值在数组中出现 **至少两次** ，返回 `true` ；如果数组中每个元素互不相同，返回 `false` 。

**示例 1：**

```
输入：nums = [1,2,3,1]
输出：true
```

**示例 2：**

```
输入：nums = [1,2,3,4]
输出：false
```

**示例 3：**

```
输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true
```

**提示：**

- `1 <= nums.length <= 10**5`
- `-10**9 <= nums[i] <= 10**9`

### 解法

解题思路：排序；排序后，如果与下一个值相同，则存在重复元素

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
}
```

解题思路：Set; 去重后与原有数组长度进行比较，如果不相同则证明存在重复元素

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length
}
```

解题思路：哈希; 循环，把值存起来，如果有相同则返回 true

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true
    map.set(nums[i], nums[i])
  }
  return false
}
```
