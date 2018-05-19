// two queue BSF
// export default function levelOrder(root){
// 	if(!root){
// 		return [];
// 	}

// 	let queue1 = [];
// 	let queue2 = [];
// 	const result = [];

// 	queue1.push(root);

// 	while(queue1.length > 0){
// 		const level = [];
// 		queue2 = [];
// 		for(let i = 0; i < queue1.length; i++){
// 			const tmp = queue1[i];
// 			level.push(tmp.value);
// 			!!(tmp.left !== null) && queue2.push(tmp.left);
// 			!!(tmp.right !== null) && queue2.push(tmp.right);
// 		}

// 		queue1 = queue2;
// 		result.push(level);
// 	}

// 	return result;
// }

// one queue with dummy node
// export default function levelOrder(root) {
// 	if (!root) {
// 		return [];
// 	}

// 	const queue = [];
// 	const result = [];
// 	let level = [];

// 	queue.push(root);
// 	queue.push("#");

// 	while (queue.length > 0) {
// 		if (queue[0] === "#") {
// 			result.push(level);
// 			if (queue.length === 1) {
// 				break;
// 			}
// 			queue.push("#");
// 			queue.shift();
// 			level = [];
// 			continue;
// 		}

// 		const tmp = queue.shift();
// 		level.push(tmp.value);
// 		tmp.left !== null && queue.push(tmp.left);
// 		tmp.right !== null && queue.push(tmp.right);
// 	}

// 	return result;
// }

// one queue
export default function levelOrder(root){
	if(!root){
		return [];
	}

	const queue = [];
	const result = [];

	queue.push(root);

	while (queue.length > 0){
		const len = queue.length;
		const level = [];
		for(let i = 0; i< len; i++){
			const tmp = queue.shift();
			level.push(tmp.value);
			tmp.left !== null && queue.push(tmp.left);
			tmp.right !== null && queue.push(tmp.right);
		}
		result.push(level);
	}

	return result;
}
