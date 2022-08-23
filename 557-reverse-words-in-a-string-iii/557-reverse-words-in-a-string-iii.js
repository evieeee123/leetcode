/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     let arr = s.split(" ");
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = reversed(arr[i])
//     }
//     return arr.join(" ")
// };

// const reversed = function(word){
//     let wordarr = word.split("")
//     let start = 0;
//     let end = word.length - 1;
    
//     while(start <= end) {
//         [wordarr[start], wordarr[end]] = [wordarr[end], wordarr[start]];
//         start++;
//         end--;
//     }
//     return wordarr.join("")
// }


// var reverseWords = function(s) {
//     let word = "";
//     let res = "";
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];
        
//         if (char !== " ") {
//             word = char + word
//         }else{
//             res += word + " "
//             word = ""
//         }
//     }
//     return res + word
// };


var reverseWords = function(s) {
    let word = "";
    let res = "";
    let i = 0;
    while (i < s.length) {
        let char = s[i];
        
        if (char !== " ") {
            word = char + word
        }else{
            res += word + " "
            word = ""
        }
        i++
    }
    return res + word
};