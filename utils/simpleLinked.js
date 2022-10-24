class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// 数组转换
function concatLinked(arr) {
  let reshead = new ListNode()

  let res = reshead
  for (let i = 0; i < arr.length; i++) {
    let cur = new ListNode(arr[i])
    res.next = cur
    res = res.next
  }
  return reshead.next
}

// 测试查看
function join(listnode, string) {
  let cur = listnode
  let str = ''
  while (cur) {
    str += cur.val
    if (cur.next) str += string
    cur = cur.next
  }
  return str
}

module.exports = { ListNode, concatLinked, join }