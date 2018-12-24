// Instructions:

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// My Answer:

function moveZeros(array){
  var newArray = [];

  for(let i = 0; i<array.length; i++){
    if(array[i] === 0){
      array.splice(i,1)
      newArray.push(0)
      i--
    } 
  }
    return array.concat(newArray);
}

 let array = [false,1,0,1,2,0,1,3,"a"]
 moveZeros(array)


// Best Practice:

// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }