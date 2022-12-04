## 卡车上的最大单元数

请你将一些箱子装在 **一辆卡车** 上。给你一个二维数组 `boxTypes` ，其中 `boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]` ：

- `numberOfBoxes(i)` 是类型 `i` 的箱子的数量。
- `numberOfUnitsPerBox(i)` 是类型 `i` 每个箱子可以装载的单元数量。
  整数 `truckSize` 表示卡车上可以装载 **箱子** 的 最大数量 。只要箱子数量不超过 `truckSize` ，你就可以选择任意箱子装到卡车上。

返回卡车可以装载 **单元** 的 **最大** 总数。

**示例 1：**

```
输入：boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
输出：8
解释：箱子的情况如下：
- 1 个第一类的箱子，里面含 3 个单元。
- 2 个第二类的箱子，每个里面含 2 个单元。
- 3 个第三类的箱子，每个里面含 1 个单元。
可以选择第一类和第二类的所有箱子，以及第三类的一个箱子。
单元总数 = (1 * 3) + (2 * 2) + (1 * 1) = 8
```

**示例 2：**

```
输入：boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
输出：91
```

**示例 3：**

```
输入：boxTypes = [[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], truckSize = 35
输出：76
```

**提示：**

- `1 <= boxTypes.length <= 1000`
- `1 <= numberOfBoxes(i), numberOfUnitsPerBox(i) <= 1000`
- `1 <= truckSize <= 10**6`

### 解法

解题思路：模拟；由于只限制数量，所以将 `boxTypes` 按值从大到小排序，逐个相加，超过 `truckSize` 则返回

```js
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort(([a1, b1], [a2, b2]) => b2 - b1)

  return boxTypes.reduce((count, [num, val]) => {
    let nums = num
    if (truckSize - num < 0) {
      nums = truckSize
      truckSize = 0
    } else {
      truckSize = truckSize - num
    }
    return count + nums * val
  }, 0)
}
```

解题思路：同 1

```js
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort(([a1, b1], [a2, b2]) => b2 - b1)

  let count = 0,
    i = 0,
    result = 0
  while (count < truckSize) {
    if (!boxTypes[i]) break
    let nums = boxTypes[i][0],
      val = boxTypes[i][1]
    if (count + nums < truckSize) {
      count += nums
      result += nums * val
      i++
    } else {
      result += (truckSize - count) * val
      break
    }
  }
  return result
}
```
