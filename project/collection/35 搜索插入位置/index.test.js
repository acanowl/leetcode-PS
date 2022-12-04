import { searchInsert_1, searchInsert_2, searchInsert_3 } from './index'

describe('searchInsert', () => {
  test('answer 1', () => {
    expect(searchInsert_1([1, 3, 5, 6], 2)).toBe(1)
    expect(searchInsert_1([1, 3, 5, 6], 5)).toBe(2)
    expect(searchInsert_1([1, 3, 5, 6], 7)).toBe(4)
  })
  test('answer 2', () => {
    expect(searchInsert_2([1, 3, 5, 6], 6)).toBe(3)
    expect(searchInsert_2([1, 3, 5, 6], 1)).toBe(0)
    expect(searchInsert_2([1, 3, 5, 6], 0)).toBe(0)
  })
  test('answer 3', () => {
    expect(searchInsert_3([1, 3, 5, 6], 2)).toBe(1)
    expect(searchInsert_3([1, 3, 5, 6], 5)).toBe(2)
    expect(searchInsert_3([1, 3, 5, 6], 7)).toBe(4)
  })
})
