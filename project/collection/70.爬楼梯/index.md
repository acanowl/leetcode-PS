## 爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**示例 1：**

```
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

**示例 2：**

```
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

**提示：**

- `1 <= n <= 45`

### 解法

解题思路：递归，斐波那契数列逻辑，即 `f(n) = f(n-1) + f(n-2)`，但该方法耗时较久，若数据足够大性能消耗较大（不推荐

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) return n
  return climbStairs(n - 1) + climbStairs(n - 2)
}
```

解题思路：状态压缩，类似窗口平移

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let pre = 1,
    cur = 1
  for (let i = 0; i <= n; i++) {
    let temp = cur
    cur = temp + pre
    pre = temp
  }
  return cur
}
```
