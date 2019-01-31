// Instructions:

// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer


// My Answer:

function squareDigits(num) {
    var stringNum = num.toString();
    var arrayNum = [];
    var arraySolution = [];

    for (let i = 0; i < stringNum.length; i++) {
        arrayNum.push(Number(stringNum[i]));
        arraySolution.push(arrayNum[i] * arrayNum[i])
        var theAnswer = arraySolution.toString()
    }
    return Number(theAnswer.replace(/,/g, ''))
}

squareDigits(9119);


  // Best Practice:

  // function squareDigits(num){
  //   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

  // }