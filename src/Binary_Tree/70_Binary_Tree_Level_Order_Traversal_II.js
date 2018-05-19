export default function levelOrder(root){
	if(!root){
		return [];
	}

	const result = [];
	const queue = [];

	queue.push(root);

	while(queue.length > 0){
		const level = [];
		const len = queue.length;
		for(let i = 0; i < len; i++){
			const tmp = queue.shift();
			level.push(tmp.value);
			tmp.left !== null && queue.push(tmp.left);
			tmp.right !== null && queue.push(tmp.right);
		}
		result.unshift(level);
	}

	return result;
}