import { concatLinked, join } from '@ao/data-structure'
import { deleteDuplicates_1, deleteDuplicates_2 } from './index'

let heads_1 = concatLinked([1, 1, 2, 3, 3])
let heads_2 = concatLinked([-1, 0, 0, 0, 0, 3, 3])

describe('deleteDuplicates', () => {
  test('answer 1', () => {
    let an1 = deleteDuplicates_1(heads_1)
    expect(join(an1, '-->')).toBe('1-->2-->3')
    an1 = deleteDuplicates_1(heads_2)
    expect(join(an1, '-->')).toBe('-1-->0-->3')
  })
  test('answer 2', () => {
    let an2 = deleteDuplicates_2(heads_1)
    expect(join(an2, '-->')).toBe('1-->2-->3')
    an2 = deleteDuplicates_2(heads_2)
    expect(join(an2, '-->')).toBe('-1-->0-->3')
  })
})