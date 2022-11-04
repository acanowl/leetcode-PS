import { LinkedList, linkedJoin } from '@ao/data-structure'
import { deleteDuplicates_1, deleteDuplicates_2 } from './index'

let linkedList1 = new LinkedList()
let linkedList2 = new LinkedList()

linkedList1.concat([1, 1, 2, 3, 3])
linkedList2.concat([-1, 0, 0, 0, 0, 3, 3])

let heads_1 = linkedList1.head
let heads_2 = linkedList2.head

describe('deleteDuplicates', () => {
  test('answer 1', () => {
    let an1 = deleteDuplicates_1(heads_1)
    expect(linkedJoin(an1, '-->')).toBe('1-->2-->3')
    an1 = deleteDuplicates_1(heads_2)
    expect(linkedJoin(an1, '-->')).toBe('-1-->0-->3')
  })
  test('answer 2', () => {
    let an2 = deleteDuplicates_2(heads_1)
    expect(linkedJoin(an2, '-->')).toBe('1-->2-->3')
    an2 = deleteDuplicates_2(heads_2)
    expect(linkedJoin(an2, '-->')).toBe('-1-->0-->3')
  })
})