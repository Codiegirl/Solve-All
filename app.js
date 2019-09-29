function sumAll(arr){
    var start = Math.min(arr[0], arr[1]);
    var end = Math.max(arr[0], arr[1]);
    var total = 0;
  
    for (var i=start; i<=end; i++){
      total += i
    }
    return total;
    
  }
  
  sumAll([5, 10]);//sum all numbers between these two numbers