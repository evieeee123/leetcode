/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i+1; j < prices.length; j++) {
//             let profit = prices[j] - prices[i];
//             if (profit > maxProfit) {
//                 maxProfit = profit;
//             }
//         }
//     }
//     return maxProfit;
// };

//[7,1,5,3,6,4] 5
//4
//nested for loop
//outer buy day
//inner sell day
//return Math.max(sell day - buy day)
//if profit <=0 return 0

//buyPrice = prices[0];


var maxProfit = function(prices) {
    let maxProfit = 0;
    let buyPrice = prices[0];
    
    for(let i = 0; i < prices.length; i++) {
        let profit = prices[i] - buyPrice;
        maxProfit = Math.max(profit, maxProfit)
        
        if (prices[i] < buyPrice) {
            buyPrice = prices[i]
        }
    }
    return maxProfit
};

