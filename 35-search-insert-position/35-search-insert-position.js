/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     if (target > nums[nums.length - 1]) return nums.length;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (target <= nums[i]) return i
//     }
// };

//for loop
//if target <= arr[i] return i

var searchInsert = function(nums, target) {
    let first = 0;
    let last = nums.length - 1;
    
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target){
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }
    return first
};


