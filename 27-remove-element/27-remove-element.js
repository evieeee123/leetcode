/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
//     let left = 0;
//     let right = nums.length - 1;
    
//     while (left < right){
//         if (nums[right] === val){
//             right++;
//         } else (nums[left] === val && nums[right]){
//             [nums[left], nums[right]] = [nums[right], nums[left]]
//         }
//     }
    
    let idx = 0;
    let i = 0;
    while (i < nums.length){
        if (nums[i] !== val){
            nums[idx] = nums[i];
            idx++;
        }
        i++;
    }
    return idx
    
};