/**
Given a string and an offset, rotate string by offset. (rotate from left to right)

Example
Given "abcdefg".

offset=0 => "abcdefg"
offset=1 => "gabcdef"
offset=2 => "fgabcde"
offset=3 => "efgabcd"
Challenge 
Rotate in-place with O(1) extra memory.
**/

export default function rotateString(s, offset) {
	if (!s.length || !(offset % s.length)) {
		return;
	}

	const breakpoint = offset % s.length;
	const sarray = s.split('');

	reverseString(sarray, 0, sarray.length - 1 - offset);
	reverseString(sarray, sarray.length - offset, sarray.length - 1);
	reverseString(sarray, 0, sarray.length - 1);

	s = sarray.join('');
}

function reverseString(s, start, end) {
	while (start < end) {
		let tmp = s[start];
		s[start] = s[end];
		s[end] = tmp;
		start++;
		end--;
	}
}
