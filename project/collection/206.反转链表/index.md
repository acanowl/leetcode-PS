## 反转链表

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

**示例 1：**

```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

**示例 2：**

```
输入：head = [1,2]
输出：[2,1]
```

**示例 3：**

```
输入：head = []
输出：[]
```

**提示：**

- 链表中节点的数目范围是 `[0, 5000]`
- `-5000 <= Node.val <= 5000`

**进阶：** 链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

### 解法

解题思路：递归; 思路 `cur.next = prev` ==> `cur = prev.next` ==> `prev.next.next = prev`, 由于 `cur <=> prev` 会形成环 需要将 `cur` 指向空
结束条件：`head` 或者 `head.next` 为空 则返回 `head`

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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head
  let prev = reverseList(head.next)
  // prev => prev.next
  head.next.next = head
  head.next = null
  return prev
}
```

解题思路：迭代；思路 将 `head.next` 赋予 `next` , 即 `next = head.next`; 改变 `head` 指向， `head.next = prev = null`;

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur // prev = 1 => null
    cur = next // cur => [ 2, 3 ... ]
  }
  return prev
}
```
