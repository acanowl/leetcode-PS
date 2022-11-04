## 最大重复子字符串

给你一个字符串 `sequence` ，如果字符串 `word` 连续重复 `k` 次形成的字符串是 `sequence` 的一个子字符串，那么单词 `word` 的 重复值为 `k` 。单词 `word` 的 **最大重复值** 是单词 `word` 在 `sequence` 中最大的重复值。如果 `word` 不是 `sequence` 的子串，那么重复值 `k` 为 `0` 。

给你一个字符串 `sequence` 和 `word` ，请你返回 **最大重复值** `k` 。

**示例1：**
```
输入：sequence = "ababc", word = "ab"
输出：2
解释："abab" 是 "ababc" 的子字符串。
```

**示例2：**
```
输入：sequence = "ababc", word = "ba"
输出：1
解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。
```

**示例3：**
```
输入：sequence = "ababc", word = "ac"
输出：0
解释："ac" 不是 "ababc" 的子字符串。
```

**提示：**

+ `1 <= sequence.length <= 100`
+ `1 <= word.length <= 100`
+ `sequence` 和 `word` 都只包含小写英文字母。

### 解法

解题思路：暴力循环，由于题目为获取 **连续重复** 的 `k`，所以可以通过累加 `word` 用内置函数来进行判断

```js
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let count = 0
  while (sequence.includes(word.repeat(count))) {
    count++
  }
  return count - 1
};
```

解题思路：简单枚举 + 动态规划，循环 `sequence`，通过 `word` 长度截取字符串进行对比，如果相同则计数加一，不等则返回上一次循环，计数清零，最后得到 **最大值**

```js
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let sl = sequence.length, wl = word.length, max = 0, count = 0, i = 0
  if (sl < wl) return max

  while (i < sl) {
    let cur = sequence.slice(i, i + wl)
    if (cur === word) {
      count++
      i = i + wl
      max = Math.max(max, count)
    } else {
      i += count > 0 ? 1 - wl : 1
      count = 0
    }
  }
  return max
};
```
