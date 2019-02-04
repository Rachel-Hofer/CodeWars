// Instructions:

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.


// My Answer:

function positiveSum(arr) {
    var length = arr.length;

    if (arr.length === 0) {
        return 0
    }

    var posNums = [];
    var negNums = [];

    for (let i = 0; i < length; i++) {

        if (arr[i] <= -1) {
            negNums.push(arr[i])
            console.log("NEG")
        }
        else {
            posNums.push(arr[i])
            console.log("POS")
        }

    }
    if (posNums.length === 0) {
        console.log("HERE")
        return 0
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return posNums.reduce(reducer)
}

let arr = [-1, 2, 3, 4, -5];
positiveSum(arr);


  // Best Practice:

  // function positiveSum(arr) {
  //   var total = 0;    
  //   for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
  //     if (arr[i] > 0) {                   // if arr[i] is greater than zero
  //       total += arr[i];                  // add arr[i] to total
  //     }
  //   }
  //   return total;                         // return total
  // }