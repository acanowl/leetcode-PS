## 有效的括号

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。

**示例 1：**

```
输入：s = "()"
输出：true
```

**示例 2：**

```
输入：s = "()[]{}"
输出：true
```

**示例 3：**

```
输入：s = "(]"
输出：false
```

**提示：**

- `1 <= s.length <= 104`
- `s` 仅由括号 `'()[]{}'` 组成

### 解法

解题思路：栈，先入后出，类似消消乐的思路，如果只有一个长度则返回 `false`，如果是左半边则放入栈，下一个如果是右半边则根据字典判断是否是相同的右半边，如果是则移除栈里的最后一个，不是则返回 `false`

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const maps = { ")": "(", "]": "[", "}": "{" };
  let stack = [];
  if (s.length === 1) return false;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === "(" || cur === "{" || cur === "[") {
      stack.push(cur);
    } else {
      if (stack[stack.length - 1] === maps[cur]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
```
