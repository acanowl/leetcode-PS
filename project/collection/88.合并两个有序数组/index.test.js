import { merge_1, merge_2, merge_3 } from './index'

describe('merge', () => {
  test('answer 1', () => {
    let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
    expect(merge_1(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6])
    nums1 = [1], m = 1, nums2 = [], n = 0
    expect(merge_1(nums1, m, nums2, n)).toEqual([1])
    nums1 = [0], m = 0, nums2 = [1], n = 1
    expect(merge_1(nums1, m, nums2, n)).toEqual([1])
  })
  test('answer 2', () => {
    let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
    expect(merge_2(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6])
    nums1 = [1], m = 1, nums2 = [], n = 0
    expect(merge_2(nums1, m, nums2, n)).toEqual([1])
    nums1 = [0], m = 0, nums2 = [1], n = 1
    expect(merge_2(nums1, m, nums2, n)).toEqual([1])
  })
  test('answer 3', () => {
    let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
    expect(merge_3(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6])
    nums1 = [1], m = 1, nums2 = [], n = 0
    expect(merge_3(nums1, m, nums2, n)).toEqual([1])
    nums1 = [0], m = 0, nums2 = [1], n = 1
    expect(merge_3(nums1, m, nums2, n)).toEqual([1])
  })
})