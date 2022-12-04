import { createBinaryTree } from '@ao/data-structure'
import { maxDepth_1, maxDepth_2 } from './index'

const arr1 = [3, null, 15]
const arr2 = [1, 2, 2, null, 3, null, 3]
const arr3 = [9, -42, -42, null, 76, 76, null, null, 13, null, 13]

let [root_1, root_2, root_3] = createBinaryTree(arr1, arr2, arr3)

describe('maxDepth', () => {
  test('answer 1', () => {
    expect(maxDepth_1(root_1)).toBe(2)
    expect(maxDepth_1(root_2)).toBe(3)
    expect(maxDepth_1(root_3)).toBe(4)
  })

  test('answer 2', () => {
    expect(maxDepth_2(root_1)).toBe(2)
    expect(maxDepth_2(root_2)).toBe(3)
    expect(maxDepth_2(root_3)).toBe(4)
  })
})
