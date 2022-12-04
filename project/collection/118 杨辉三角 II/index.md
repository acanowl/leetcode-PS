## 杨辉三角 II

给定一个非负索引 `rowIndex`，返回「杨辉三角」的第 `rowIndex` 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

**示例 1：**

```
输入: rowIndex = 3
输出: [1,3,3,1]
```

**示例 2：**

```
输入: rowIndex = 0
输出: [1]
```

**示例 3：**

```
输入: rowIndex = 1
输出: [1,1]
```

**提示：**

- `0 <= rowIndex <= 33`

**进阶：** 你可以优化你的算法到 `O(rowIndex)` 空间复杂度吗？

### 解法

解题思路：获取所有数组后返回第 `rowIndex` 个

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = []
  for (let i = 0; i < rowIndex + 1; i++) {
    const arr = new Array(i + 1).fill(1)
    const prev = res[i - 1]
    for (let j = 1; j < arr.length - 1; j++) {
      arr[j] = prev[j] + prev[j - 1]
    }
    res.push(arr)
  }
  return res[rowIndex]
}
```
