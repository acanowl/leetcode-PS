import { createBinaryTree } from '@ao/data-structure'
import { minDepth_1, minDepth_2, minDepth_3 } from './index'

const arr1 = [3, 9, 20, null, null, 15, 7]
const arr2 = [2, null, 3, null, 4, null, 5, null, 6]
const arr3 = [2, 4, 3, null, 4, 5, 0, 7, 6, 4, null, 3]

let [root_1, root_2, root_3] = createBinaryTree(arr1, arr2, arr3)

describe('minDepth', () => {
  test('answer 1', () => {
    expect(minDepth_1(root_1)).toBe(2)
    expect(minDepth_1(root_2)).toBe(5)
    expect(minDepth_1(root_3)).toBe(4)
  })

  test('answer 2', () => {
    expect(minDepth_2(root_1)).toBe(2)
    expect(minDepth_2(root_2)).toBe(5)
    expect(minDepth_2(root_3)).toBe(4)
  })

  test('answer 3', () => {
    expect(minDepth_3(root_1)).toBe(2)
    expect(minDepth_3(root_2)).toBe(5)
    expect(minDepth_3(root_3)).toBe(4)
  })
})
