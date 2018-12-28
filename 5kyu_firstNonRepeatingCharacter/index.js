// Instructions:

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return None.


// My Answer:
function firstNonRepeatingLetter(str) {
    let discard = [];

  for(let i = 0; i <= str.length; i++){
    console.log("IIIIIIIII", i)
    for(let j = 1; j < str.length; j++){
        console.log("JJJJJJJJJ", j)
      if(i === j){

        discard.push(i)
        console.log(discard)
      }
      else {
        return i
      }
    }
  }
}

firstNonRepeatingLetter('moonmen')



// Best Practice: