// Instructions:

// You are going to be given a word. 
// Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"


// My Answer:

function getMiddle(someWord){
    let replaced = someWord.split('').join(',');
     let letterArray = [];
     letterArray.push(replaced)
     let newLetterArray = letterArray[0].split(",");
     newLetterArray.join(",")
     let even = newLetterArray.length % 2
   if(even === 0){
     let evenIndex = (newLetterArray.length / 2)
     let evenIndex2 = evenIndex -1
     let evenArray = newLetterArray[evenIndex]
     let evenArray2 = newLetterArray[evenIndex2]
     return evenArray2 + "" + evenArray
   } else {
     let oddIndex = Math.floor((newLetterArray.length / 2))
     let oddArray = newLetterArray[oddIndex]
     return oddArray
   }
 }
 
 
 // Best Practice:
 
 // function getMiddle(s)
 // {
 //   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
 // }