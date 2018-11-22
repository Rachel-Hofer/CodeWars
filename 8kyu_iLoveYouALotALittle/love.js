// Instructions:

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


// My Answer:

function howMuchILoveYou(nbPetals) {
    let sayings = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let index = (nbPetals % 6) - 1;
    let end = index + 1;

      if(index === -1){
    let whichSaying = sayings.slice(5)
    let answer = whichSaying.toString()

    return answer;
      } else {
    let whichSaying = sayings.slice(index, end)
    let answer = whichSaying.toString()

    return answer;
      }
    
}


// Best Practice

// const phrases = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
// ]

// function howMuchILoveYou(n) {
//      return phrases[(n - 1) % phrases.length] 
// }