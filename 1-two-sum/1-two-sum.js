/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = i + 1; j < nums.length; j++) {
    //         if(nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    let dictionary = {}
    
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (dictionary[nums[i]] !== undefined) 
            return [dictionary[nums[i]], i]
        dictionary[diff] = i
    }
};

//res=[]
//iterate theough the arr
//nested loop
//if ststement
//return res