/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
//     let result = [];
//     for(let i = 0; i < strs.length; i++){
//         if (isAnagrams(strs[i])){
//             result.push()
//         }
//     }
    
//     return result;
    let arr = [];
    let hash = {};
    for(let i = 0; i < strs.length; i++){
        let sorted = strs[i].split("").sort().join("")
        if(hash[sorted] ){
            hash[sorted].push(strs[i]); //aet: 
        }else {
            hash[sorted] = [strs[i]];
        }
    }
    
    for(let key in hash){
        arr.push(hash[key])
    }
    
    return arr;
};