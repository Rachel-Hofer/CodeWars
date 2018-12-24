// Instructions:

// Define a function that takes in two numbers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!
// For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6.
// The inputs to your function will always be non-negative integers.


// My Answer:

// var lastDigit = function(str1, str2){  

    function lastDigit(str1, str2){
        var num = Math.pow(str1, str2);
        var lastOne = num.toString().split('').pop()
        var finalAnswer = parseInt(lastOne)
    
        if(num === Infinity){
          return 0
        } 
        else {
          return finalAnswer
        }
    
    }
    
    let str1 = 10;
    let str2 = 10000000000;
    lastDigit(str1, str2)
    
    
    // Best Practice: