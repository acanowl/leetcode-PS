## x 的平方根

给你一个非负整数 `x` ，计算并返回 `x` 的 **算术平方根** 。

由于返回类型是整数，结果只保留 **整数部分** ，小数部分将被 **舍去** 。

**注意：**不允许使用任何内置指数函数和算符，例如 `pow(x, 0.5)` 或者 `x ** 0.5` 。

**示例1：**
```
输入：x = 4
输出：2
```

**示例2：**
```
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```

**提示：**

+ `0 <= x <= 2**31 - 1`

### 解法

解题思路：循环，平方根最大是`x`的一半，循环相乘，若大于则取前一位，相等则取当前，小于不处理继续循环

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  const len = parseInt(x / 2) + 1
  for (let i = 0; i <= len; i++) {
    if (i * i > x) {
      return i - 1
    }
    if (i * i === x) {
      return i
    }
  }
};
```

解题思路：二分查法，思路与解法1类似，获取中间值，相乘判断前一位是否小于等于后一位

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0, right = x
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (mid * mid <= x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
};
```
