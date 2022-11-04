## 二进制求和

给你两个二进制字符串 `a` 和 `b` ，以二进制字符串的形式返回它们的和。

**示例 1：**

```
输入:a = "11", b = "1"
输出："100"
```

**示例 2：**

```
输入：a = "1010", b = "1011"
输出："10101"
```

**提示：**

- `1 <= a.length, b.length <= 10**4`
- `a` 和 `b` 仅由字符 `'0'` 或 `'1'` 组成
- 字符串如果不是 `"0"` ，就不含前导零

### 解法

解题思路：循环，两数相加取余，获取结果最右数，如果存在进位数则加两数再循环, 通过除二获取进位数

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = '',
    pos = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = pos
    sum += i >= 0 ? parseInt(a[i]) : 0
    sum += j >= 0 ? parseInt(b[j]) : 0
    res = (sum % 2) + res
    pos = Math.floor(sum / 2)
  }
  res = (pos == 1 ? pos : '') + res
  return res
}
```

解题思路：模拟，获取最大长度，长度小的值前面补全 `0`，后循环逻辑与解法一大致

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = '',
    pos = 0
  const max = Math.max(a.length, b.length)
  if (max === a.length) {
    b = b.padStart(max, 0)
  } else {
    a = a.padStart(max, 0)
  }

  for (let i = max; i > 0; i--) {
    const sum = Number(a[i - 1]) + Number(b[i - 1]) + pos
    res = (sum % 2) + res
    pos = Math.floor(sum / 2)
  }
  res = (pos ? '1' : '') + res
  return res
}
```

解题思路：bigInt，不容易想到这个方法，`0b` 为二进制前缀，由于 `parseInt` 存在边界，所以用 `es10 BigInt`，但可能存在一定的兼容性，不太建议用该方法

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
}
```
