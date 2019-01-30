// Instructions:

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// My Answer:

function disemvowel(str) {

    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'a', 'A'];
    let letters = str.split('')
    let newArr = [];

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < vowels.length; j++) {

            if (letters[i] === vowels[j]) {
                letters.splice(i, 1)

            } else {
                letters.splice(i, 0)
            }

        }
    }

    return letters.join('')
}

let str = "No offense but,\nYour writing is mng the worst \I've ever read"
disemvowel(str)

    // Best Practice:

    // function disemvowel(str) {
    //   return str.replace(/[aeiou]/gi, '');
    // }