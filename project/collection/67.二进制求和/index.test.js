import { addBinary_1, addBinary_2, addBinary_3 } from './index'

describe('addBinary', () => {
  test('answer 1', () => {
    let a = '11', b = '1'
    expect(addBinary_1(a, b)).toBe('100')
    a = '1010', b = '1011'
    expect(addBinary_1(a, b)).toBe('10101')
    a = '1111', b = '1111'
    expect(addBinary_1(a, b)).toBe('11110')
    a = '0', b = '0'
    expect(addBinary_1(a, b)).toBe('0')
  })
  test('answer 2', () => {
    let a = '11', b = '1'
    expect(addBinary_2(a, b)).toBe('100')
    a = '1010', b = '1011'
    expect(addBinary_2(a, b)).toBe('10101')
    a = '1111', b = '1111'
    expect(addBinary_2(a, b)).toBe('11110')
    a = '0', b = '0'
    expect(addBinary_2(a, b)).toBe('0')
  })
  test('answer 3', () => {
    let a = '11', b = '1'
    expect(addBinary_3(a, b)).toBe('100')
    a = '1010', b = '1011'
    expect(addBinary_3(a, b)).toBe('10101')
    a = '1111', b = '1111'
    expect(addBinary_3(a, b)).toBe('11110')
    a = '0', b = '0'
    expect(addBinary_3(a, b)).toBe('0')
  })
})
