import { createBinaryTree, deepCloneBinaryTree } from '@ao/data-structure'
import { hasPathSum_1, hasPathSum_2 } from './index'

const arr1 = [3, null, 15]
const arr2 = [1, 2, 2, null, 3, null, 3]
const arr3 = [9, -42, -42, null, 76, 76, null, null, 13, null, 13]

let [root_1, root_2, root_3] = createBinaryTree(arr1, arr2, arr3)
let [root_4, root_5, root_6] = deepCloneBinaryTree(root_1, root_2, root_3)

describe('hasPathSum', () => {
  test('answer 1', () => {
    expect(hasPathSum_1(root_1, 3)).toBe(false)
    expect(hasPathSum_1(root_2, 6)).toBe(true)
    expect(hasPathSum_1(root_3, 20)).toBe(false)
  })

  test('answer 2', () => {
    expect(hasPathSum_2(root_4, 3)).toBe(false)
    expect(hasPathSum_2(root_5, 6)).toBe(true)
    expect(hasPathSum_2(root_6, 20)).toBe(false)
  })
})
