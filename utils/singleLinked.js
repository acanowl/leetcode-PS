/**
 * @description: 创建链表单节点类
 * @param {*} val 节点值
 * @return {*}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @description: 创建链表类
 * @param {*}
 * @return {*}
 */
function LinkedList() {
  this.length = 0
  this.head = null
}

// 向链表中追加节点
LinkedList.prototype.append = function (val) {
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
LinkedList.prototype.insert = function (index, val) {
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
LinkedList.prototype.removeAt = function (index) {
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
LinkedList.prototype.remove = function (val) {
  let index = this.indexOf(val)
  return this.removeAt(index)
}

// 获取链表中给定元素的索引
LinkedList.prototype.indexOf = function (val) {
  let cur = this.head
  for (let i = 0; i < this.length; i++) {
    if (cur.val === val) return i
    cur = cur.next
  }
  return -1
}

// 获取链表中某个节点
LinkedList.prototype.find = function (val) {
  let cur = this.head
  while (cur) {
    if (cur.val === val) return cur
    cur = cur.next
  }
  return null
}

// 获取链表中索引所对应的元素
LinkedList.prototype.getElementAt = function (index) {
  if (index < 0 || index > this.length + 1) return null

  let cur = this.head
  while (index--) {
    cur = cur.next
  }
  return cur
}

// 判断链表是否为空
LinkedList.prototype.isEmpty = function () {
  return this.length === 0
}

// 获取链表的长度
LinkedList.prototype.size = function () {
  return this.length
}

// 获取链表的头元素
LinkedList.prototype.getHead = function () {
  return this.head
}

// 清空链表
LinkedList.prototype.clear = function () {
  this.head = null
  this.length = 0
}

// 序列化链表
LinkedList.prototype.join = function (string) {
  let cur = this.head
  let str = ''
  while (cur) {
    str += cur.val
    if (cur.next) str += string
    cur = cur.next
  }
  return str
}

module.exports = { ListNode, LinkedList }