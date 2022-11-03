import { concatLinked, join } from '@ao/data-structure'
import { mergeTwoLists, mergeTwoLists_1 } from './index'

let list1Arr = [1, 2, 4], list2Arr = [1, 3, 4]

let list1 = concatLinked(list1Arr), list2 = concatLinked(list2Arr)
const lists = mergeTwoLists(list1, list2)
// const lists1 = mergeTwoLists_1(list1, list2)

describe('mergeTwoLists', () => {

  test('mergeTwoLists 1', () => {
    expect(join(lists, '--')).toBe('1--1--2--3--4--4')
  })

  // test('mergeTwoLists 2', () => {
  //   expect(join(lists1, '--')).toBe('1--1--2--3--4--4')
  // })
})