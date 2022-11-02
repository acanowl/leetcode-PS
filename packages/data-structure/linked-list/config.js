/**
 * @description: 创建链表单节点类
 * @param {*} val 节点值
 * @return {*}
 */
export class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * @description: 创建链表双节点类
 * @param {*} val 节点值
 * @return {*}
 */
export class DoubleListNode {
  constructor(val, next, prev) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.prev = (prev === undefined ? null : prev)
  }
}
