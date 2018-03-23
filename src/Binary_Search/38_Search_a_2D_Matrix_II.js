export default function searchMatrix(matrix, target) {
	if (!matrix.length || !matrix[0].length) {
		return 0;
	}

	const row = matrix.length,
		column = matrix[0].length;
	let n = row - 1,
		m = 0;

	let num = 0;

	while (n >= 0 && m < column) {
		if (matrix[n][m] === target) {
			num++;
			n--;
			m++;
		} else if (matrix[n][m] > target) {
			n--;
		} else {
			m++;
		}
	}

	return num; 
}
