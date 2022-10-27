## 二进制求和

给你两个二进制字符串 `a` 和 `b` ，以二进制字符串的形式返回它们的和。

**示例1：**
```
输入:a = "11", b = "1"
输出："100"
```

**示例2：**
```
输入：a = "1010", b = "1011"
输出："10101"
```

**提示：**

+ `1 <= a.length, b.length <= 104`
+ `a` 和 `b` 仅由字符 `'0'` 或 `'1'` 组成
+ 字符串如果不是 `"0"` ，就不含前导零

### 解法

解题思路：

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  
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
