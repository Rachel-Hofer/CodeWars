// Instructions:

// Your challenge in this kata is to write a piece of code to 
// validate that a supplied string is balanced.
// You must determine if all that is open is then closed, and 
// nothing is closed which is not already open!
// You will be given a string to validate, and a second string, 
// where each pair of characters defines an opening and closing 
// sequence that needs balancing.
// You may assume that the second string always has an even 
// number of characters.
// Example: In this case '(' opens a section, and ')' closes a section
// isBalanced("(Sensei says yes!)", "()")       // => True
// isBalanced("(Sensei says no!", "()")         // => False

// My Initial Thought Process:

// function isBalanced(string, checkFor) {
//   var openersArray = [];
//   var closersArray = [];
//   var activeArray = [];
//   var splitStringArray = checkFor.split("");
//   var openingElement = string.charAt(0);
//   var index = -1;

//   for(var i = 0; i < splitStringArray.length; i++) {
    
//     if(i % 2 === 0){ // index is even
//         openersArray.push(splitStringArray[i]);
//         // console.log("OPENERS", openersArray)
//     }
//     if(i % 2 !== 0) { // index is odd
//         closersArray.push(splitStringArray[i]);
//         // console.log("CLOSERS", closersArray)
//     }

//   } 
//   for(var j = 0; j < string.length; j++){
//     index++
//     // console.log("index", index)
//       console.log("stringJ", string[j])
//       console.log("OPENER[INDEX]", openersArray[index])

//       switch(string[0]){
//       case closersArray[index]:
//         return false;
//       }
//       if(string[j] === openersArray[index]){

//       }
//   }

// }

// let string = "(Sensei [says] yes!)";
// let checkFor = "()[]";
// isBalanced(string, checkFor)


// My Final Answer:

function isBalanced(s, caps) {
  let currentlyOpen = [];

  for(let i = 0; i< s.length; i++){
    let currentLetter = s[i];
    let inThere = caps.includes(currentLetter);
    
        if(!inThere){
          continue
        }

        if(!currentlyOpen.length){
        currentlyOpen.push(currentLetter);
        continue
        }
      
        let lastThingInTheStack = currentlyOpen[currentlyOpen.length - 1];

        let theIndexOfCurrentLetterInCaps = caps.lastIndexOf(currentLetter);

        let theHypotheticalMatchingSymbol = caps[theIndexOfCurrentLetterInCaps -1];

        if(!theHypotheticalMatchingSymbol){
          currentlyOpen.push(currentLetter);
          continue
        }


        if(lastThingInTheStack === theHypotheticalMatchingSymbol){ 
          currentlyOpen.pop()
        } else{
          currentlyOpen.push(currentLetter)
        }
  }
  return !currentlyOpen.length;
}


// Best Practice:

// function isBalanced(s, caps) {
//   var i, stack = [];
//   for (var c of s) {
//     i = caps.indexOf(c);
//     if (i === -1)
//       continue;
//     else if (stack.length && stack[0] === caps.lastIndexOf(c) - 1)
//       stack.shift();
//     else
//       stack.unshift(i);
//   }
//   return !stack.length;
// }