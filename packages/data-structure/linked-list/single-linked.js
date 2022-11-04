import { ListNode, linkedJoin, linkedConcat } from './config'

/**
 * @description: 创建链表类
 * @param {*}
 * @return {*}
 */
export class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }
  // 向链表中追加节点
  append(val) {
    let cur = new ListNode(val)
    if (this.head) {
      let last = this.getElementAt(this.length - 1)
      last.next = cur
    } else {
      this.head = cur
    }
    this.length++
  }
  // 在链表的指定位置插入节点
  insert(index, val) {
    if (index < 0 || index > this.length) return false

    let node = new ListNode(val)
    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      let prenode = this.getElementAt(index - 1)
      node.next = prenode.next
      prenode.next = node
    }
    this.length++
    return true
  }
  // 删除链表中指定位置的元素，并返回这个元素的值
  removeAt(index) {
    if (index < 0 || index > this.length + 1) return null

    let cur = this.head
    if (index === 0) {
      this.head = cur.next
    } else {
      let node = this.getElementAt(index - 1)
      cur = node.next
      node.next = cur.next
    }
    this.length--
    return cur.val
  }
  // 删除链表中对应的元素
  remove(val) {
    let index = this.indexOf(val)
    return this.removeAt(index)
  }
  // 获取链表中给定元素的索引
  indexOf(val) {
    let cur = this.head
    for (let i = 0; i < this.length; i++) {
      if (cur.val === val) return i
      cur = cur.next
    }
    return -1
  }
  // 获取链表中某个节点
  find(val) {
    let cur = this.head
    while (cur) {
      if (cur.val === val) return cur
      cur = cur.next
    }
    return null
  }
  // 获取链表中索引所对应的元素
  getElementAt(index) {
    if (index < 0 || index > this.length + 1) return null

    let cur = this.head
    while (index--) {
      cur = cur.next
    }
    return cur
  }
  // 判断链表是否为空
  isEmpty() {
    return this.length === 0
  }
  // 获取链表的长度
  size() {
    return this.length
  }
  // 获取链表的头元素
  getHead() {
    return this.head
  }
  // 清空链表
  clear() {
    this.head = null
    this.length = 0
  }
  // 序列化链表
  join(string) {
    return linkedJoin(this.head, string)
  }
  // 数组拼接
  concat(...items) {
    linkedConcat.call(this, ...items)
  }
}
