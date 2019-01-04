class Solution:
    """
    @param image: a binary matrix with '0' and '1'
    @param x: the location of one of the black pixels
    @param y: the location of one of the black pixels
    @return: an integer
    """
    def minArea(self, image, x, y):
        # write your code here
        if any([not image, not len(image), not len(image[0])]):
            return 0
        m, n = len(image), len(image[0])
            
        horizontal_left = self._horizontal_search(image, 0, y, True)
        horizontal_right = self._horizontal_search(image, y, n-1, False)
        vertical_top = self._vertical_search(image, 0, x, True)
        vertical_bottom = self._vertical_search(image, x, m-1, False)
                
        return (horizontal_right - horizontal_left + 1) * (vertical_bottom - vertical_top + 1)


    def _horizontal_search(self, image, start, end, go_left):
        m = len(image)

        while start + 1 < end:
            mid = start + (end - start) // 2
            
            if any(image[k][mid] == '1' for k in range(m)) == go_left:
                end = mid
            else:
                start = mid
                
        if not go_left:
            if any(image[k][end] == '1' for k in range(m)):
                return end
                    
            return start
                
        if any(image[k][start] == '1' for k in range(m)):
            return start
                
        return end
        
    def _vertical_search(self, image, start, end, go_top):
        while start + 1 < end:
            mid = start + (end - start) // 2
            
            if ("1" in image[mid]) == go_top:
                end = mid
            else:
                start = mid
                
        if not go_top:
            if "1" in image[end]:
                return end
                
            return start
                
        if "1" in image[start]:
            return start
            
        return end
