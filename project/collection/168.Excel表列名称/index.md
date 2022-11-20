## Excel 表列名称

给你一个整数 `columnNumber` ，返回它在 **Excel** 表中相对应的列名称。

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
输入：columnNumber = 1
输出："A"
```

**示例 2：**

```
输入：columnNumber = 28
输出："AB"
```

**示例 3：**

```
输入：columnNumber = 701
输出："ZY"
```

**示例 4：**

```
输入：columnNumber = 2147483647
输出："FXSHRXW"
```

**提示：**

- `1 <= columnNumber <= 2**31 - 1`

### 解法

解题思路：数学；通过取余获取最后一位数，再除于`26`，重复该操作

```js
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  // 0 - 65 => 1 - 64 => A - Z
  // const CODE_A = 64
  // const EN_LEN = 26
  // let res = ''
  // while (columnNumber) {
  //   let lastOne = columnNumber % EN_LEN
  //   // 如果余数为0证明被整除
  //   if (lastOne) {
  //     res = String.fromCharCode(lastOne + CODE_A) + res
  //   } else {
  //     res = 'Z' + res
  //     columnNumber--
  //   }
  //   // 优化 1
  //   // columnNumber--
  //   // res = String.fromCharCode((columnNumber % EN_LEN) + CODE_A) + res
  //   // columnNumber = Math.floor(columnNumber / EN_LEN)
  //   columnNumber = Math.floor(columnNumber / EN_LEN)
  // }
  // return res

  // 优化 2 CODE_A语义化 Array添加的方式比+=内存方面更优
  const CODE_A = 'A'.charCodeAt()
  const EN_LEN = 26
  let res = []
  while (columnNumber) {
    columnNumber--
    res.unshift(String.fromCharCode((columnNumber % EN_LEN) + CODE_A))
    columnNumber = Math.floor(columnNumber / EN_LEN)
  }
  return res.join('')
}
```

解题思路：递归；思路同解法 1

```js
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const CODE_A = 'A'.charCodeAt()
  const EN_LEN = 26
  let res = []
  const dpConvert = columnNumber => {
    if (!columnNumber) return
    columnNumber--
    res.unshift(String.fromCharCode((columnNumber % EN_LEN) + CODE_A))
    columnNumber = Math.floor(columnNumber / EN_LEN)
    dpConvert(columnNumber)
  }
  dpConvert(columnNumber)
  return res.join('')
}
```
