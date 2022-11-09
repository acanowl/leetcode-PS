import { createBinaryTree, deepCloneBinaryTree } from '@ao/data-structure'

describe('binaryTree', () => {
	test('xx', () => {
		let root = createBinaryTree([1, 2, 3, null, 5, 6, 7, 8, 9])
		console.log(root, 'root1')

		let root1 = deepCloneBinaryTree(root)
		console.log(root1, 'root2')
	})
})
