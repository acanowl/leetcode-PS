## 统计匹配检索规则的物品数量

给你一个数组 `items` ，其中  `items[i] = [typei, colori, namei]` ，描述第 `i` 件物品的类型、颜色以及名称。

另给你一条由两个字符串  `ruleKey` 和 `ruleValue` 表示的检索规则。

如果第 i 件物品能满足下述条件之一，则认为该物品与给定的检索规则 匹配 ：

- `ruleKey == "type"` 且 `ruleValue == typei` 。
- `ruleKey == "color"` 且 `ruleValue == colori` 。
- `ruleKey == "name"` 且 `ruleValue == namei` 。

统计并返回 **匹配检索规则的物品数量** 。

**示例 1：**

```
输入：items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
输出：1
解释：只有一件物品匹配检索规则，这件物品是 ["computer","silver","lenovo"] 。
```

**示例 2：**

```
输入：items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
输出：2
解释：只有两件物品匹配检索规则，这两件物品分别是 ["phone","blue","pixel"] 和 ["phone","gold","iphone"] 。注意，["computer","silver","phone"] 未匹配检索规则。
```

**提示：**

- `1 <= items.length <= 10**4`
- `1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10`
- `ruleKey` 等于 `"type"`、`"color"` 或 `"name"`
- 所有字符串仅由小写字母组成

### 解法

解题思路：Array 内置函数，将二维数组转换为一维数组对象的形式，通过 filter 筛选出对应数组

```js
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const itemMaps = items.map(([type, color, name]) => ({ type, color, name }))
  return itemMaps.filter(item => item[ruleKey] === ruleValue).length
}
```

解题思路：Array 内置函数，解法 1 优化，将类型转换为索引的形式，再通过 filter 筛选

```js
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const ruleIndex = { type: 0, color: 1, name: 2 }[ruleKey]
  return items.filter(item => item[ruleIndex] === ruleValue).length
}
```

解题思路：循环，类似解法 2

```js
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const ruleIndex = { type: 0, color: 1, name: 2 }[ruleKey]
  let num = 0
  for (let item of items) {
    if (item[ruleIndex] === ruleValue) {
      num++
    }
  }
  return num
}
```
