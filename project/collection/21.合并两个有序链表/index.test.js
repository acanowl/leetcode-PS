import { linkedJoin, createLinked, deepCloneLinked } from '@ao/data-structure'
import { mergeTwoLists_1, mergeTwoLists_2 } from './index'

let [list1, list2] = createLinked([1, 2, 4], [1, 3, 4])
let [list3, list4] = deepCloneLinked(list1, list2)

const lists_1 = mergeTwoLists_1(list1, list2)
const lists_2 = mergeTwoLists_2(list3, list4)

// mergeTwoLists方法改变了linkedList1/2，需拷贝一个新的实例， 否则会造成死循环 22/11/9 ✔
describe('mergeTwoLists', () => {
  test('mergeTwoLists 1', () => {
    expect(linkedJoin(lists_1)).toBe('1--1--2--3--4--4')
  })

  test('mergeTwoLists 2', () => {
    expect(linkedJoin(lists_2)).toBe('1--1--2--3--4--4')
  })
})
