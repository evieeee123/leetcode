/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let len = height.length - 1;
    let max = -Infinity;
    
    while (left < right){
        let area = Math.min(height[left], height[right]) * len;
        max = Math.max(max, area);
        if (height[left] <= height[right]) {
            left++;
            len--;
        }else{
            right--;
            len--;
        }
    }
    return max;
};