## 删除排序链表中的重复元素

给定一个已排序的链表的头 `head` ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

**示例1：**
```
输入：head = [1,1,2]
输出：[1,2]
```

**示例2：**
```
输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

**提示：**

+ 链表中节点数目在范围 `[0, 300]` 内
+ `-100 <= Node.val <= 100`
+ 题目数据保证链表已经按升序 排列

**进阶：** 

### 解法

解题思路：链表，新建一个链表 `head`，通过改变 `prev` 的指向改变 `next` 指向，由于 `val` 存在负数情况，在此不建议用该方法

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let news = new ListNode(NaN)
  let prev = news
  while (head) {
    if (prev.val !== head.val) {
      prev.next = head // 1 pre => -1 1 1 2 3 3  news => -1 1 1 2 3 3
      prev = prev.next // 1 pre => 1 1 2 3 3
    } else {
      prev.next = head.next
    }
    head = head.next // 1 head => 1 2 3 3 // 2 head => 2 3 3
  }
  return news.next
}
```

解题思路：链表，为解法1的优化版本

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head

  let prev = head // 1 1 2 3 3
  while (prev.next) {
    if (prev.val === prev.next.val) {
      prev.next = prev.next.next // prev 1 2 3 3
    } else {
      prev = prev.next // prev 2 3 3
    }
  }
  return head
}
```
