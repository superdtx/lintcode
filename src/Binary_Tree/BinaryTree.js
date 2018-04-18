export default class BinaryTree {
	constructor(array){
		const binaryTree = createTree(array, 0);
		return binaryTree;
	}

	static preOrderTraverse(binaryTree, outputArray){
		if(binaryTree){
			outputArray.push(binaryTree.value);
			this.preOrderTraverse(binaryTree.left, outputArray);
			this.preOrderTraverse(binaryTree.right, outputArray);
		}

		return ;
	}
}

function createTree(array, start) {
	if(array[start] === '#'){
		return null;
	}

	const root = new TreeNode(array[start]);
	const leftNodeIndex = 2*start + 1;
	const rightNodeIndex = 2*start + 2;

	if(leftNodeIndex > array.length - 1){
		root.left = null;
	} else {
		root.left = createTree(array, leftNodeIndex);
	}

	if(rightNodeIndex > array.length - 1){
		root.right = null;
	} else {
		root.right = createTree(array, rightNodeIndex);
	}

	return root;
}

class TreeNode {
	constructor(val){
		this.value = val;
		this.left = null;
		this.right = null;
	}
}