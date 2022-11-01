## 检查两个字符串数组是否相等

给你两个字符串数组 `word1` 和 `word2` 。如果两个数组表示的字符串相同，返回 `true` ；否则，返回 `false` 。

**数组表示的字符串** 是由数组中的所有元素 **按顺序** 连接形成的字符串。

**示例1：**
```
输入：word1 = ["ab", "c"], word2 = ["a", "bc"]
输出：true
解释：
word1 表示的字符串为 "ab" + "c" -> "abc"
word2 表示的字符串为 "a" + "bc" -> "abc"
两个字符串相同，返回 true
```

**示例2：**
```
输入：word1 = ["a", "cb"], word2 = ["ab", "c"]
输出：false
```

**示例3：**
```
输入：word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
输出：true
```

**提示：**

+ `1 <= word1.length, word2.length <= 10**3`
+ `1 <= word1[i].length, word2[i].length <= 10**3`
+ `1 <= sum(word1[i].length), sum(word2[i].length) <= 10**3`
+ `word1[i]` 和 `word2[i]` 由小写字母组成

### 解法

解题思路：数组内置函数 `join`，转换成字符串

```js
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join('') === word2.join('')
};
```

解题思路：数组内置函数 `reduce`，转换成字符串

```js
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.reduce((x, y) => x + y, '') === word2.reduce((x, y) => x + y, '')
};
```

解题思路：循环 字符串拼接

```js
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let w1 = '', w2 = ''
  for(let item of word1) {
    w1 += item
  }
  for(let item of word2) {
    w2 += item
  }
  return w1 === w2
};
```
