import { ListNode, linkedJoin } from '@ao/data-structure'

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteDuplicates_1 = (head) => {
  let news = new ListNode(NaN)

  let prev = news

  while (head) {
    if (prev.val !== head.val) {
      prev.next = head
      // 1 pre => -1 1 1 2 3 3  news => -1 1 1 2 3 3
      console.log(linkedJoin(prev, '-->'), 'before')
      prev = prev.next
      console.log(linkedJoin(prev, '-->'), 'after')
      // 1 pre => 1 1 2 3 3
    } else {
      // before 2 
      prev.next = head.next
      // 2 pre => 1 2 3 3   news => -1 1 2 3 3
      console.log(linkedJoin(prev, '-->'), '===')
    }
    head = head.next
    // 1 head => 1 2 3 3
    // 2 head => 2 3 3
  }
  console.log(linkedJoin(news, '-->'), 'news')
  // console.log(linkedJoin(prev, '-->'), 'prev')

  return news.next

}

export const deleteDuplicates_2 = (head) => {
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
  console.log(linkedJoin(head, '-->'), 'prev')
  return head
}
