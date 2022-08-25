/**
 * @param {string} s
 * @return {number}
*/
// var lengthOfLongestSubstring = function(s) {
//     let max = 0;
//     let start = 0;
//     let hash = {};
    
//     for (let end = 0; end < s.length; end++) {
//         let rChar = s[end];
//         if (hash[rChar]) {
//             hash[rChar]++;
//         }else {
//             hash[rChar] = 1
//         }
        
//         while (hash[rChar] > 1) {
//             let lChar = s[start]
            
//             if(hash[lChar] > 1) {
//                 hash[lChar]--;
//             } else {
//                 delete hash[lChar]
//             }
//             start++;
//         }
        
//         max = Math.max(max, (end-start) + 1)
//     }
//     return max
// };

var lengthOfLongestSubstring = function(s) {
    
    let charArr = s.split('')
    if(!s || s.length === 0) return 0;
    if(s.length === 1) return 1;
    
    let pointerA = 0; //Slow Pointer
    let pointerB = 0 //Fast Pointer
    
    let output = 0;
    
    let currentCount = 0;
    let hasSeen = [];
    
    while(pointerB < s.length) {
        let currentVal = charArr[pointerB];
        
        if(!hasSeen.includes(currentVal)){
            hasSeen.push(currentVal);
            if(output < hasSeen.length){
                output = hasSeen.length;
            }  
            pointerB++;
        } else{
            if(output < hasSeen.length){
                output = hasSeen.length;
            }          
            pointerA++;
            pointerB = pointerA;
            hasSeen = [];    
        }
    }
    
    if(output === 0 && hasSeen.length){
        output = hasSeen.length;
    }
    return output;
};