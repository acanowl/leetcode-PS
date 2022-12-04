import { createBinaryTree } from '@ao/data-structure'
import { inorderTraversal_1, inorderTraversal_2 } from './index'

const arr1 = [1, 2, 2, 3, 4, 4, 3]
const arr2 = [1, 2, 2, null, 3, null, 3]
const arr3 = [9, -42, -42, null, 76, 76, null, null, 13, null, 13]

let [root_1, root_2, root_3] = createBinaryTree(arr1, arr2, arr3)

describe('inorderTraversal', () => {
  test('answer 1', () => {
    expect(inorderTraversal_1(root_1)).toBe(true)
    expect(inorderTraversal_1(root_2)).toBe(false)
    expect(inorderTraversal_1(root_3)).toBe(false)
  })

  test('answer 2', () => {
    expect(inorderTraversal_2(root_1)).toBe(true)
    expect(inorderTraversal_2(root_2)).toBe(false)
    expect(inorderTraversal_2(root_3)).toBe(false)
  })
})
