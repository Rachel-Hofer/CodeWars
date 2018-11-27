// Instructions:

// #Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. 
// And it will be always exactly one letter be missing. 
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Ex. ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'


// My Answer:

function findMissingLetter(array){
    let newArray = [];
    var answer = array.join('')
    
      for(i=0; i<answer.length; i++){
          var numAnswer = answer.charCodeAt(i)
          newArray.push(numAnswer)
    
          var comparisonOne = newArray[i]
          var comparisonTwo = newArray[i - 1]
          var difference = comparisonOne - comparisonTwo;
    
          if(difference > 1){
              var missing = comparisonTwo + 1;
              return String.fromCharCode(missing)
        }
      }
    }
    
    
    // Best Practice:
    
    // function findMissingLetter(array) {
    //   let first = array[0].charCodeAt(0)
    //   for (let i = 1; i < array.length; i++) {
    //     if (first + i !== array[i].charCodeAt(0)) {
    //       return String.fromCharCode(first + i)
    //     }
    //   }
    //   throw new Error("Invalid input")
    // }