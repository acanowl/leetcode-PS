## 数组元素积的符号

已知函数  `signFunc(x)` 将会根据 `x` 的正负返回特定值：

- 如果 `x` 是正数，返回 `1` 。
- 如果 `x` 是负数，返回 `-1` 。
- 如果 `x` 是等于 `0` ，返回 `0` 。

给你一个整数数组 `nums` 。令 `product` 为数组 `nums` 中所有元素值的乘积。

返回 `signFunc(product)` 。

**示例 1：**

```
输入：nums = [-1,-2,-3,-4,3,2,1]
输出：1
解释：数组中所有值的乘积是 144 ，且 signFunc(144) = 1
```

**示例 2：**

```
输入：nums = [1,5,0,2,-3]
输出：0
解释：数组中所有值的乘积是 0 ，且 signFunc(0) = 0
```

**示例 3：**

```
输入：nums = [-1,1,-1,1,-1]
输出：-1
解释：数组中所有值的乘积是 -1 ，且 signFunc(-1) = -1
```

**提示：**

- `1 <= nums.length <= 1000`
- `-100 <= nums[i] <= 100`

### 解法

解题思路：遍历，如果是 `0` 则终止循环，非 `0` 则判断是否小于 `0`，小于则乘 `-1` 否则乘 `1`

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      sign = 0
      break
    } else {
      sign *= nums[i] < 0 ? -1 : 1
    }
  }
  return sign
}
```

解题思路：遍历，思路与解法一类似，可取之处在于如果 `nums[i] < 0`，则将 `sign` 取反即可

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0
    }
    if (nums[i] < 0) {
      sign = -sign
    }
  }
  return sign
}
```
