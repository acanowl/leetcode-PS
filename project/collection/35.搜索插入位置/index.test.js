import { searchInsert_1, searchInsert_2, searchInsert_3 } from './index'

describe('searchInsert', () => {
  test('answer 1', () => {
    expect(searchInsert_2([1, 3, 5, 6], 2)).toBe(1)
    expect(searchInsert_2([1, 3, 5, 6], 5)).toBe(5)
    expect(searchInsert_2([1, 3, 5, 6], 7)).toBe(4)
  })
})