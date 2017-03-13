function maxProfit(arr){
  //store all profit possibilities in an array
  var profits = [];

  var getAllProfits = function(index, arr){
    //Take the number at the specified position and compare
    //it with all the following numbers
    var num = arr[index];
    var max_profit = 0;

    //Start from the requested index and get profits
    for (index; index < arr.length; index++){
      if(num < arr[index]){
        //Store a list of profits in an array
        profits.push(arr[index] - num);
      }
    }
  }

  //Loop through the array and get all possible profits for each number
  for (var i = 0; i < arr.length; i++){
    //Get all possible profits starting from a specific index
    getAllProfits(i, arr);
  }

  //Return the biggest number in the profits array
  return Math.max.apply(null, profits);
}

//Export to be used in unit testing
module.exports = maxProfit;