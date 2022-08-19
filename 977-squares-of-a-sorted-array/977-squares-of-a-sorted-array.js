/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for (let i = 0;  i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    
    let first = 0;
    let last = nums.length - 1;
    let res = [];
    while (first <= last) {
        if( nums[first] > nums[last] ) {
            res.unshift(nums[first]);
            first++;
        }else{
            res.unshift(nums[last]);
            last--;
        }
    }
    return res
};