/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) { //[1,02,03]
        let first = 1;
        // let last = n;
        while (first <= n) {
            let mid = Math.floor((first + n) / 2)
            if(isBadVersion(mid)) {
                n = mid - 1; //2
            } else {
                first = mid + 1; //2
            }
        }
        return first;
    };
};

// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) { //[1,02,03]
//         for(let i = 1; i < n; i++){
//             if(isBadVersion(i)){
//                 return i;
//             }
//         }
//         return n;
//     };
// };