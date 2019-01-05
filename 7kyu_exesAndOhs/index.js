// Instructions:

// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// My Answer: 

function XO(str){
    let letterX = [];
    let letterO = [];

  for(let i = 0; i < str.length; i++){
    if(str[i] === "x" || str[i] === "X"){
      letterX.push(str[i])
    }
    if(str[i] === "o" || str[i] === "O"){
      letterO.push(str[i])
    }
  } 
  if(letterX.length === letterO.length){
    return true
  } else {
    return false
  }
}

let str = "xoox"
XO(str)


// Best Practice:

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }