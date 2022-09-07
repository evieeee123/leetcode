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
        if(hash[strs[i].split("").sort().join("")] ){
            hash[strs[i].split("").sort().join("")].push(strs[i]); //aet: 
        }else {
            hash[strs[i].split("").sort().join("")] = [strs[i]];
        }
    }
    
    for(let key in hash){
        arr.push(hash[key])
    }
    
    return arr;
};