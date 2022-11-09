import { createBinaryTree } from '@ao/data-structure'
import { inorderTraversal_1, inorderTraversal_2 } from './index'

let [root_1, root_2, root_3] = createBinaryTree([1, null, 2, 3], [], [1])

describe('inorderTraversal', () => {
  test('answer 1', () => {
    expect(inorderTraversal_1(root_1)).toEqual([1, 3, 2])
    expect(inorderTraversal_1(root_2)).toEqual([])
    expect(inorderTraversal_1(root_3)).toEqual([1])
  })

  test('answer 2', () => {
    expect(inorderTraversal_2(root_1)).toEqual([1, 3, 2])
    expect(inorderTraversal_2(root_2)).toEqual([])
    expect(inorderTraversal_2(root_3)).toEqual([1])
  })
})
