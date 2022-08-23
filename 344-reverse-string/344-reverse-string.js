/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     let startIndex = 0;
//     let endIndex = s.length - 1;
//     while (startIndex < endIndex){
//         let temp = s[startIndex];
//     s[startIndex] = s[endIndex];
//         s[endIndex] = temp;
//         startIndex++;
//         endIndex--;
//     }
//     return s
// };

//start index 0 h
//end index s.length-1 o
//swap ["o","e","l", "l", "h"]
//start index+1 1 e
//end index -1 "l"
//swap ["o","l","l", "e", "h"]

//["h","e","l","l","o"]


var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while(start <= end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
};