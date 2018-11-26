// Instructions:

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//  and 4 has only one digit
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//  1*2*6 = 12, and finally 1*2 = 2
//  persistence(4) === 0 // because 4 is already a one-digit number


// My Original Thought Process:

// function persistence(num) {
//    num = num.toString().split('')
//    let attempt = num[0] * num[1]
//    console.log("attempt:", attempt)

//    attempt = attempt.toString().split('')
//    let newAttempt = attempt[0] * attempt[1]
//    console.log("new:", newAttempt)

//    newAttempt = newAttempt.toString().split('')
//    let newerAttempt = newAttempt[0] * newAttempt[1]
//    console.log("newer:", newerAttempt) 

//    if(attempt.length === 1){
//      console.log(blah)
//    }
// }


// My Final Answer:

function persistence(n) {
    let times = 0;
    while(n.toString().length > 1) {
      times += 1;
      n = n.toString().split("").reduce( (a,b) => a * b);
    }
    return times;
  }
  
  
  // Best Practice:
  
  // function persistence(num) {
  //    var times = 0;
  //    num = num.toString();
  //    while (num.length > 1) {
  //      times++;
  //      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  //    }
  //    return times;
  // }