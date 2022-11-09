/**
 * @description: 创建链表单节点类
 * @param {*} val 节点值
 * @return {*}
 */
export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * @description: 创建链表双节点类
 * @param {*} val 节点值
 * @return {*}
 */
export class DoubleListNode {
  constructor(val, next, prev) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.prev = prev === undefined ? null : prev
  }
}

// 序列化链表
export const linkedJoin = (nodelists, string = '--') => {
  let cur = nodelists
  let str = ''
  while (cur) {
    str += cur.val
    if (cur.next) str += string
    cur = cur.next
  }
  return str
}

// 数组拼接
export function linkedConcat(...items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        this.append(item[j])
      }
    } else {
      this.append(item)
    }
  }
}

/**
 * 数组转换单链表
 * @param {*} arr
 * @returns
 */
export const createLinked = arr => {
  let linked = new ListNode()
  let prev = linked
  if (!arr) return null

  while (arr.length) {
    let cur = arr.shift()
    prev.next = new ListNode(cur)
    prev = prev.next
  }
  return linked.next
}

/**
 * 数组转换双链表( 正确性待待验证 )
 * @param {*} arr
 * @returns
 */
/* export const createDoubleLinked = arr => {
  let linked = new DoubleListNode()
  let prev = linked
  if (!arr) return null

  while (arr.length) {
    let cur = arr.shift()
    prev.next = new DoubleListNode(cur)
    let tem = prev
    prev = prev.next
    prev.prev = tem
  }
  return linked.next
} */

export const deepCloneLinked = linked => {
  const dpClone = linked => {
    if (!linked) return null
    let cur = new ListNode(linked.val)
    cur.next = dpClone(linked.next)
    return cur
  }
  return dpClone(linked)
}
