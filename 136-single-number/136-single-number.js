/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     let hash = {}
//     for (let num of nums) {
//         if(!hash[num]){
//             hash[num] = 1
//         }else{
//             hash[num]++
//         }
//     }
//     for(let key in hash){
//         if(hash[key] === 1) return key
//     }
// };

var singleNumber = function(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]){
            hash[nums[i]] = 1
        }else{
            hash[nums[i]]++
        }
    }
    for(let key in hash){
        if(hash[key] === 1) return key
    }
};