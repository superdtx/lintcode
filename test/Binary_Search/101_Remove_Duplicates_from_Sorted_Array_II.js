export default function removeDuplicates(A) {
	let count = 2;
	const len = A.length;

	while (count < len) {
		if (A[count - 2] === A[count] && A[count - 1] === A[count]) {
			A.splice(count, 1);
		} else {
			count++;
		}
	}

	return A.length;
}
