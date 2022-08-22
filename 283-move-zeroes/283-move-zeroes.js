/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let index = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[index] = nums[i];
//             index++;
//         }
//     }
//     for (let i = index; i < nums.length; i++) {
//         nums[i] = 0;
//     }
// };

var moveZeroes = function(nums) {
    let first = 0;
    while (first <= nums.length) {
        for(let i = first + 1; i < nums.length; i++) {
            if (nums[i] !== 0 && nums[first] === 0) {
                [nums[first], nums[i]] = [nums[i], nums[first]]
                first++;
            }
        }
        first++;
    }
};