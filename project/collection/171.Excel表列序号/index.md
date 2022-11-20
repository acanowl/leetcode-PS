## Excel 表列序号

给你一个字符串 `columnTitle` ，表示 **Excel** 表格中的列名称。返回 **该列名称对应的列序号** 。

例如：

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

**示例 1：**

```
输入: columnTitle = "A"
输出: 1
```

**示例 2：**

```
输入: columnTitle = "AB"
输出: 28
```

**示例 3：**

```
输入: columnTitle = "ZY"
输出: 701
```

**提示：**

- `1 <= columnTitle.length <= 7`
- `columnTitle` 仅由大写英文组成
- `columnTitle` 在范围 `["A", "FXSHRXW"]` 内

### 解法

解题思路：数学；从右到左每个字母代表的数值是单个字母的序号乘以 `26` 的 `0次方`， `1次方`，`2次方` ...

```js
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let CODE_A = 64
  let EN_LEN = 26

  // 后往前
  let count = 0
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    let nums = columnTitle[i].charCodeAt() - CODE_A
    let val = nums * EN_LEN ** (columnTitle.length - i - 1)
    count = count + val
  }
  return count

  // 前往后
  // for (let i = 0; i < columnTitle.length; i++) {
  //   let nums = columnTitle[i].charCodeAt() - CODE_A
  //   let val = nums * EN_LEN ** (columnTitle.length - i - 1)
  //   count = count + val
  // }
  // return count
}
```
