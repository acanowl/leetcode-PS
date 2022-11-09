import { createBinaryTree } from '@ao/data-structure'
import { inorderTraversal_1, inorderTraversal_2 } from './index'

let root_1 = createBinaryTree([1, 2, 2, 3, 4, 4, 3])
let root_2 = createBinaryTree([1, 2, 2, null, 3, null, 3])
let root_3 = createBinaryTree([9, -42, -42, null, 76, 76, null, null, 13, null, 13])

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
