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
            
        y_right = self.find_far_right(image, x, y)
        y_left = self.find_far_left(image, x, y)
        x_bottom = self.find_far_bottom(image, x, y)
        x_top = self.find_far_top(image, x, y)
        
        y_range = y_right - y_left + 1
        x_range = x_bottom - x_top + 1
        
        return y_range * x_range


    def find_far_left(self, image, x, y):
        m, n = len(image), len(image[0])
        start, end = 0, y
        
        while start + 1 < end:
            mid = start + (end - start) // 2
            
            if any(image[k][mid] == '1' for k in range(m)):
                end = mid
            else:
                start = mid
                
        if any(image[k][start] == '1' for k in range(m)):
            return start
                
        return end
        
    def find_far_right(self, image, x, y):
        m, n = len(image), len(image[0])
        start, end = y, n - 1
        
        while start + 1 < end:
            mid = start + (end - start) // 2
            
            if any(image[k][mid] == '1' for k in range(m)):
                start = mid
            else:
                end = mid
                
        if any(image[k][end] == '1' for k in range(m)):
            return end
                
        return start
        
    def find_far_top(self, image, x, y):
        m, n = len(image), len(image[0])
        start, end = 0, x
        
        while start + 1 < end:
            mid = start + (end - start) // 2
            
            if "1" in image[mid]:
                end = mid
            else:
                start = mid
                
        if "1" in image[start]:
            return start
            
        return end
        
    def find_far_bottom(self, image, x, y):
        m, n = len(image), len(image[0])
        start, end = x, m - 1
        
        while start + 1 < end:
            mid = start + (end - start) // 2
            
            if "1" in image[mid]:
                start = mid
            else:
                end = mid
                
        if "1" in image[end]:
            return end
            
        return start
