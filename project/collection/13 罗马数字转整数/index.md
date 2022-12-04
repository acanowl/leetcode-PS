## 罗马数字转整数

罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 `2` 写做  `II` ，即为两个并列的 1 。`12` 写做  `XII` ，即为  `X` + `II` 。 `27` 写做   `XXVII`, 即为  `XX` + `V` + `II` 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做  `IIII`，而是  `IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为  `IX`。这个特殊的规则只适用于以下六种情况：

`I`  可以放在  `V` (5) 和  `X` (10) 的左边，来表示 4 和 9。
`X`  可以放在  `L` (50) 和  `C` (100) 的左边，来表示 40 和  90。 
`C`  可以放在  `D` (500) 和  `M` (1000) 的左边，来表示  400 和  900。
给定一个罗马数字，将其转换成整数。

**示例 1：**

```
输入: s = "III"
输出: 3
```

**示例 2：**

```
输入: s = "IV"
输出: 4
```

**示例 3：**

```
输入: s = "IX"
输出: 9
```

**示例 4：**

```
输入: s = "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

**示例 5：**

```
输入: s = "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

**提示：**

- `1 <= s.length <= 15`
- `s` 仅含字符 `('I', 'V', 'X', 'L', 'C', 'D', 'M')`
- 题目数据保证 `s` 是一个有效的罗马数字，且表示整数在范围 `[1, 3999]` 内
- 题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
- `IL` 和 `IM` 这样的例子并不符合题目要求，`49` 应该写作 `XLIX`，`999` 应该写作 `CMXCIX` 。

### 解法

解题思路：罗马数字小的数字在大的数字左边时，相当于减少小的数字

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let cout = 0
  let maps = new Map()
  maps.set('I', 1)
  maps.set('V', 5)
  maps.set('X', 10)
  maps.set('L', 50)
  maps.set('C', 100)
  maps.set('D', 500)
  maps.set('M', 1000)
  for (let i = 0; i < s.length - 1; i++) {
    const cur = maps.get(s[i])
    const next = maps.get(s[i + 1])
    if (cur < next) {
      cout -= cur
    } else {
      cout += cur
    }
  }
  cout += maps.get(s[s.length - 1])
  return cout
}
```

解题思路：与解法 1 思路相同

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let cout = 0
  let maps = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  for (let i = 0; i < s.length - 1; i++) {
    const cur = maps[s[i]]
    const next = maps[s[i + 1]]
    if (cur < next) {
      cout -= cur
    } else {
      cout += cur
    }
  }
  cout += maps[s[s.length - 1]]
  return cout
}
```

解题思路：与解法 1 思路相同，区别在于把特殊情况替换，循环相加

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let cout = 0
  let maps = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    a: 4,
    b: 9,
    c: 40,
    d: 90,
    e: 400,
    f: 900
  }
  s = s
    .replace('IV', 'a')
    .replace('IX', 'b')
    .replace('XL', 'c')
    .replace('XC', 'd')
    .replace('CD', 'e')
    .replace('CM', 'f')
  for (let i = 0; i < s.length; i++) {
    cout += maps[s[i]]
  }
  return cout
}
```

解题思路：罗马数字组成是由大数排到小数，由右往左循环，`I`有可能为`IV`或者`I`，如果`cout >= 5`，则必定存在`V`，`cout >= 5 ? -1 : 1`， 其他特殊情况同理

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let cout = 0
  for (let i = s.length - 1; i >= 0; i--) {
    const c = s[i]
    switch (c) {
      case 'I':
        cout += cout >= 5 ? -1 : 1
        break
      case 'V':
        cout += 5
        break
      case 'X':
        cout += 10 * (cout >= 50 ? -1 : 1)
        break
      case 'L':
        cout += 50
        break
      case 'C':
        cout += 100 * (cout >= 500 ? -1 : 1)
        break
      case 'D':
        cout += 500
        break
      case 'M':
        cout += 1000
        break
    }
  }
  return cout
}
```
