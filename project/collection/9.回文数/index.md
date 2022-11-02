## 回文数

给你一个整数 `x` ，如果 `x` 是一个回文整数，返回 `true` ；否则，返回 `false` 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

+ 例如，`121` 是回文，而 `123` 不是。

**示例1：**
```
输入：x = 121
输出：true
```

**示例2：**
```
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例3：**
```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

**提示：**

+ -231 <= x <= 231 - 1

**进阶：** 你能不将整数转为字符串来解决这个问题吗？

### 解法

解题思路：数字转字符串，字符串转数组，反转数组转换字符串，跟原字符串进行判断

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const sx = `${x}`
  return sx.split('').reverse().join('') === sx
};
```

解题思路：循环反转字符串，跟原字符串进行判断

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const stringX = x + ''
  let newx = ''
  for(let i = stringX.length -1 ; i>= 0; i--) {
    newx += stringX[i]
  }
  return stringX === newx
};
```

解题思路：双指针，第一个与最后一个进行对比

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString()
  let xlen = x.length
  for (let i = 0; i < xlen / 2; i++) {
    if (x[i] !== x[xlen - i - 1]) return false
  }
  return true
};
```

解题思路：类比字符串reverse，数字也可以进行反转，反转的主要思想是，以10为除数，将num取余得到的数字作为后续的最高位

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let n = 10 ** Math.floor(Math.log10(x));
  while (n > 1 && x > 0) {
    if (Math.floor(x / n) !== x % 10) return false;
    x = Math.floor((x % n) / 10);
    n /= 100;
  }
  return true;
};
```