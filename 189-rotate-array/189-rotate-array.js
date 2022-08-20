/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     while (k > 0){
//         nums.unshift(nums.pop())
//         k--;
//     }
// };

var rotate = function(nums, k) {
    k = k % nums.length;
    
    nums.reverse();
    reversed(nums, 0, k - 1);
    reversed(nums, k, nums.length-1)
};

const reversed = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}