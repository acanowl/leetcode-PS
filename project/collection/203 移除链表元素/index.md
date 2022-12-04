## 移除链表元素

给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 **新的头节点** 。

**示例 1：**

```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

**示例 2：**

```
输入：head = [], val = 1
输出：[]
```

**示例 3：**

```
输入：head = [7,7,7,7], val = 7
输出：[]
```

**提示：**

- 列表中的节点数目在范围 `[0, 10**4]` 内
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

### 解法

解题思路：迭代; 相同则跳过，不同则丢进新节点

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return null
  let arr = [head],
    newhead = new ListNode(-1),
    prev = newhead
  while (arr.length) {
    const cur = arr.shift()
    if (cur.val !== val) {
      prev.next = new ListNode(cur.val)
      prev = prev.next
    }
    cur.next && arr.push(cur.next)
  }
  return newhead.next
}
```

解题思路：迭代；解法一优化，修改 `head` 指向

```js
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let node = new ListNode(-1)
  node.next = head
  head = node
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next || null
    } else {
      node = node.next
    }
  }
  return head.next
}
```

解题思路：递归

```js
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) return null
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
}
```
