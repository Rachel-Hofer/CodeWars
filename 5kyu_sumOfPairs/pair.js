// Instructions:
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
// Example:
// sum_pairs([11, 3, 7, 5], 10)
// 3 + 7 = 10 == [3, 7]


// My Answer:
var sum_pairs = function(ints, s){
    let alreadySeen = {};
  
    for(let i =0; i < ints.length; i++){
      let numberNeeded = s - ints[i]
       if(alreadySeen[numberNeeded]){
       return [numberNeeded, ints[i]];
       } 
      alreadySeen[ints[i]] = true
    }
  }
  
  
  // Best Practice:
  // var sum_pairs=function(ints, s){
  //   var seen = {}
  //   for (var i = 0; i < ints.length; ++i) {
  //     if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
  //     seen[ints[i]] = true
  //   }
  // }