/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0;
    while (i < nums.length + 1) {
        if(nums.includes(i)){
            i++
        } else {
            return i;
        }
    }
};