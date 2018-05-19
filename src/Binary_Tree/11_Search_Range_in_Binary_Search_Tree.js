/**
 * @param root: param root: The root of the binary search tree
 * @param k1: An integer
 * @param k2: An integer
 * @return: return: Return all keys that k1<=key<=k2 in ascending order
 */
// const searchRange = function (root, k1, k2) {
// 	if(!root){
// 		return [];
// 	}

// 	const left = searchRange(root.left, k1, k2);
// 	const right = searchRange(root.right, k1, k2);
// 	const res = [];

// 	if(root.value <= k2 && root.value >= k1){
// 		res.push(root.value);
// 	}

// 	return res.concat(left, right);
// }

const searchRange = function (root, k1, k2) {
	if(!root){
		return [];
	}

	let left = [], right = [];
	const result = [];

	if(root.value > k1){
		left = searchRange(root.left, k1, k2);
	}

	if(root.value < k2){
		right = searchRange(root.right, k1, k2);
	}

	if(root.value <= k2 && root.value >= k1){
		result.push(root.value);
	}

	return left.concat(result, right);
}

export default searchRange;