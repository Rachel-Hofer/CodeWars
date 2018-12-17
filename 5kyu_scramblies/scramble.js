// Instructions:

// Complete the function scramble(str1, str2) that returns true 
// if a portion of str1 characters can be rearranged to match str2, 
// otherwise returns false.


// My Answer:

function scramble(str1, str2){
    let letterCounter = {};
  
    for(let letter of str1){
      if(letterCounter[letter]) letterCounter[letter]++;
       else letterCounter[letter] = 1;
      }
    
    for(let letter of str2){
    if(letterCounter[letter]) letterCounter[letter]--;
      else return false;
      }
      return true;
  }


// Best Practice:

// function scramble(str1, str2) {
//     let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
//     return str2.split("").every((character) => --occurences[character] >= 0);
// }