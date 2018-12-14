// Instructions:

// Once upon a time, on a way through the old wild west,…
// … a man was given directions to go from one point to another. 
// The directions were "NORTH", "SOUTH", "WEST", "EAST". 
// Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
// Going to one direction and coming back the opposite direction is a needless effort. 
// Since this is the wild west, with dreadfull weather and not much water, 
// it's important to save yourself some energy, otherwise you might die of thirst!
// How I crossed the desert the smart way.
// The directions given to the man are, for example, the following:
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or (haskell)
// [North, South, South, East, West, North, West]


// My Answer:

function dirReduc(arr){
    let stack = [];
  
    for(direction of arr){
  
      let opposite;
  
      if(direction === "NORTH") opposite = "SOUTH"
      if(direction === "SOUTH") opposite = "NORTH"
      if(direction === "EAST") opposite = "WEST"
      if(direction === "WEST") opposite = "EAST"
  
      if(stack[0] === opposite){
        stack.shift()
      } else {
        stack.unshift(direction)
      }
    }
    return stack.reverse();
  }
  
  let arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
  dirReduc(arr)
  
  
  // Best Practice:
  
  // function dirReduc(plan) {
  //   var opposite = {
  //     'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  //   return plan.reduce(function(dirs, dir){
  //       if (dirs[dirs.length - 1] === opposite[dir])
  //         dirs.pop();
  //       else
  //         dirs.push(dir);
  //       return dirs;
  //     }, []);
  // }