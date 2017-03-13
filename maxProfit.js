/*
Goal
Practice solving word problems by developing looping and calculation
algorithms that work with data in an array format.

Exercise
Create a function maxProfit, which, given a list of stock
prices for a given day, returns the maximum profit that could
have been made by buying a stock at the given price and then
selling the stock later on. For example if
the input is: [45, 24, 35, 31, 40, 38, 11] then your program
should return 16 because if you bought the stock
at $24 and sold it at $40, a profit of $16 was made and
this is the largest profit that could be made. If no profit could have been made, return -1.

Strategy 1: Brute Force
If you think about it for a few minutes, you'll realize
this problem is non-trivial to solve. So, let's not worry
about a "clean" or "efficient" solution. Here's the
recommended "brute force" strategy: for each pair of
valid dates, calculate the profit, then, figure out
which dates corresponded to the max profit.

For example, if your values were: [a, b, c], you would check profits for: [a,b], [a,c] and [b,c].

Strategy 2: Elegant Solution
Try to come up with a non-brute-force solution (
warning: not easy). You may want to read up on: Divide and Conquer.
*/


function maxProfit(arr){
  //store all profit possibilities in an array
  var profits = [];

  var compareNum = function(index, arr){
    var num = arr[index];
    var max_profit = 0;

    //start from the requested index and get profits
    for (index; index < arr.length; index++){
      if(num < arr[index]){
        profits.push(arr[index] - num);
      }
    }
  }

  for (var i = 0; i < arr.length; i++){
    compareNum(i, arr);
  }

  return Math.max.apply(null, profits);
}

module.exports = maxProfit;