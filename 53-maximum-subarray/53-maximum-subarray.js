/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let res = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         nums[i] = Math.max(nums[i], nums[i] + nums[i-1]) ;
//         res = Math.max(res, nums[i])
//     }
//     return res
// };

var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum < 0) {
            sum = 0;
        }else if (sum > max) {
            max = sum;
        }
        if(nums[i] > max) max = nums[i];
    }
    return max
};
