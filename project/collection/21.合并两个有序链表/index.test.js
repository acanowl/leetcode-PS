import { LinkedList, linkedJoin } from '@ao/data-structure'
import { mergeTwoLists_1, mergeTwoLists_2 } from './index'

let linkedList1 = new LinkedList()
let linkedList2 = new LinkedList()

linkedList1.concat(1, 2, 4)
linkedList2.concat(1, 3, 4)

let list1 = linkedList1.head,
  list2 = linkedList2.head

const lists1 = mergeTwoLists_1(list1, list2)
// const lists2 = mergeTwoLists_2(list1, list2)

// FIXME mergeTwoLists方法改变了linkedList1/2，需拷贝一个新的实例， 否则会造成死循环 22/11/9
describe('mergeTwoLists', () => {
  test('mergeTwoLists 1', () => {
    expect(linkedJoin(lists1, '--')).toBe('1--1--2--3--4--4')
  })

  test('mergeTwoLists 2', () => {
    // expect(linkedJoin(lists2, '--')).toBe('1--1--2--3--4--4')
  })
})
