// Instructions:




// My Answer:

let snail = function(arr) {
    let result = [];
    
    while(arr.length > 0) {
      result = result.concat.apply(result, arr.splice(0, 1));
      
      for(let i = 0; i < arr.length; i+=1) {
        result = result.concat(arr[i].splice(arr.length));
      }
      let temp = [].concat.apply([], arr.splice(arr.length-1)).reverse();
      result = result.concat.apply(result, temp);
      
      for(let i = arr.length-1; i >= 0; i-=1) {
        result = result.concat(arr[i].splice(0, 1));
      }
    }
    return result;
  }


// Best Practice:
// snail = function(array) {
//     var result;
//     while (array.length) {
//       // Steal the first row.
//       result = (result ? result.concat(array.shift()) : array.shift());
//       // Steal the right items.
//       for (var i = 0; i < array.length; i++)
//         result.push(array[i].pop());
//       // Steal the bottom row.
//       result = result.concat((array.pop() || []).reverse());
//       // Steal the left items.
//       for (var i = array.length - 1; i >= 0; i--)
//         result.push(array[i].shift());
//     }
//     return result;
//   }