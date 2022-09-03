/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     let i = 0;
//     while (i < nums.length + 1) {
//         if(nums.includes(i)){
//             i++
//         } else {
//             return i;
//         }
//     }
// };

var missingNumber = function(nums) {
    let i = 0;
    let j = 0;
    let sumNums = 0;
    let sum = 0;
    while(i < nums.length) {
        sumNums += nums[i]
        i++;
    }
    
    while (j <= nums.length){
        sum += j;
        j++;
    }
    return sum - sumNums
};