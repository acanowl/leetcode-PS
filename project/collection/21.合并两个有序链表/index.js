import { ListNode } from '@ao/data-structure'

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const mergeTwoLists = (l1, l2) => {
  const prehead = new ListNode(-1)
  let prev = prehead
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 !== null ? l1 : l2
  return prehead.next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const mergeTwoLists_1 = (l1, l2) => {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists_1(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists_1(l1, l2.next)
    return l2
  }
}
