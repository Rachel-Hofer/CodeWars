
let words = ['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']




function anagramCounter(arrayOfWords){
  let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex)=>{
    console.log('--------', word , 'is the word')

    for(let i = theIndex+1; i < sortedWords.length; i++){
      console.log('the index is', theIndex, 'and i is', i, word, 'is being compared to', sortedWords[i])

      if(word === sortedWords[i]){
        console.log('its a match')
        numberOfAnagrams++
      }
    }
  })
  return numberOfAnagrams
}


anagramCounter(words)



Collapse