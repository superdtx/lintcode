export default function insertNode(root, node){
	if(!root){
		return node;
	}

	if(root.value > node.value){
		root.left = insertNode(root.left, node);
	} else {
		root.right = insertNode(root.right, node);
	}

	return root;
}