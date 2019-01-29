// Instructions:

// A Noun Phrase is a phrase that can be replaced by a pronoun [he/she/it].
// For example, in the sentence:
// a girl ate the cookie
// "A girl" is a Noun Phrase, so we can say "she ate the cookie." "The cookie" is also a Noun Phrase, so we can even say "she ate it."
// Both of these Noun Phrases are made up of an auxiliary (aux) [the/a] followed by a Noun (N) [girl/cookie].
// More complicated Noun Phrases can also include an arbitrary number of adjectives (adj). For example:
// a big tall scary girl ate the cookie
// where "big", "tall", and "scary" are all adjectives.
// For our simplified model, we will define a Noun Phrase as an auxiliary, followed by 0 or more adjectives, followed by a Noun.
// Write a function that takes a sentence (as a string of words separated by spaces), a list of pronouns, and a dictionary 
// (mapping words to the grammatical categories aux, adj, and N). Return the sentence with all Noun Phrases replaced by pronouns, in the order given.

// Assume:
// sentences will contain only lower-case letters and spaces (no punctuation)
// any words not included in the dictionary are not auxiliaries, adjectives, or nouns
// the number of pronouns provided will be equal to the number of Noun Phrases in the sentence


// My Answer:

function replaceNounPhrases(sentence, pronouns, dictionary) {
    var words = sentence.split(" ");
    var auxIndex = -1;
    var pronounIndex = 0;
    for (var i = 0; i < words.length; i++) {
        if (!(words[i] in dictionary)) {
            auxIndex = -1;
        } else if (dictionary[words[i]] === "aux") {
            auxIndex = i;
        } else if (dictionary[words[i]] === "N" && auxIndex !== -1) {
            words.splice(auxIndex, i - auxIndex + 1, pronouns[pronounIndex]);
            pronounIndex++;
            auxIndex = -1;
            i = auxIndex;
        }
    }
    return words.join(" ");
}

let sentence = "a girl ate the cookie";
let pronouns = ["she", "it"];
let dictionary = {
    'a': 'aux',
    'the': 'aux',
    'girl': 'N',
    'cookie': 'N',
    'big': 'adj',
    'tall': 'adj',
    'scary': 'adj'
};

replaceNounPhrases(sentence, pronouns, dictionary);


  // Best Practice:

  // function replaceNounPhrases(sentence, pronouns, dictionary){
  //   let N = Object.entries(dictionary).filter(el => el[1] === "N").map(el=>el[0]).join("|")
  //   let adj = Object.entries(dictionary).filter(el => el[1] === "adj").map(el=>el[0]).join("|")
  //   let aux = Object.entries(dictionary).filter(el => el[1] === "aux").map(el=>el[0]).join("|")

  //   let regexp = new RegExp(`(${aux}) ((${adj}) )*(${N})`,"ig")

  //   let string = sentence.replace(regexp, match => pronouns.shift())

  //   return string
  // }