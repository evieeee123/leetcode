/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
    
//     let last = nums.length - 1; //5
//     let start = 0; //4

//     while(start <= last){
//         let mid = Math.floor((start+last)/2); //4
//         if (nums[mid] === target) {
//             return mid;
//         }else if(nums[mid] < target) {
//             start = mid + 1;
//         } else if(nums[mid] > target) {
//             last = mid - 1;
//         }
//     }
//     return -1;
// };

var search = function(nums, target) {
    
    let first = 0;
    let last = nums.length - 1;
    
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (nums[mid] === target ){
            return mid;
        } else if (nums[mid] < target){
            first = mid + 1;
        } else if (nums[mid] > target){
            last = mid - 1;
        }
    }
    return -1;
};