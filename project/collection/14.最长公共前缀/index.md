## 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

**示例1：**
```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

**示例2：**
```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

**提示：**

+ 1 <= strs.length <= 200
+ 0 <= strs[i].length <= 200
+ strs[i] 仅由小写英文字母组成

### 解法

解题思路：两两对比，for循环如果不相同则break结束循环，返回相同公共前缀的字符串与下一个字符串对比。

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const getCommonPrefix = (x, y) => {
    let str = ''
    const len = Math.min(x.length, y.length)
    for (let i = 0; i < len; i++) {
      if (x[i] === y[i]) str += x[i]
      else break
    }
    return str
  }
  return strs.reduce(getCommonPrefix)
};
```

解题思路：数组按字符串长短从短到长排序，以第一个字符串为对比值，for循环进行判断第一个是否存在对比值，如果不存在则i--进行重新循环

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length)
  let cur = strs[0]
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].indexOf(cur) !== 0) {
      i--
      cur = cur.substring(0, cur.length - 1)
    }
  }
  return cur
};
```

解题思路：暴力循环，数组按字符串长短从短到长排序，以第一个字符串为对比值，对比每一个字符串是否相同，不同则将对比值减少一位

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length);
  let str = strs[0] || '';
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (strs[i][j] !== str[j]) {
        if (j === 0) return ''
        str = str.substr(0, j);
      }
    }
  }
  return str;
};
```
