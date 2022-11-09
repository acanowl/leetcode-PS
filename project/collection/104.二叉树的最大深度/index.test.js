import { createBinaryTree } from '@ao/data-structure'
import { maxDepth_1, maxDepth_2 } from './index'

let root_1 = createBinaryTree([3, null, 15])
let root_2 = createBinaryTree([1, 2, 2, null, 3, null, 3])
let root_3 = createBinaryTree([9, -42, -42, null, 76, 76, null, null, 13, null, 13])

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
