## 杨辉三角

给定一个非负整数 `numRows`，生成「杨辉三角」的前 `numRows` 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

**示例 1：**

```
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

**示例 2：**

```
输入: numRows = 1
输出: [[1]]
```

**提示：**

- `1 <= numRows <= 30`

**进阶：**

### 解法

解题思路：模拟

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = []
  for (let i = 0; i < numRows; i++) {
    const arr = new Array(i + 1).fill(1)
    const prev = res[i - 1]
    for (let j = 1; j < arr.length - 1; j++) {
      arr[j] = prev[j - 1] + prev[j]
    }
    res.push(arr)
  }
  return res
}
```
