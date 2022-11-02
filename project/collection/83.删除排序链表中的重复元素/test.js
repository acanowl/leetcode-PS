const { ListNode, concatLinked, join } = require('../utils/simpleLinked')

let heads = concatLinked([1, 1, 2, 3, 3])

// console.log(heads)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // let news = new ListNode(NaN)

  // let prev = news

  // while (head) {
  //   if (prev.val !== head.val) {
  //     prev.next = head
  //     // 1 pre => -1 1 1 2 3 3  news => -1 1 1 2 3 3
  //     console.log(join(prev, '-->'), 'before')
  //     prev = prev.next
  //     console.log(join(prev, '-->'), 'after')
  //     // 1 pre => 1 1 2 3 3
  //   } else {
  //     // before 2 
  //     prev.next = head.next
  //     // 2 pre => 1 2 3 3   news => -1 1 2 3 3
  //     console.log(join(prev, '-->'), '===')
  //   }
  //   head = head.next
  //   // 1 head => 1 2 3 3
  //   // 2 head => 2 3 3
  // }
  // console.log(join(news, '-->'), 'news')
  // // console.log(join(prev, '-->'), 'prev')

  // return news.next


  if (!head) return head

  let prev = head
  // 1 1 2 3 3
  while (prev.next) {
    if (prev.val === prev.next.val) {
      prev.next = prev.next.next
      // prev 1 2 3 3
    } else {
      prev = prev.next
      // prev 2 3 3
    }
  }
  console.log(join(head, '-->'), 'prev')
  return head
}


// console.log(join(deleteDuplicates(heads), '-->'), 'to be [1,2,3]')

heads = concatLinked([-1, 0, 0, 0, 0, 3, 3])
console.log(join(deleteDuplicates(heads), '-->'), 'to be [-1,0,3]')
