import { createBinaryTree, deepCloneBinaryTree } from '@ao/data-structure'
import { hasPathSum_1, hasPathSum_2 } from './index'

let root_1 = createBinaryTree([3, null, 15])
let root_2 = createBinaryTree([1, 2, 2, null, 3, null, 3])
let root_3 = createBinaryTree([9, -42, -42, null, 76, 76, null, null, 13, null, 13])

let root_4 = deepCloneBinaryTree(root_1)
let root_5 = deepCloneBinaryTree(root_2)
let root_6 = deepCloneBinaryTree(root_3)

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
