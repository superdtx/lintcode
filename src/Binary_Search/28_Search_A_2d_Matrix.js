export default function searchMatrix(matrix, target) {
	const row = matrix.length,
		col = matrix[0].length;

	let start = 0,
		end = col * row - 1,
		mid;

	while (start + 1 < end) {
		mid = start + Math.floor((end - start) / 2);
		let m = Math.floor(mid / col);
		let n = mid % col;

		if (matrix[m][n] === target) {
			return true;
		} else if (matrix[m][n] < target) {
			start = mid;
		} else {
			end = mid;
		}
	}

	let sm = Math.floor(start / col);
	let sn = start % col;

	let em = Math.floor(end / col);
	let en = end % col;

	if (matrix[sm][sn] === target || matrix[em][en] === target) {
		return true;
	}

	return false;
}
