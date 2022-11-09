import { binaryTreeToArray, createBinaryTree, deepCloneBinaryTree } from '@ao/data-structure'
import { hasPathSum_1 } from '../collection/112.路径总和'

let root = createBinaryTree([1, 2, 3, null, 5, 6, 7, 8, 9])

let root1 = deepCloneBinaryTree(root)
describe('binaryTree', () => {
  test('test clone', () => {
    expect(binaryTreeToArray(root)).toEqual([1, 2, 3, null, 5, 6, 7, 8, 9])
    hasPathSum_1(root, 3)
    console.log('=======================')
    console.log(binaryTreeToArray(root), 'root1-1')
    expect(binaryTreeToArray(root)).toEqual([1, 3, 4, null, 8, 10, 11, 16, 17])
    console.log('=======================')
    console.log(binaryTreeToArray(root1), 'root2')
  })
})
