// Instructions:

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.


// My Answer:

function getCount(str) {
    let vowelsCount = 0;
    let str2 = str.replace(/\s+/g, '');
  
    for(i = 0; i < str2.length; i++){
      if(str2.charAt(i) == "a" || str2.charAt(i) == "e" || str2.charAt(i) == "i" || str2.charAt(i) == "o" || str2.charAt(i) == "u"){
        vowelsCount++;  
      }
    }
    
    return vowelsCount;
  }
  
  
  // Best Practice:
  
  // function getCount(str) {
  //   return (str.match(/[aeiou]/ig)||[]).length;
  // }