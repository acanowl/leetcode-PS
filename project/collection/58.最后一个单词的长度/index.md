## 最后一个单词的长度

给你一个字符串 `s`，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 **最后一个** 单词的长度。

**单词** 是指仅由字母组成、不包含任何空格字符的最大子字符串。

**示例 1：**

```
输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。
```

**示例 2：**

```
输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。
```

**示例 3：**

```
输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。
```

**提示：**

- `1 <= s.length <= 10**4`
- `s` 仅有英文字母和空格 `' '` 组成
- `s` 中至少存在一个单词

### 解法

解题思路：正则表达式，匹配多个字母组成的单词，获取数组最后一位

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const wordList = s.match(/\w+/g)
  return wordList[wordList.length - 1].length
}
```

解题思路：反向循环，设置一个变量 `nums` 初始值为 `0`，当变量 `nums` 为 `0` 且 `s[i]` 不为空时，变量 `nums` 加一，当变量 `nums` 不为 `0` 且 `s[i]` 为空时，终止循环，返回变量 `nums`

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let nums = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (nums > 0 && s[i] === ' ') {
      break
    }
    if (s[i] !== ' ') {
      nums++
    }
  }
  return nums
}
```

解题思路：题解，反向循环，思路同解法 2

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let index = s.length - 1
  // 该循环将所以移到右侧空格左侧
  while (s[index] === ' ') {
    index--
  }
  let wordLength = 0
  // index >= 0 边界处理，且不等于 ' '，长度加一
  while (index >= 0 && s[index] !== ' ') {
    wordLength++
    index--
  }
  return wordLength
}
```
