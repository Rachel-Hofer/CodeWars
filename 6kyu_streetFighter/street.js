// Instructions:

// Output
// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);

// Rules
// Selection cursor is circular horizontally but not vertically!
// As you might remember from the game, the selection cursor rotates horizontally but not vertically; 
// that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost 
// (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.
// Instead, if I try to go further up from the upmost or further down from the downmost, 
// I'll just stay where I am located 
// (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).



// My Answer:

function streetFighterSelection(fighters, position, moves){

    var arr = [], height = fighters.length-1, width = fighters[0].length-1;
  
    for(var i = 0; i < moves.length; i++){
      
      switch(moves[i]) {
        case 'up':
          if(position[0] - 1 >= 0) { position[0]--; }
          break;
        case 'down':
          if(position[0] + 1 <= height) { position[0]++; }
          break;
        case 'left':
          (position[1] - 1 < 0) ? position[1] = width : position[1]--;
          break;
        case 'right':
          (position[1] + 1 > width) ? position[1]=0 : position[1]++;
          break;
        default:
          console.log("Not a direction!");
          break;
      }
      arr.push(fighters[position[0]][position[1]]);
    }
    return arr;
  }
  
  fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ]
  
  position = [0,0];
  
  moves = ['up', 'left', 'right', 'left', 'left'];
  
  streetFighterSelection(fighters, position, moves)
  
  
  
  // Best Practice:
  
  // function streetFighterSelection(fighters, position, moves){
  //   var result = [];
    
  //   moves.forEach(function(move) {
  //     if (move === "up") {
  //       position[0] = 0;
  //     }
  //     else if (move === "down") {
  //       position[0] = 1;
  //     }
  //     else if (move === "right") {
  //       position[1] = (position[1] === 5) ? 0 : position[1] + 1;
  //     }
  //     else if (move === "left") {
  //       position[1] = (position[1] === 0) ? 5 : position[1] - 1;
  //     }
      
  //     result.push(fighters[position[0]][position[1]]);
  //   });
    
  //   return result;
  // }