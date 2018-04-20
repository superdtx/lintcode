export default class BinaryTree {
	constructor(array) {
		return createTree(array);
	}

	static preOrderTraverse(binaryTree, outputArray) {
		if (binaryTree) {
			outputArray.push(binaryTree.value);
			this.preOrderTraverse(binaryTree.left, outputArray);
			this.preOrderTraverse(binaryTree.right, outputArray);
		}

		return;
	}
}

class TreeNode {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

function createTree(array) {
	const queue = [];
	let index = 0;
	let root;

	if (array[index] !== "#") {
		root = new TreeNode(array[0]);
		queue.push(root);
		index++;
	} else {
		return null;
	}

	while (index < array.length) {
		const tmp = queue.shift();

		if (array[index] !== "#") {
			tmp.left = new TreeNode(array[index]);
			queue.push(tmp.left);
		}

		index++;

		if (array[index] !== "#") {
			tmp.right = new TreeNode(array[index]);
			queue.push(tmp.right);
		}
		index++;
	}

	return root;
}

// function createTree(array, start) {
// 	if(array[start] === '#'){
// 		return null;
// 	}

// 	const root = new TreeNode(array[start]);
// 	const leftNodeIndex = 2*start + 1;
// 	const rightNodeIndex = 2*start + 2;

// 	if(leftNodeIndex > array.length - 1){
// 		root.left = null;
// 	} else {
// 		root.left = createTree(array, leftNodeIndex);
// 	}

// 	if(rightNodeIndex > array.length - 1){
// 		root.right = null;
// 	} else {
// 		root.right = createTree(array, rightNodeIndex);
// 	}

// 	return root;
// }
