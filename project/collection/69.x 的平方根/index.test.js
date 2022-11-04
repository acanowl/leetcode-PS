import { mySqrt_1, mySqrt_2 } from './index'

describe('mySqrt', () => {
  test('answer 1', () => {
    expect(mySqrt_1(0)).toBe(0)
    expect(mySqrt_1(4)).toBe(2)
    expect(mySqrt_1(8)).toBe(2)
    expect(mySqrt_1(99)).toBe(9)
  })
  test('answer 2', () => {
    expect(mySqrt_2(0)).toBe(0)
    expect(mySqrt_2(4)).toBe(2)
    expect(mySqrt_2(8)).toBe(2)
    expect(mySqrt_2(99)).toBe(9)
  })
})
