import { maxRepeating_1, maxRepeating_2 } from './index'

describe('maxRepeating', () => {
  test('answer 1', () => {
    expect(maxRepeating_1('ababc', 'ab')).toBe(2)
    expect(maxRepeating_1('ababc', 'ba')).toBe(1)
    expect(maxRepeating_1('ababc', 'ac')).toBe(0)
    expect(maxRepeating_1('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba')).toBe(5)
  })

  test('answer 2', () => {
    expect(maxRepeating_2('ababc', 'ab')).toBe(2)
    expect(maxRepeating_2('ababc', 'ba')).toBe(1)
    expect(maxRepeating_2('ababc', 'ac')).toBe(0)
    expect(maxRepeating_2('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba')).toBe(5)
  })
})
