// const { LinkedList, ListNode } = require('../utils/singleLinked')
// var list1 = new LinkedList()

// var list1Arr = [1, 2, 4]
// for (let i = 0; i < list1Arr.length; i++) {
//   list1.append(list1Arr[i])
// }

// console.log(list1.join('-->'))
// console.log(list1.head.prototype)
// console.log(list1.__proto__)

// var list2 = new LinkedList()

// var list2Arr = [1, 3, 4]
// for (let j = 0; j < list2Arr.length; j++) {
//   list2.append(list2Arr[j])
// }
// console.log(list2.join('-->'))

const { ListNode, concatLinked, join } = require('../utils/simpleLinked')

var list1Arr = [1, 2, 4]
var list2Arr = [1, 3, 4]

var list1 = concatLinked(list1Arr)
var list2 = concatLinked(list2Arr)

console.log(join(list1, '--'))
console.log(join(list2, '--'))


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 1
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

  // 2
  // if (l1 === null) return l2
  // if (l2 === null) return l1
  // if (l1.val < l2.val) {
  //     l1.next = mergeTwoLists(l1.next, l2)
  //     return l1
  // } else {
  //     l2.next = mergeTwoLists(l1, l2.next)
  //     return l2
  // }
};

const list = mergeTwoLists(list1, list2)
console.log(join(list, '--'))