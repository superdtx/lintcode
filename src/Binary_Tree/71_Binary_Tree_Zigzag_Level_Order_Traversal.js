export default function zigzagLevelOrder(root){
	if(!root){
		return [];
	}

	const result = [];
	const queue = [];
	let isReverse = false;

	queue.push(root);

	while(queue.length > 0){
		const level = [];
		const len = queue.length;

		for(let i = 0; i < len; i++){
			const tmp = queue.shift();
			if(isReverse){
				level.unshift(tmp.value);
			} else {
				level.push(tmp.value);
			}
			tmp.left !== null && queue.push(tmp.left);
			tmp.right !== null && queue.push(tmp.right);
		}

		result.push(level);
		isReverse = !isReverse;
	}

	return result;
}