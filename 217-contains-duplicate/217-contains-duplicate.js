/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     let newArr = nums.sort();
    
//     for (let i = 0; i < newArr.length -1; i++) {
//         if (newArr[i] === newArr[i+1]) {
//             return true;
//         }
//     }
//     return false
// };

// var containsDuplicate = function(nums) {
//     let hash = {};
    
//     for(let i = 0; i < nums.length; i++) {
//         if(!hash[nums[i]]) {
//             hash[nums[i]] = 1;
//         } else {
//             hash[nums[i]]++;
//         }
//     }
    
//     for (let key in hash) {
//         if (hash[key] > 1) return true
//     }
//     return false;
// };

var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return true
    }
    return false;
};