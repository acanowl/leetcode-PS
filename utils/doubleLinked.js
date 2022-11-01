const { LinkedList } = require("./singleLinked")

/**
 * @description: 创建链表双节点类
 * @param {*} val 节点值
 * @return {*}
 */
function ListNode(val, next, prev) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
  this.prev = (prev === undefined ? null : prev)
}

/**
 * @description: 创建链表类
 * @param {*}
 * @return {*}
 */
function DoubleLinkedList() {
  this.length = 0
  this.head = null
  this.tail = null
}

// 向链表中追加节点
DoubleLinkedList.prototype.append = function (val) {
  let node = new ListNode(val)
  if (this.head === null) {
    // 链表为空，head 和 tail 都指向当前添加的节点
    this.head = node
  } else {
    this.tail.next = node
    node.prev = this.tail
  }
  this.tail = node
  this.length++
}

// 在链表的指定位置插入节点
DoubleLinkedList.prototype.insert = function (index, val) {
  if (index < 0 || index > this.length) return false

  // append内部自带len++
  if (index === this.length) {
    this.append(val)
  } else {
    let node = new ListNode(val)
    if (index === 0) { // 插入到头部
      if (this.head === null) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        this.head.prev = node
        this.head = node
      }
    } else {
      let cur = this.getElementAt(index)
      let prev = cur.prev
      node.next = cur
      node.prev = prev
      cur.prev = node
      prev.next = node
    }
    this.length++
  }
  return true
}

// 删除链表中指定位置的元素，并返回这个元素的值
DoubleLinkedList.prototype.removeAt = function (index) {
  if (index < 0 || index >= this.length) return null
  let current = this.head
  if (index === 0) {
    this.head = current.next
    this.head.prev = null
    if (this.length === 1) this.tail = null
  } else if (index === this.length - 1) {
    current = this.tail
    this.tail = current.prev
    this.tail.next = null
  } else {
    current = this.getElementAt(index)
    let prev = current.prev
    prev.next = current.next
    current.next.prev = prev
  }
  this.length--
  return current.val
}

// 删除链表中对应的元素
DoubleLinkedList.prototype.remove = function (val) {
  let index = this.indexOf(val)
  return this.removeAt(index)
}

// 获取链表中给定元素的索引
DoubleLinkedList.prototype.indexOf = function (val) {
  let curHead = this.head, curTail = this.tail
  for (let i = 0; i < this.length; i++) {
    if (curHead.val === val) return i
    curHead = curHead.next
    if (curTail.val === val) return this.length - 1 - i
    curTail = curTail.prev
  }
  return -1
}

// 获取链表中某个节点
DoubleLinkedList.prototype.find = function (val) {
  let curHead = this.head, curTail = this.tail
  while (curHead) {
    if (curHead.val === val) return curHead
    curHead = curHead.next

    if (curTail.val === val) return curTail
    curTail = curTail.prev
  }
  return null
}

// 获取链表中索引所对应的元素
DoubleLinkedList.prototype.getElementAt = function (index) {
  if (index < 0 || index >= this.length) return null
  let cur = null
  if (index > Math.floor(this.length / 2)) {
    cur = this.tail
    let i = this.length - 1
    while (i > index) {
      cur = cur.prev
      i--
    }
  } else {
    cur = this.head
    while (index--) {
      cur = cur.next
    }
  }
  return cur
}

// 判断链表是否为空
DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0
}

// 获取链表的长度
DoubleLinkedList.prototype.size = function () {
  return this.length
}

// 清空链表
DoubleLinkedList.prototype.clear = function () {
  this.head = null
  this.tail = null
  this.length = 0
}

// 序列化链表
DoubleLinkedList.prototype.join = function (string) {
  let cur = this.head
  let str = ''
  while (cur) {
    str += cur.val
    if (cur.next) str += string
    cur = cur.next
  }
  return str
}

module.exports = { ListNode, DoubleLinkedList }
