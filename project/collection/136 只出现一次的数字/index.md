## 只出现一次的数字

给你一个 **非空** 整数数组 `nums` ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

**示例 1：**

```
输入：nums = [2,2,1]
输出：1
```

**示例 2：**

```
输入：nums = [4,1,2,1,2]
输出：4
```

**示例 3：**

```
输入：nums = [1]
输出：1
```

**提示：**

- `1 <= nums.length <= 3 * 10**4`
- `-3 * 10**4 <= nums[i] <= 3 * 10**4`
- 除了某个元素只出现一次以外，其余每个元素均出现两次。

### 解法

解题思路：栈；

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let arr = []
  arr.push(nums[0])
  for (let i = 1; i < nums.length; i++) {
    const idx = arr.indexOf(nums[i])
    if (idx !== -1) {
      arr.splice(idx, 1)
    } else {
      arr.push(nums[i])
    }
  }
  return arr[0]
}
```

解题思路：排序循环；从小到大排序，相邻两个必有相等，不等则返回当前，相对则跳过下一个继续循环；

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
}
```

解题思路：**异或** 位运算；异或运算满足交换律，`a^b^a=a^a^b=b`,（不看题解没有往这方面想）

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
}
```
