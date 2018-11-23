// Instructions:

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


// My Answer:

function findShort(shortest){
    let replaced = shortest.split(' ').join(',');
    let wordArray = [];
    wordArray.push(replaced)
    let newWordArray = wordArray[0].split(",");
    newWordArray.join(",")
   
    let short = newWordArray.filter(e => typeof e === 'string').sort((a, b) => a.length - b.length)[0]
    return short.length
  }
  
  
  // Best Practice:
  
  // function findShort(s){
  //   return Math.min.apply(null, s.split(' ').map(w => w.length));
  // }