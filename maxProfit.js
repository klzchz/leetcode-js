// Given an array prices where prices[i] is the price of a given stock on the ith day.
var maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let maxP = 0;

    while(r < prices.length){
        if(prices[l] < prices[r]){
            profit = prices[r] - prices[l];
            maxP = Math.max(maxP,profit)
        }else{l=r}
        r++;
    }
    return maxP
};

console.log(maxProfit([7,1,5,3,6,4])) // 5