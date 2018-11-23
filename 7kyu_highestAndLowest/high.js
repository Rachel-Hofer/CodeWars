// Instructions:

// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, 
// and highest number is first.


// My Answer:

function sortNumber(a,b) {
    return a - b;
  }

function highAndLow(numbers){
let replaced = numbers.split(' ').join(',');
let numArray = [];
numArray.push(replaced)
let newNumArray = numArray[0].split(",");
newNumArray.sort(sortNumber);
newNumArray.join(",")

let lowest = newNumArray[0];
let highest = newNumArray[newNumArray.length - 1];

return highest + " " + lowest
}


// Best Pracrtice:

//  function highAndLow(numbers){
//  numbers = numbers.split(' ').map(Number);
//  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//  }