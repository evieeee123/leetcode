/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [];
    let right = [];
    let leftOne = 1;
    let rightOne = 1;
    
    
    for (let i = 0; i < nums.length; i++) {
        left[i] = leftOne;
        leftOne *= nums[i];
    }
    
     for(let i = nums.length - 1; i >= 0; i--){
        right[i] = rightOne;
        rightOne *= nums[i];
        right[i] = right[i] * left[i];
        
    }
    
    return right;
};
