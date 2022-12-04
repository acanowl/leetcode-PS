## 多数元素

给定一个大小为 `n` 的数组 `nums` ，返回其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**示例 1：**

```
输入：nums = [3,2,3]
输出：3
```

**示例 2：**

```
输入：nums = [2,2,1,1,1,2,2]
输出：2
```

**提示：**

- `n == nums.length`
- `1 <= n <= 5 * 10**4`
- `-10**9 <= nums[i] <= 10**9`

**进阶：**尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

### 解法

解题思路：Map 哈希

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const mid = Math.floor(nums.length / 2)
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const prev = map.get(nums[i])
    map.set(nums[i], prev ? prev + 1 : 1)
    const now = map.get(nums[i])
    if (now > mid) return nums[i]
  }
}
```

解题思路：排序，由于多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素，排序后，第 `[ n/2 ]` 位数就是最大的值

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}
```

解题思路：投票算法，类似抵消，剩下的必定是最多的

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0
  let result = null

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i]
    }
    count = count + (result === nums[i] ? 1 : -1)
  }
  return result
}
```
